import NextAuth, { DefaultSession } from "next-auth";
import { JWT as NextAuthJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    id_user: string;
    role: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id_user: string;
    role: string;
  }
}