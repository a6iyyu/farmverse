// prettier-ignore
import { BadgeDollarSign, ChartCandlestick, Landmark, LibraryBig, ShieldCheck, Sparkles, Store, ThumbsUp, Tractor } from "lucide-react";
// prettier-ignore
import { Advantages as IAdvantages, Services as IServices } from "@/types/service";

export const Advantages: IAdvantages[] = [
  {
    icon: <ShieldCheck />,
    title: "Keahlian Terpercaya",
    advantage: "Didukung oleh mitra berpengalaman di bidang agrikultur.",
  },
  {
    icon: <ThumbsUp />,
    title: "Layanan Handal",
    advantage: "Solusi cepat dan tepat untuk kebutuhan agrikultur.",
  },
  {
    icon: <Sparkles />,
    title: "Harga Terjangkau",
    advantage: "Akses mudah ke layanan tanpa beban biaya tinggi.",
  },
];

export const Services: IServices[] = [
  {
    icon: <Tractor />,
    title: "Farm Access",
    description: "Mudah mendapatkan peralatan pertanian berkualitas tanpa perantara, langsung ke tangan petani.",
  },
  {
    icon: <ChartCandlestick />,
    title: "Zero-Net Trade",
    description: "Distribusi hasil panen langsung ke pasar tanpa biaya tambahan, memastikan petani mendapatkan keuntungan maksimal.",
  },
  {
    icon: <LibraryBig />,
    title: "Harvest Boost",
    description: "Akses pelatihan dan informasi terbaru untuk meningkatkan hasil panen dan efisiensi agrikultur.",
  },
  {
    icon: <Landmark />,
    title: "Compost Bank",
    description: "Transformasi limbah pertanian menjadi kompos organik berkualitas, mendukung pertanian berkelanjutan.",
  },
  {
    icon: <Store />,
    title: "Agree Mart",
    description: "Tempat mudah untuk membeli berbagai bahan agrikultur berkualitas, dari benih hingga pupuk.",
  },
  {
    icon: <BadgeDollarSign />,
    title: "Green Finance",
    description: "Mendukung pertanian yang berkelanjutan dengan pembiayaan yang adil dan transparan.",
  },
];