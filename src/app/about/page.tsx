import { Metadata } from "next";
import Client from "./client";

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
  return <Client />;
}