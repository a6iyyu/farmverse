"use client";

import { ReactElement, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Newspaper, NotebookPen, Warehouse, X } from "lucide-react";
import { GrServices } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

export default function HamburgerMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);
  const links: { label: string; icon: ReactElement }[] = [
    { label: "Blog", icon: <Newspaper className="h-4 w-4" /> },
    { label: "Service", icon: <GrServices className="h-4 w-4" /> },
    { label: "Support", icon: <RiCustomerService2Fill className="h-4 w-4" /> },
    { label: "Register", icon: <NotebookPen className="h-4 w-4" /> },
    { label: "Login", icon: <Warehouse className="h-4 w-4" /> },
  ];

  return (
    <>
      <button onClick={() => setOpen(true)} className="z-50 flex items-center text-amber-500 lg:hidden">
        <Menu className="h-7 w-7" />
      </button>
      <aside className={`fixed top-0 right-0 z-50 min-h-screen w-72 rounded-l-2xl bg-slate-900 p-6 text-white shadow-2xl transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
        <section className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              height={40}
              width={40}
              src="/favicon.ico"
              alt="Logo"
              className="object-contain"
              loading="lazy"
            />
            <span>
              <h5 className="text-lg font-bold">Farmverse</h5>
              <p className="text-sm text-gray-300 italic">
                Agricultural Future
              </p>
            </span>
          </div>
          <button onClick={() => setOpen(false)} className="text-white">
            <X className="h-6 w-6" />
          </button>
        </section>
        <hr className="my-4 border-gray-600" />
        <nav className="flex flex-col space-y-4">
          {links.map((link, index: number) => (
            <Link
              key={index}
              href={`/${link.label.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base transition-all hover:bg-amber-600 hover:text-white ${pathname === `/${link.label.toLowerCase()}` ? "bg-amber-500 font-semibold text-white" : "hover:bg-amber-600 hover:text-white"}`}
            >
              {link.icon} {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}