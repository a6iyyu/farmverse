import { Metadata } from "next";
import Hero from "@/components/service/hero";
import TigaPilarKeunggulanKami from "@/components/service/tiga-pilar-keunggulan-kami";
import LayananKami from "@/components/service/layanan-kami";
import FarmverseVersusPlatformLain from "@/components/service/farmverse-versus-platform-lain";
import TabelPerbandingan from "@/components/service/tabel-perbandingan";

// prettier-ignore
export const metadata: Metadata = {
  title: "Layanan",
  description: "Dapatkan layanan terbaik untuk pelaku usaha agrikultur melalui Farmverse. Temukan layanan unggulan kami yang mempermudah penyaluran hasil panen, akses peralatan agrikultur mutakhir, dan mendukung agrikultur berkelanjutan untuk ketahanan pangan demi Indonesia Emas 2045.",
  openGraph: {
    title: "Layanan",
    description: "Dapatkan layanan terbaik untuk pelaku usaha agrikultur melalui Farmverse. Temukan layanan unggulan kami yang mempermudah penyaluran hasil panen, akses peralatan agrikultur mutakhir, dan mendukung agrikultur berkelanjutan untuk ketahanan pangan demi Indonesia Emas 2045.",
  },
  twitter: {
    title: "Layanan",
    description: "Dapatkan layanan terbaik untuk pelaku usaha agrikultur melalui Farmverse. Temukan layanan unggulan kami yang mempermudah penyaluran hasil panen, akses peralatan agrikultur mutakhir, dan mendukung agrikultur berkelanjutan untuk ketahanan pangan demi Indonesia Emas 2045.",
  },
};

export default function Service() {
  return (
    <>
      <Hero />
      <TigaPilarKeunggulanKami />
      <LayananKami />
      <FarmverseVersusPlatformLain />
      <TabelPerbandingan />
    </>
  );
}