import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { JWT } from "@/utils/jwt";
import { Role } from "@/types/auth";

const publicRoutes: string[] = ["/", "/about", "/blog", "/service", "/support", "/partners", "/career"];
const roleRoutes: Record<string, string> = { ADMIN: "/admin", BANK: "/bank", CUSTOMER: "/customer", FARMER: "/farmer" };

function isRouteMatch(url: string, routes: string[]) {
  return routes.some(route => url === route || url.startsWith(`${route}/`));
}

async function getUserRole(request: NextRequest) {
  const session = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  if (session?.role) return session?.role;

  const token = request.cookies.get("access_token")?.value;
  const refreshToken = request.cookies.get("refresh_token")?.value;

  if (token && refreshToken) return await JWT.validate(request.nextUrl.origin, token, refreshToken);
  return null;
}

export async function middleware(request: NextRequest) {
  const url: string = request.nextUrl.pathname;

  if (isRouteMatch(url, publicRoutes)) return NextResponse.next();

  const role: Role = await getUserRole(request).catch((error) => {
    console.error(process.env.NODE_ENV !== "production" && `[Middleware Error]: ${error}`);
    return null;
  });

  if (isRouteMatch(url, ["/login", "/register"])) {
    if (!role) return NextResponse.next();
    const redirectUrl: string = role === "UNKNOWN" ? "/verify" : roleRoutes[role] || "/";
    return NextResponse.redirect(new URL(redirectUrl, request.url));
  }

  if (url === "/verify") {
    if (!role) return NextResponse.redirect(new URL("/login", request.url));
    if (role !== "UNKNOWN" && roleRoutes[role]) return NextResponse.redirect(new URL(roleRoutes[role], request.url));
    return NextResponse.next();
  }

  if (!role) return NextResponse.redirect(new URL("/login", request.url));
  if (role === "UNKNOWN") return NextResponse.redirect(new URL("/verify", request.url));

  const isProtectedRoute: boolean = Object.values(roleRoutes).some(path => url.startsWith(path));
  if (isProtectedRoute && !url.startsWith(roleRoutes[role])) return NextResponse.redirect(new URL(roleRoutes[role], request.url));
  return NextResponse.next();
}

// prettier-ignore
export const config = {
  matcher: ["/login", "/register", "/verify", "/admin/:path*", "/bank/:path*", "/customer/:path*", "/farmer/:path*"],
};