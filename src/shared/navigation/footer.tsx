"use client";

import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

// prettier-ignore
export default function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-bl from-amber-900 to-amber-800 py-12">
      <div className="container mx-auto flex w-[90vw] flex-col items-center justify-between gap-12 lg:flex-row">
        <section className="w-full text-justify leading-7 lg:mr-20 lg:w-auto">
          <Image
            height={1000}
            width={1000}
            src="/logo.png"
            alt="Logo"
            className="w-50"
            loading="lazy"
          />
          <p className="mt-6 cursor-default text-slate-200">
            Farmverse berupaya mendukung ketahanan pangan berkelanjutan demi
            masa depan Indonesia yang lebih baik untuk generasi mendatang.
          </p>
        </section>
        <section className="flex w-full flex-col justify-end space-y-6 space-x-0 lg:ml-0 lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-20">
          <ul className="flex flex-col text-slate-200">
            <strong className="mb-4 cursor-default text-xl">Collaborate</strong>
            <Link href="/about" className="group mb-2 w-fit transition duration-300">
              About
              <span className="block h-0.5 max-w-0 bg-slate-300 transition-all duration-500 group-hover:max-w-full" />
            </Link>
            <Link href="/career" className="group mb-2 w-fit transition duration-300">
              Career
              <span className="block h-0.5 max-w-0 bg-slate-300 transition-all duration-500 group-hover:max-w-full" />
            </Link>
            <Link href="/partners" className="group mb-2 w-fit transition duration-300">
              Partners
              <span className="block h-0.5 max-w-0 bg-slate-300 transition-all duration-500 group-hover:max-w-full" />
            </Link>
          </ul>
          <ul className="flex flex-col text-slate-200">
            <strong className="mb-4 cursor-default text-xl">Explore</strong>
            <Link href="/blog" className="group mb-2 w-fit transition duration-300">
              Blog
              <span className="block h-0.5 max-w-0 bg-slate-300 transition-all duration-500 group-hover:max-w-full" />
            </Link>
            <Link href="/service" className="group mb-2 w-fit transition duration-300">
              Service
              <span className="block h-0.5 max-w-0 bg-slate-300 transition-all duration-500 group-hover:max-w-full" />
            </Link>
            <Link href="/support" className="group mb-2 w-fit transition duration-300">
              Support
              <span className="block h-0.5 max-w-0 bg-slate-300 transition-all duration-500 group-hover:max-w-full" />
            </Link>
          </ul>
          <ul className="flex flex-col text-slate-200">
            <strong className="mb-4 cursor-default text-xl">Follow Us</strong>
            <span className="flex space-x-8">
              <Link href="https://www.instagram.com/farmverse.id/" className="rounded-full bg-white/20 p-3 transition-colors duration-300 lg:hover:bg-white/30">
                <FaInstagram size={24} />
              </Link>
              <Link href="https://www.x.com/farmverse.id/" className="rounded-full bg-white/20 p-3 transition-colors duration-300 lg:hover:bg-white/30">
                <FaTwitter size={24} />
              </Link>
              <Link href="https://www.linkedin.com/company/farmverse.id/" className="rounded-full bg-white/20 p-3 transition-colors duration-300 lg:hover:bg-white/30">
                <FaLinkedin size={24} />
              </Link>
            </span>
          </ul>
        </section>
      </div>
    </footer>
  );
}