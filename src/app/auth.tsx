"use client";

import { usePathname } from "next/navigation";
import Header from "@/shared/navigation/header";
import Sidebar from "@/shared/navigation/sidebar";
import Footer from "@/shared/navigation/footer";
import Copyright from "@/shared/navigation/copyright";

export default function Auth({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const auth = pathname.startsWith("/login") || pathname.startsWith("/register");
  const role = pathname.startsWith("/admin") || pathname.startsWith("/bank") || pathname.startsWith("/customer") || pathname.startsWith("/farmer");

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