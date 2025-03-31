import { Metadata } from "next";
import Hero from "@/components/home/hero";
import SmartFarming from "@/components/home/smart-farming";
import MengapaHarusFarmverse from "@/components/home/mengapa-harus-farmverse";
import KamiPeduli from "@/components/home/kami-peduli";
import BergabungDenganKami from "@/components/home/bergabung-dengan-kami";
import Quotes from "@/components/home/quotes";
import DukungPetaniBerkelanjutan from "@/components/home/dukung-petani-berkelanjutan";

// prettier-ignore
export const metadata: Metadata = {
  title: "Beranda | Farmverse",
  description: "Selamat datang di Farmverse, kami mendukung para petani untuk memaksimalkan hasil panen mereka.",
  openGraph: {
    title: "Beranda | Farmverse",
    description: "Selamat datang di Farmverse, kami mendukung para petani untuk memaksimalkan hasil panen mereka.",
  },
  twitter: {
    title: "Beranda | Farmverse",
    description: "Selamat datang di Farmverse, kami mendukung para petani untuk memaksimalkan hasil panen mereka.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <SmartFarming />
      <MengapaHarusFarmverse />
      <KamiPeduli />
      <section className="container mx-auto mt-20 mb-14 flex w-[90vw] flex-col justify-between gap-4 lg:flex-row">
        <div className="flex w-full flex-col gap-4 lg:w-1/2">
          <BergabungDenganKami />
          <DukungPetaniBerkelanjutan />
        </div>
        <Quotes />
      </section>
    </>
  );
}