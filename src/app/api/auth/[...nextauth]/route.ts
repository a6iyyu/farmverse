import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Prisma } from "@/utils/prisma";
import { randomUUID } from "crypto";
import { JWT } from "@/utils/jwt";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === "google" && user.email) {
        try {
          let dbUser = await Prisma.users.findUnique({
            where: { email: user.email },
          });

          if (!dbUser) {
            const placeholderPassword = `oauth_${randomUUID()}`;

            dbUser = await Prisma.users.create({
              data: {
                username: user.name ?? user.email ?? "Tidak Diketahui",
                name: user.name ?? user.email ?? "Tidak Diketahui",
                email: user.email,
                password: placeholderPassword.substring(0, 60),
                role: "UNKNOWN",
              },
            });
            
            return true;
          } else {
            console.log("User sudah ada di database:", dbUser.email);
            return true;
          }
        } catch (error) {
          console.error("Terjadi kesalahan saat masuk:", error);
          return false;
        }
      }
      return false;
    },
    
    async jwt({ token, user, account }) {
      if (user && user.email) {
        const dbUser = await Prisma.users.findUnique({
          where: { email: user.email },
        });
        
        if (dbUser) {
          token.role = dbUser.role;
          token.id_user = dbUser.id_user;
        }
      }
      return token;
    },
    
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role as string;
        session.user.id = token.id_user as string;
      }
      return session;
    },
    
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) {
        if (url === baseUrl || url === `${baseUrl}/`) {
          return baseUrl;
        }
        return url;
      } else if (url.startsWith('/')) {
        return `${baseUrl}${url}`;
      }
      return baseUrl;
    }
  },

  pages: {
    signIn: '/login',
    signOut: '/login',
    error: '/login',
  },

  debug: process.env.NODE_ENV !== "production",
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
