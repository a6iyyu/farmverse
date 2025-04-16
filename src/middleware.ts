import { NextRequest, NextResponse } from "next/server";
import { JWT } from "@/utils/jwt";

export async function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get("refresh_token")?.value;
  const roleRoutes: Record<string, string> = { ADMIN: "/admin", BANK: "/bank", CUSTOMER: "/customer", FARMER: "/farmer" };
  const token = request.cookies.get("access_token")?.value;
  const url = request.nextUrl.pathname;

  if (["/login", "/register"].includes(url)) {
    if (!token || !refreshToken) return NextResponse.next();

    try {
      const res = await fetch(`${request.nextUrl.origin}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, refreshToken }),
      });

      if (!res.ok) throw new Error("Gagal untuk memvalidasi token!");

      const { role } = await res.json();
      return NextResponse.redirect(new URL(roleRoutes[role], request.url));
    } catch (error) {
      console.error(process.env.NODE_ENV !== "production" && `[Middleware Error]: ${error}`);
      return NextResponse.next();
    }
  }

  if (!token || !refreshToken) return NextResponse.redirect(new URL("/login", request.url));

  try {
    const res = await fetch(`${request.nextUrl.origin}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, refreshToken }),
    });

    if (!res.ok) throw new Error("Gagal untuk memvalidasi token!");

    const { role } = await res.json();
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
  matcher: ["/login", "/register", "/admin/:path*", "/bank/:path*", "/customer/:path*", "/farmer/:path*"],
};