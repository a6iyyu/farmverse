import { Users, MessageCircle, Leaf, HeartHandshake } from "lucide-react";
import { Culture as ICulture } from "@/types/career";

export const Culture: ICulture[] = [
  {
    icon: <Users className="h-6 w-6 text-green-600" />,
    title: "Kolaboratif",
    description: "Kami mendorong kerja tim lintas divisi tanpa batasan birokrasi.",
  },
  {
    icon: <MessageCircle className="h-6 w-6 text-green-600" />,
    title: "Terbuka",
    description: "Setiap suara didengar, setiap ide dihargai.",
  },
  {
    icon: <Leaf className="h-6 w-6 text-green-600" />,
    title: "Berkelanjutan",
    description: "Fokus pada solusi jangka panjang dan dampak nyata.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-green-600" />,
    title: "Humanis",
    description: "Kami menumbuhkan ruang kerja yang fleksibel dan saling mendukung.",
  },
];

export const Missions: string[] = [
  "Memberdayakan pelaku agrikultur dengan akses digital yang setara dan transparan.",
  "Menyediakan solusi agritech yang berkelanjutan, inklusif, dan berdampak nyata.",
  "Menjadi jembatan antara teknologi, petani, dan mitra strategis untuk kemajuan agrikultur Indonesia.",
];