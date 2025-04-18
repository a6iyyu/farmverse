import { NextRequest, NextResponse } from "next/server";
import { JWT } from "@/utils/jwt";
import { getToken } from "next-auth/jwt";

const publicRoutes = [
  "/",
  "/about",
  "/blog",
  "/service",
  "/support",
  "/partners",
  "/career",
];

export async function middleware(request: NextRequest) {
  const url: string = request.nextUrl.pathname;
  
  const isPublicRoute = publicRoutes.some(route => 
    url === route || url.startsWith(`${route}/`)
  );
  
  if (isPublicRoute) {
    return NextResponse.next();
  }

  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const refreshToken: string | undefined = request.cookies.get("refresh_token")?.value;
  const token: string | undefined = request.cookies.get("access_token")?.value;

  const verificationUrl = "/verify";
  const loginUrl = "/login";
  const registerUrl = "/register";
  
  const roleRoutes: Record<string, string> = {
    ADMIN: "/admin",
    BANK: "/bank",
    CUSTOMER: "/customer",
    FARMER: "/farmer",
  };

  if ([loginUrl, registerUrl].includes(url)) {
    if (session || (token && refreshToken)) {
      try {
        let role;

        if (session) {
          role = session.role;
        } else if (token && refreshToken) {
          role = await JWT.validate(
            request.nextUrl.origin,
            token,
            refreshToken,
          );
        }

        if (role === "UNKNOWN") {
          return NextResponse.redirect(new URL(verificationUrl, request.url));
        } else if (roleRoutes[role]) {
          return NextResponse.redirect(new URL(roleRoutes[role], request.url));
        }
      } catch (error) {
        console.error(
          process.env.NODE_ENV !== "production" && `[Middleware Error]: ${error}`,
        );
        
        const response = NextResponse.next();
        response.cookies.delete("access_token");
        response.cookies.delete("refresh_token");
        return response;
      }
    }
    
    return NextResponse.next();
  }

  if (url === verificationUrl) {
    const isAuthenticated = session || (token && refreshToken);
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL(loginUrl, request.url));
    }

    try {
      let role;
      
      if (session) {
        role = session.role;
      } else if (token && refreshToken) {
        role = await JWT.validate(
          request.nextUrl.origin,
          token,
          refreshToken,
        );
      }

      if (role && role !== "UNKNOWN" && roleRoutes[role]) {
        return NextResponse.redirect(new URL(roleRoutes[role], request.url));
      }
      
      return NextResponse.next();
    } catch (error) {
      console.error(
        process.env.NODE_ENV !== "production" && `[Middleware Error]: ${error}`,
      );
      return NextResponse.redirect(new URL(loginUrl, request.url));
    }
  }

  const isAuthenticated = session || (token && refreshToken);
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL(loginUrl, request.url));
  }

  try {
    let role;
    
    if (session) {
      role = session.role;
    } else if (token && refreshToken) {
      role = await JWT.validate(
        request.nextUrl.origin,
        token, 
        refreshToken,
      );
    }

    if (role === "UNKNOWN") {
      return NextResponse.redirect(new URL(verificationUrl, request.url));
    }

    const protectedRoute = Object.values(roleRoutes).some((path) =>
      url.startsWith(path),
    );
    
    if (protectedRoute) {
      if (!roleRoutes[role] || !url.startsWith(roleRoutes[role])) {
        const correctDashboard = roleRoutes[role] ? roleRoutes[role] : "/";
        return NextResponse.redirect(new URL(correctDashboard, request.url));
      }
    }
    
    return NextResponse.next();
  } catch (error) {
    console.error(
      process.env.NODE_ENV !== "production" && `[Middleware Error]: ${error}`,
    );
    const response = NextResponse.redirect(new URL(loginUrl, request.url));
    response.cookies.delete("access_token");
    response.cookies.delete("refresh_token");
    return response;
  }
}

export const config = {
  matcher: [
    "/login",
    "/register",
    "/verify",
    "/admin/:path*",
    "/bank/:path*",
    "/customer/:path*",
    "/farmer/:path*",
  ],
};
