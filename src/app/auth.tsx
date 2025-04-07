"use client";

import { usePathname } from "next/navigation";
import Header from "@/shared/navigation/header";
import Footer from "@/shared/navigation/footer";
import Copyright from "@/shared/navigation/copyright";

export default function Auth({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const auth = pathname.startsWith("/login") || pathname.startsWith("/register") || pathname.startsWith("/admin") || pathname.startsWith("/bank") || pathname.startsWith("/farmer");

  return (
    <>
      {!auth && <Header />}
      {children}
      {!auth && <Footer />}
      {!auth && <Copyright />}
    </>
  );
}