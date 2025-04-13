import { Metadata } from "next";
import Client from "@/app/support/client";
import HubungiKami from "@/components/support/hubungi-kami";
import Formulir from "@/components/support/formulir";

// prettier-ignore
export const metadata: Metadata = {
  title: "Dukungan",
  description: "Bingung menggunakan Farmverse? Tenang! Halaman dukungan ini siap bantu kamu dengan panduan, jawaban atas pertanyaan umum, dan tim support yang siap membantu.",
  openGraph: {
    title: "Dukungan",
    description: "Bingung menggunakan Farmverse? Tenang! Halaman dukungan ini siap bantu kamu dengan panduan, jawaban atas pertanyaan umum, dan tim support yang siap membantu.",
  },
  twitter: {
    title: "Dukungan",
    description: "Bingung menggunakan Farmverse? Tenang! Halaman dukungan ini siap bantu kamu dengan panduan, jawaban atas pertanyaan umum, dan tim support yang siap membantu.",
  },
};

export default function Support() {
  return (
    <>
      <Client />
      <section className="container mx-auto mt-16 mb-8 flex w-[85vw] cursor-default flex-col items-center justify-center gap-2 text-center lg:my-8 lg:w-[90vw]">
        <h6 className="w-fit rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white">
          Hubungi Kami
        </h6>
        <h3 className="text-lg font-bold md:text-xl lg:text-3xl">
          Kami senang mendengar masukan <br className="hidden lg:block" />
          dari pelanggan kami
        </h3>
      </section>
      <main className="container mx-auto mb-12 grid w-[85vw] grid-cols-1 gap-12 lg:w-[90vw] lg:grid-cols-2">
        <HubungiKami />
        <Formulir />
      </main>
    </>
  );
}