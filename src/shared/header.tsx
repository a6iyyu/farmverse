"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [headerSticky, setHeaderSticky] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      setHeaderSticky(window.scrollY > 5),
    );
  });

  return (
    <header className={`fixed top-0 z-50 flex w-full items-center justify-between px-8 py-3 transition-all duration-300 ease-in-out ${headerSticky ? "bg-slate-50 font-semibold shadow-2xl" : "bg-none font-semibold text-white"}`}>
      <figure className="">
        <Image
          height={1000}
          width={1000}
          src="/ikon.png"
          alt="Ikon"
          className="h-fit w-40"
          loading="lazy"
        />
      </figure>
      <nav className="flex items-center justify-center space-x-6">
        <Link href="/blog" className="group transition duration-300">
          Blog
          <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-500 group-hover:max-w-full" />
        </Link>
        <Link href="/service" className="group transition duration-300">
          Service
          <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-500 group-hover:max-w-full" />
        </Link>
        <Link href="/support" className="group transition duration-300">
          Support
          <span className="block h-0.5 max-w-0 bg-amber-600 transition-all duration-500 group-hover:max-w-full" />
        </Link>
      </nav>
      <section className="flex items-center justify-end space-x-6">
        <Link href="/auth/register">Register</Link>
        <Link href="/auth/login" className="rounded-lg bg-amber-600 px-6 py-2.5 text-white transition-colors duration-300 lg:hover:bg-amber-700">
          Login
        </Link>
      </section>
    </header>
  );
}