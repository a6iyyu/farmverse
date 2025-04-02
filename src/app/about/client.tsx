"use client";

import { useState } from "react";
import Image from "next/image";
import Hero from "@/components/about/hero";
import BagaimanaSemuanyaDimulai from "@/components/about/bagaimana-semuanya-dimulai";
import MenyalurkanHasilPanenSecaraLangsung from "@/components/about/menyalurkan-hasil-panen-secara-langsung";
import AksesLebihMudahKeTeknologiAgrikultur from "@/components/about/akses-lebih-mudah-ke-teknologi-agrikultur";
import MendorongAgrikulturBerkelanjutan from "@/components/about/mendorong-agrikultur-berkelanjutan";
import TombolEmpatNilai from "@/components/about/tombol-empat-nilai";
import FondasiYangMembimbingKami from "@/components/about/fondasi-yang-membimbing-kami";
import MewarisiAgrikulturBerkelanjutan from "@/components/about/mewarisi-agrikultur-berkelanjutan";
import KenaliTimKami from "@/components/about/kenali-tim-kami";

// prettier-ignore
export default function Client() {
  const [selectedValue, setSelectedValue] = useState<number>(0);

  return (
    <>
      <Hero />
      <BagaimanaSemuanyaDimulai />
      <section className="container mx-auto mt-14 flex w-[90vw] items-stretch justify-between gap-2">
        <MenyalurkanHasilPanenSecaraLangsung />
        <Image
          height={1000}
          width={1000}
          src="/about/menyalurkan-hasil-panen-secara-langsung.jpg"
          alt="Menyalurkan Hasil Panen Secara Langsung"
          className="hidden w-full max-w-[350px] rounded-lg bg-center bg-no-repeat object-cover lg:inline"
          loading="lazy"
        />
      </section>
      <section className="container mx-auto mt-4 flex w-[90vw] items-stretch justify-between gap-2">
        <Image
          height={1000}
          width={1000}
          src="/about/akses-lebih-mudah-ke-teknologi-agrikultur.jpg"
          alt="Menyalurkan Hasil Panen Secara Langsung"
          className="hidden w-full max-w-[350px] rounded-lg bg-center bg-no-repeat object-cover lg:inline"
          loading="lazy"
        />
        <AksesLebihMudahKeTeknologiAgrikultur />
      </section>
      <section className="container mx-auto mt-4 mb-14 flex w-[90vw] items-stretch justify-between gap-2">
        <MendorongAgrikulturBerkelanjutan />
        <Image
          height={1000}
          width={1000}
          src="/about/mendorong-agrikultur-berkelanjutan.jpg"
          alt="Mendorong Agrikultur Berkelanjutan"
          className="hidden w-full max-w-[350px] rounded-lg bg-center bg-no-repeat object-cover lg:inline"
          loading="lazy"
        />
      </section>
      <h3 className="container mx-auto w-[85vw] cursor-default text-center text-xl font-semibold md:text-2xl lg:w-[90vw] lg:text-3xl">
        Fondasi yang{" "}
        <span className="text-amber-600 underline decoration-amber-600 decoration-wavy">
          Membimbing Kami
        </span>{" "}
        ✨
      </h3>
      <TombolEmpatNilai setSelectedValue={setSelectedValue} />
      <FondasiYangMembimbingKami selectedValue={selectedValue} />
      <MewarisiAgrikulturBerkelanjutan />
      <KenaliTimKami />
    </>
  );
}