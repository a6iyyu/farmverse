"use client";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Header from "@/shared/navigation/header";
import Sidebar from "@/shared/navigation/sidebar";
import Footer from "@/shared/navigation/footer";
import Copyright from "@/shared/navigation/copyright";

export default function Auth({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data: session } = useSession();
  const auth = pathname.startsWith("/login") || pathname.startsWith("/register") || pathname.startsWith("/verify");
  const role = pathname.startsWith("/admin") || pathname.startsWith("/bank") || pathname.startsWith("/customer") || pathname.startsWith("/farmer");

  useEffect(() => {
    if (session?.user.token) document.cookie = `refresh_token=${session.user.token}; path=/; SameSite=Strict`;
  }, [session]);

  return (
    <>
      {!auth && !role && <Header />}
      {role && <Sidebar />}
      {children}
      {!auth && !role && <Footer />}
      {!auth && !role && <Copyright />}
    </>
  );
}