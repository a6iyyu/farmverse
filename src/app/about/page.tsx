import { Metadata } from "next";
import Hero from "@/components/about/hero";
import BagaimanaSemuanyaDimulai from "@/components/about/bagaimana-semuanya-dimulai";
import MenataMasaDepanAgrikultur from "@/components/about/menata-masa-depan-agrikultur";

// prettier-ignore
export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Temukan visi, misi, dan nilai-nilai Farmverse dalam membangun ekosistem pertanian yang lebih adil dan berkelanjutan. Kami hadir untuk memberdayakan petani dan menciptakan masa depan yang lebih baik.",
  openGraph: {
    title: "Tentang Kami",
    description: "Temukan visi, misi, dan nilai-nilai Farmverse dalam membangun ekosistem pertanian yang lebih adil dan berkelanjutan. Kami hadir untuk memberdayakan petani dan menciptakan masa depan yang lebih baik.",
  },
  twitter: {
    title: "Tentang Kami",
    description: "Temukan visi, misi, dan nilai-nilai Farmverse dalam membangun ekosistem pertanian yang lebih adil dan berkelanjutan. Kami hadir untuk memberdayakan petani dan menciptakan masa depan yang lebih baik.",
  },
};

export default function About() {
  return (
    <>
      <Hero />
      <BagaimanaSemuanyaDimulai />
      <MenataMasaDepanAgrikultur />
    </>
  );
}