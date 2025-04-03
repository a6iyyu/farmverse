import { BadgeDollarSign, ChartCandlestick, Landmark, LibraryBig, ShieldCheck, Sparkles, Store, ThumbsUp, Tractor } from "lucide-react";
import { Comparison as IComparison, Advantages as IAdvantages, Services as IServices } from "@/types/service";

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

// prettier-ignore
export const Comparison: IComparison[] = [
  {
    category: "Transparansi Harga",
    farmverse: "Petani bisa menjual langsung tanpa perantara, harga lebih adil.",
    others: "Banyak yang masih bergantung pada perantara, harga tidak transparan.",
  },
  {
    category: "Akses ke Peralatan Agrikultur",
    farmverse: "Bisa beli/sewa dengan mudah dan harga terjangkau.",
    others: "Biasanya hanya menawarkan sewa dengan prosedur rumit.",
  },
  {
    category: "Dukungan Keberlanjutan",
    farmverse: "Tersedia bank sampah untuk kompos organik dan pengelolaan limbah.",
    others: "Jarang memiliki fitur keberlanjutan atau ekosistem ramah lingkungan.",
  },
  {
    category: "Fokus pada Kesejahteraan Para Pelaku Usaha Agrikultur",
    farmverse: "Memberdayakan petani dengan solusi agrikultur berbasis komunitas dan teknologi.",
    others: "Hanya sekadar tempat jual beli tanpa edukasi atau pemberdayaan.",
  },
  {
    category: "Layanan Akses Edukasi",
    farmverse: "Menyediakan edukasi dan program pendampingan agar para pelaku usaha agrikultur bisa berkembang.",
    others: "Layanan terbatas, tanpa edukasi atau bimbingan jangka panjang.",
  },
];

// prettier-ignore
export const Services: IServices[] = [
  {
    icon: <Tractor size={48} className="rounded-lg bg-amber-600 p-2.5 text-white" />,
    title: "Farm Access",
    description: "Mudah mendapatkan peralatan pertanian berkualitas tanpa perantara, langsung ke tangan petani.",
  },
  {
    icon: <ChartCandlestick size={48} className="rounded-lg bg-amber-600 p-2.5 text-white" />,
    title: "Zero-Net Trade",
    description: "Distribusi hasil panen langsung ke pasar tanpa biaya tambahan, memastikan petani mendapatkan keuntungan maksimal.",
  },
  {
    icon: <LibraryBig size={48} className="rounded-lg bg-amber-600 p-2.5 text-white" />,
    title: "Harvest Boost",
    description: "Akses pelatihan dan informasi terbaru untuk meningkatkan hasil panen dan efisiensi agrikultur.",
  },
  {
    icon: <Landmark size={48} className="rounded-lg bg-amber-600 p-2.5 text-white" />,
    title: "Compost Bank",
    description: "Transformasi limbah pertanian menjadi kompos organik berkualitas, mendukung pertanian berkelanjutan.",
  },
  {
    icon: <Store size={48} className="rounded-lg bg-amber-600 p-2.5 text-white" />,
    title: "Agree Mart",
    description: "Tempat mudah untuk membeli berbagai bahan agrikultur berkualitas, dari benih hingga pupuk.",
  },
  {
    icon: <BadgeDollarSign size={48} className="rounded-lg bg-amber-600 p-2.5 text-white" />,
    title: "Green Finance",
    description: "Mendukung pertanian yang berkelanjutan dengan pembiayaan yang adil dan transparan.",
  },
];