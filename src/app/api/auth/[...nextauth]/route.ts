import { randomUUID } from "crypto";
import { Prisma } from "@/utils/prisma";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const createUserIfNotExists = async (email: string, name?: string | null | undefined) => {
  const existingUser = await Prisma.users.findUnique({ where: { email } });
  if (existingUser) return existingUser;

  try {
    return await Prisma.users.create({
      data: {
        username: name ?? email ?? "Tidak Diketahui",
        name: name ?? email ?? "Tidak Diketahui",
        email,
        password: null,
        role: "UNKNOWN",
      },
    });
  } catch (error) {
    console.error(process.env.NODE_ENV !== "production" && `Gagal membuat pengguna: ${error}`);
    throw new Error("Gagal membuat pengguna.");
  }
};

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== "google" || !user.email) return false;
      const dbUser = await createUserIfNotExists(user.email, user.name);

      const existingSession = await Prisma.sessions.findFirst({ where: { id_user: dbUser!.id_user } });
      if (!existingSession) await Prisma.sessions.create({ data: { id_user: dbUser!.id_user, token: account.access_token ?? randomUUID() } });

      return true;
    },
    async jwt({ token, user, account }) {
      if (user?.email) {
        const email = await Prisma.users.findUnique({ where: { email: user.email } });
        if (email) {
          token.role = email.role;
          token.id_user = email.id_user;
          token.token = account?.access_token ?? randomUUID();
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token) {
        session.user.role = token.role as string;
        session.user.id_session = token.id_user as string;
        session.user.token = token.token as string;
      }
      return session;
    },
    redirect({ url, baseUrl }) {
      const isInternalUrl = url.startsWith(baseUrl) || url.startsWith("/");
      return isInternalUrl ? (url.startsWith("/") ? `${baseUrl}${url}` : url) : baseUrl;
    },
  },
  pages: { signIn: "/login", signOut: "/login", error: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };