"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./hamburger-menu";

// prettier-ignore
export default function Header() {
  const [headerSticky, setHeaderSticky] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setHeaderSticky(window.scrollY > 5));
    return () => window.removeEventListener("scroll", () => setHeaderSticky(window.scrollY > 5));
  });

  return (
    <header className={`fixed top-0 z-50 w-full px-8 py-4 font-semibold transition-colors duration-300 ${headerSticky ? "bg-slate-50 text-black shadow-2xl" : "bg-none text-amber-500"}`}>
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            height={1000}
            width={1000}
            src="/logo.png"
            alt="Ikon"
            className="h-fit w-24 lg:w-40"
            loading="lazy"
          />
        </Link>
        <nav className="hidden items-center justify-center space-x-6 lg:flex">
          <Link href="/blog" className="group">
            Blog
            <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-500 group-hover:max-w-full" />
          </Link>
          <Link href="/service" className="group">
            Service
            <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-500 group-hover:max-w-full" />
          </Link>
          <Link href="/support" className="group">
            Support
            <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-500 group-hover:max-w-full" />
          </Link>
        </nav>
        <section className="hidden items-center justify-end space-x-6 lg:flex">
          <Link href="/register" className="group">
            Register
            <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-500 group-hover:max-w-full" />
          </Link>
          <Link href="/login" className="rounded-lg bg-amber-600 px-6 py-2.5 text-white transition-colors duration-300 lg:hover:bg-amber-700">
            Login
          </Link>
        </section>
        <HamburgerMenu />
      </div>
    </header>
  );
}