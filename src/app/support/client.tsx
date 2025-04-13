"use client";

import { useRef, useState } from "react";
import { FAQs as Questions } from "@/data/support";
import Hero from "@/components/support/hero";
import Statistik from "@/components/support/statistik";
import TigaPertanyaanPembuka from "@/components/support/tiga-pertanyaan-pembuka";
import KategoriPertanyaan from "@/components/support/kategori-pertanyaan";
import FAQs from "@/components/support/faqs";
import PanduanPengguna from "@/components/support/panduan-pengguna";

export default function Client() {
  const target = useRef<HTMLDivElement>(null);
  const [showCategory, setShowCategory] = useState<string>(Questions.find((faq) => faq.category !== "Umum")?.category ?? "");

  return (
    <>
      <Hero redirectSection={() => target.current!.scrollIntoView({ behavior: "smooth" })} />
      <section className="bg-slate-100 py-16">
        <div className="container mx-auto grid w-[85vw] grid-cols-1 gap-12 lg:w-[90vw] lg:grid-cols-2">
          <Statistik />
          <TigaPertanyaanPembuka />
        </div>
      </section>
      <section ref={target} className="container mx-auto flex w-[85vw] flex-col justify-between gap-8 pt-14 md:w-[90vw] md:flex-row md:gap-24">
        <KategoriPertanyaan setShowCategory={setShowCategory} />
        <FAQs showCategory={showCategory} />
      </section>
      <PanduanPengguna />
    </>
  );
}