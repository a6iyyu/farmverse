import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@/utils/prisma";

// prettier-ignore
export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const url = request.nextUrl.pathname;
  const publicPaths = ["/", "/login", "/register"];
  
  if (publicPaths.includes(url)) return NextResponse.next();
  if (!token || typeof token !== "string" || token.length !== 64) return NextResponse.redirect(new URL("/login", request.url));

  const session = await Prisma.sessions.findUnique({ where: { token } });
  if (!session || new Date() > (session.expires_at ?? new Date())) return NextResponse.redirect(new URL("/login", request.url));

  const user = await Prisma.users.findUnique({ where: { id_user: session.id_user } });
  if (!user) return NextResponse.redirect(new URL("/login", request.url));

  const roleRoutes: Record<string, string> = { FARMER: "/farmer", BANK: "/bank", ADMIN: "/admin" };
  const protectedRoutes = Object.values(roleRoutes).some(path => url.startsWith(path));

  if (protectedRoutes && !url.startsWith(roleRoutes[user.role])) return NextResponse.redirect(new URL(roleRoutes[user.role], request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/farmer/:path*", "/admin/:path*", "/bank/:path*"],
};