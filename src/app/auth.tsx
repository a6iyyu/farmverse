"use client";

import { usePathname } from "next/navigation";
import Header from "@/shared/header";
import Footer from "@/shared/footer";
import Copyright from "@/shared/copyright";

export default function Auth({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const auth = pathname.startsWith("/auth") || pathname.startsWith("/admin") || pathname.startsWith("/bank") || pathname.startsWith("/farmer");

  return (
    <>
      {!auth && <Header />}
      {children}
      {!auth && <Footer />}
      {!auth && <Copyright />}
    </>
  );
}