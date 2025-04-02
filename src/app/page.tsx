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
  title: "Farmverse: Tempat Para Pelaku Usaha Agrikultur Berkembang",
  description: "Farmverse adalah platform inovatif yang menghubungkan pelaku usaha agrikultur langsung dengan pasar dan penyedia peralatan pertanian. Bergabunglah untuk mendukung pertanian berkelanjutan dan meningkatkan kesejahteraan pelaku usaha agrikultur.",
  openGraph: {
    title: "Farmverse: Tempat Para Pelaku Usaha Agrikultur Berkembang",
    description: "Farmverse adalah platform inovatif yang menghubungkan pelaku usaha agrikultur langsung dengan pasar dan penyedia peralatan pertanian. Bergabunglah untuk mendukung pertanian berkelanjutan dan meningkatkan kesejahteraan pelaku usaha agrikultur.",
  },
  twitter: {
    title: "Farmverse: Tempat Para Pelaku Usaha Agrikultur Berkembang",
    description: "Farmverse adalah platform inovatif yang menghubungkan pelaku usaha agrikultur langsung dengan pasar dan penyedia peralatan pertanian. Bergabunglah untuk mendukung pertanian berkelanjutan dan meningkatkan kesejahteraan pelaku usaha agrikultur.",
  },
};

// prettier-ignore
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