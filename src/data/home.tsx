import { IFitur, IHero, IWeAreCaring } from "@/types/home";
import { Cloud, Cpu, Database } from "lucide-react";

export const HeroProps: IHero[] = [
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

export const StepsProps: Array<{ title: string; description: string }> = [
  {
    title: "Masukkan Informasi Mengenai Lahan Anda",
    description: "Masukkan informasi tentang lahan Anda, seperti jenis tanaman, jenis tanah, dan suhu cuaca.",
  },
  {
    title: "Klik untuk Mendapatkan Informasi Lahan Anda",
    description: "Dengan beberapa klik, kami akan menemukan informasi yang sesuai dengan lahan Anda, seperti tanaman yang cocok untuk lahan Anda.",
  },
  {
    title: "Simpan Hasil Informasi Lahan Anda",
    description: "Setelah mencocokkan informasi yang sesuai dengan lahan Anda, kami akan memberikan informasi tentang lahan Anda. Jangan lupa untuk menyimpan informasi tersebut.",
  },
];

export const FeatureProps: IFitur[] = [
  {
    icon: "chart-line",
    title: "Analisis Tanah dan Nutrisi dengan AI",
    description: "Gunakan teknologi AI untuk melakukan analisis tanah secara langsung, memberikan saran mengenai nutrisi yang tepat, dan meningkatkan hasil produksi tanaman.",
  },
  {
    icon: "cloud",
    title: "Prediksi Cuaca dan Sistem Irigasi Cerdas",
    description: "Dengan kecanggihan AI, sistem ini dapat memprediksi cuaca secara akurat dan mengatur sistem irigasi secara otomatis untuk memaksimalkan efisiensi penggunaan air, membantu petani dalam kegiatan pertanian.",
  },
  {
    icon: "gear",
    title: "Pemantauan Kesehatan Tanaman",
    description: "Melalui teknologi AI, pemantauan kesehatan tanaman menjadi lebih mudah, memungkinkan deteksi dini terhadap hama dan penyakit, sehingga petani bisa segera melakukan tindakan pencegahan yang tepat.",
  },
  {
    icon: "chart-bar",
    title: "Optimalisasi Hasil Panen",
    description: "Dengan menganalisis data historis dan kondisi terkini, AI membantu untuk meningkatkan hasil panen serta memaksimalkan efisiensi penggunaan sumber daya.",
  },
  {
    icon: "database",
    title: "Basis Data Pertanian Cerdas",
    description: "Sebuah basis data yang lengkap dan didukung oleh AI, memberikan informasi tentang berbagai varietas tanaman, teknik budidaya, serta praktik pertanian terbaik.",
  },
  {
    icon: "leaf",
    title: "Pertanian yang Ramah Lingkungan",
    description: "AI memberikan rekomendasi untuk penerapan praktik pertanian yang mendukung kelestarian lingkungan dan keberlanjutan jangka panjang.",
  },
];

export const ReasonProps: string[] = [
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