import { Home } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

// prettier-ignore
export const metadata: Metadata = {
  title: "404",
  description: "Oops, halaman yang Anda cari tidak ditemukan.",
  openGraph: {
    title: "404",
    description: "Oops, halaman yang Anda cari tidak ditemukan.",
  },
  twitter: {
    title: "404",
    description: "Oops, halaman yang Anda cari tidak ditemukan.",
  },
};

// prettier-ignore
export default function Custom404() {
  return (
    <section className="container mx-auto flex h-screen w-[90vw] cursor-default flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">404</h1>
      <p className="text-lg">
        Oops, halaman yang Anda cari tidak ditemukan.
        <br />
        Silahkan kembali ke halaman utama.
      </p>
      <Link href="/" className="mt-4 inline-flex items-center rounded-md bg-amber-600 px-4 py-3 text-white transition-colors duration-300 lg:hover:bg-amber-500">
        <Home className="mr-3" /> Kembali
      </Link>
    </section>
  );
}