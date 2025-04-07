import { NextRequest, NextResponse } from "next/server";
import { JWT } from "@/utils/jwt";

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.pathname;
  const publicPaths = ["/", "/login", "/register"];
  if (publicPaths.includes(url)) return NextResponse.next();

  const token = request.cookies.get("access_token")?.value;
  if (!token) return NextResponse.redirect(new URL("/login", request.url));

  const payload = await JWT.verify<{ id_user: string; role: string }>(token);
  if (!payload?.role) return NextResponse.redirect(new URL("/login", request.url));

  const refreshToken = request.cookies.get("refresh_token")?.value;
  if (!refreshToken) return NextResponse.redirect(new URL("/login", request.url));
  const validationResponse = await fetch(`${request.nextUrl.origin}/api/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, refreshToken }),
  });

  if (!validationResponse.ok) return NextResponse.redirect(new URL("/login", request.url));

  const { valid, role } = await validationResponse.json();
  if (!valid) return NextResponse.redirect(new URL("/login", request.url));

  const roleRoutes: Record<string, string> = {
    FARMER: "/farmer",
    BANK: "/bank",
    ADMIN: "/admin",
  };

  const protectedRoutes = Object.values(roleRoutes).some((path) => url.startsWith(path));
  if (protectedRoutes && !url.startsWith(roleRoutes[role])) return NextResponse.redirect(new URL(roleRoutes[role], request.url));

  return NextResponse.next();
}

export const config = {
  matcher: ["/farmer/:path*", "/admin/:path*", "/bank/:path*"],
};