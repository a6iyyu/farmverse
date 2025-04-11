import { FaHandshake } from "react-icons/fa";
import { GiBowlOfRice, GiFarmer } from "react-icons/gi";
import { MdFactory } from "react-icons/md";
import { FAQs as IFAQs, Statistics as IStats } from "@/types/support";

export const Statistics: IStats[] = [
  {
    icon: <GiFarmer size={44} className="rounded-full bg-emerald-600 p-2.5 text-white" />,
    count: 275,
    title: "Petani Bergabung",
    unit: "+",
  },
  {
    icon: <GiBowlOfRice size={44} className="rounded-full bg-emerald-600 p-2.5 text-white" />,
    count: 9,
    title: "Total Hasil Panen Tersalurkan",
    unit: "Ton",
  },
  {
    icon: <MdFactory size={44} className="rounded-full bg-emerald-600 p-2.5 text-white" />,
    count: 35,
    title: "Mitra Terverifikasi",
    unit: "+",
  },
  {
    icon: <FaHandshake size={44} className="rounded-full bg-emerald-600 p-2.5 text-white" />,
    count: 65,
    title: "Permintaan Bantuan Terkelola",
    unit: "+",
  },
];

export const FAQs: IFAQs[] = [
  {
    category: "Umum",
    question: "Apa itu Farmverse?",
    answer: "Farmverse adalah platform digital yang dirancang untuk membantu para pelaku agrikultur dalam menyalurkan hasil panen tanpa melalui calo dan mendapatkan akses mudah ke peralatan pertanian.",
  },
  {
    category: "Umum",
    question: "Siapa saja yang bisa menggunakan Farmverse?",
    answer: "Farmverse dirancang khusus untuk dua pihak utama, yaitu para pelaku usaha agrikultur yang ingin menyalurkan hasil panen dan mendapatkan peralatan pertanian, serta pihak Bank yang berperan sebagai penyedia alat dan kompos organik.",
  },
  {
    category: "Umum",
    question: "Apa keuntungan menggunakan Farmverse dibanding cara konvensional?",
    answer: "Dengan Farmverse, proses distribusi hasil panen menjadi lebih cepat, transparan, dan tanpa perantara calo. Selain itu, petani bisa mendapatkan akses langsung ke peralatan dan kompos dari bank mitra tanpa proses rumit seperti biasanya.",
  },
  {
    category: "Akun",
    question: "Bagaimana cara membuat akun di Farmverse?",
    answer: "Cukup kunjungi halaman Daftar, lalu isi data seperti nama, email, dan kata sandi. Pilih juga jenis peran kamu sebagai petani atau bank.",
  },
  {
    category: "Akun",
    question: "Saya lupa kata sandi, bagaimana cara mengatur ulang?",
    answer: "Klik tombol \"Lupa Kata Sandi\" di halaman masuk dan ikuti langkah-langkah untuk mengatur ulang melalui email.",
  },
  {
    category: "Akun",
    question: "Apakah saya bisa mengganti peran setelah daftar?",
    answer: "Saat ini, peran pengguna ditentukan saat pendaftaran dan tidak bisa diubah langsung. Silakan hubungi tim Farmverse untuk bantuan.",
  },
  {
    category: "Mitra",
    question: "Apa peran bank di dalam Farmverse?",
    answer: "Bank berperan sebagai penyedia peralatan pertanian, pengelola bank sampah untuk penyediaan kompos organik, dan dapat berinvestasi pada komunitas petani di seluruh daerah di Indonesia.",
  },
  {
    category: "Mitra",
    question: "Bagaimana cara menerima permintaan dari petani?",
    answer: "Permintaan dari petani akan masuk ke dasbor bank, lalu pihak bank dapat mengonfirmasi dan memproses pengiriman alat yang dibutuhkan oleh pelaku usaha agrikultur tersebut.",
  },
  {
    category: "Mitra",
    question: "Apakah bank dapat melihat histori distribusi alat?",
    answer: "Ya, setiap bank mitra dapat melihat histori transaksi dan distribusi alat melalui sistem yang sudah disediakan di Farmverse.",
  },
  {
    category: "Petani",
    question: "Bagaimana cara saya menyalurkan hasil panen melalui Farmverse?",
    answer: "Setelah mendaftar dan login sebagai petani, kamu bisa mengunggah detail hasil panenmu pada dasbor dan menunggu konfirmasi dari admin untuk proses distribusi.",
  },
  {
    category: "Petani",
    question: "Apakah Farmverse menyediakan alat pertanian secara langsung?",
    answer: "Farmverse menghubungkan kamu dengan pihak bank mitra yang menyediakan peralatan. Kamu bisa mengajukan permintaan langsung melalui platform.",
  },
  {
    category: "Petani",
    question: "Apakah saya bisa memantau status pengiriman hasil panen?",
    answer: "Ya, kamu bisa memantau status distribusi hasil panen melalui dasbor kamu di Farmverse.",
  },
  {
    category: "Teknis",
    question: "Apa yang harus saya lakukan jika fitur tidak berjalan semestinya?",
    answer: "Jika kamu mengalami kendala teknis, kamu bisa melaporkannya langsung lewat formulir aduan di halaman Support atau menghubungi kontak resmi Farmverse.",
  },
  {
    category: "Teknis",
    question: "Bagaimana proses verifikasi data hasil panen di Farmverse?",
    answer: "Setelah petani mengunggah data hasil panen, admin akan memverifikasi keakuratan data tersebut. Proses ini memastikan transparansi sebelum hasil panen ditampilkan kepada mitra bank untuk ditindaklanjuti.",
  },
  {
    category: "Teknis",
    question: "Apakah Farmverse menyediakan dasbor untuk memantau aktivitas pengguna?",
    answer: "Ya, setiap peran di Farmverse (baik petani maupun mitra bank) memiliki dasbor masing-masing untuk memantau aktivitas, status pengajuan, distribusi, dan histori interaksi di platform.",
  },
];