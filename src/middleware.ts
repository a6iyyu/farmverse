import { NextRequest, NextResponse } from "next/server";
import { JWT } from "@/utils/jwt";
import axios from "axios";

export async function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get("refresh_token")?.value;
  const roleRoutes: Record<string, string> = { FARMER: "/farmer", BANK: "/bank", ADMIN: "/admin" };
  const token = request.cookies.get("access_token")?.value;
  const url = request.nextUrl.pathname;

  if (["/login", "/register"].includes(url)) {
    if (!token || !refreshToken) return NextResponse.next();
    
    try {
      const { data } = await axios.post(`${request.nextUrl.origin}/api/login`, { token, refreshToken }, {
        headers: { "Content-Type": "application/json" },
      });

      const { role } = data;
      return NextResponse.redirect(new URL(roleRoutes[role], request.url));
    } catch (error) {
      console.error(process.env.NODE_ENV !== "production" && `[Middleware Error]: ${error}`);
      return NextResponse.next();
    }
  }

  if (!token || !refreshToken) return NextResponse.redirect(new URL("/login", request.url));

  try {
    const { data } = await axios.post(`${request.nextUrl.origin}/api/login`, { token, refreshToken }, {
      headers: { "Content-Type": "application/json" },
    });

    const { role } = data;
    const payload = await JWT.verify<{ id_user: string; role: string }>(token);
    if (payload?.role !== role) throw new Error("Peran Anda tidak valid.");

    const protectedRoute = Object.values(roleRoutes).some((path) => url.startsWith(path));
    if (protectedRoute && !url.startsWith(roleRoutes[role])) return NextResponse.redirect(new URL(roleRoutes[role], request.url));

    return NextResponse.next();
  } catch (error) {
    console.error(process.env.NODE_ENV !== "production" && `[Middleware Error]: ${error}`);
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("access_token");
    response.cookies.delete("refresh_token");
    return response;
  }
}

export const config = {
  matcher: ["/login", "/register", "/farmer/:path*", "/admin/:path*", "/bank/:path*"],
};