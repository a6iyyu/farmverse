import { Cloud, Cpu, Database } from "lucide-react";
import { Hero as IHero, WeAreCaring as IWeAreCaring } from "@/types/home";

export const Hero: IHero[] = [
  {
    id: 1,
    title: "Membangun Masa Depan Pertanian",
    description: "Inovasi Berkelanjutan untuk Indonesia",
    category: "Visi",
    image: "/home/membangun-masa-depan-pertanian.jpg",
  },
  {
    id: 2,
    title: "Dari Alam, Untuk Kehidupan",
    description: "Melestarikan Tradisi, Merangkul Teknologi",
    category: "Misi",
    image: "/home/dari-alam-untuk-kehidupan.jpg",
  },
  {
    id: 3,
    title: "Bersama Menuju Kemandirian",
    description: "Pertanian Modern yang Ramah Lingkungan",
    category: "Tujuan",
    image: "/home/bersama-menuju-kemandirian.jpg",
  },
];

export const Reason: string[] = [
  "AI canggih yang memberikan rekomendasi real-time 24/7",
  "Solusi yang dipersonalisasi untuk setiap jenis tanaman dan kondisi",
  "Pemantauan komprehensif dan prediksi berbasis data",
];

export const WeAreCaring: IWeAreCaring[] = [
  {
    icon: <Cpu />,
    title: "Optimalisasi Pertanian dengan AI",
    description: "Kami menggunakan teknologi AI untuk menganalisis data tanah dan cuaca, sehingga petani dapat membuat keputusan yang lebih baik dan meningkatkan hasil panen.",
  },
  {
    icon: <Cloud />,
    title: "Sistem Peringatan Dini Berbasis AI",
    description: "Sistem kami memberikan peringatan dini tentang hama dan penyakit tanaman, memungkinkan petani untuk mengambil tindakan cepat dan mengurangi kerugian.",
  },
  {
    icon: <Database />,
    title: "Analisis Data untuk Perencanaan Pertanian",
    description: "Menggunakan analisis data besar, kami membantu petani merencanakan musim tanam dan memilih varietas tanaman yang paling sesuai dengan kondisi lokal.",
  }
];