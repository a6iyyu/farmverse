import { Search } from "lucide-react";
import Image from "next/image";

// prettier-ignore
export default function Hero({ redirectSection }: { redirectSection: () => void }) {
  return (
    <section className="relative container mx-auto flex w-[85vw] cursor-default flex-col items-center justify-center pt-32 pb-28 text-center lg:w-[90vw]">
      <Image
        height={1000}
        width={1000}
        src="/support/latar-belakang.png"
        alt="Latar Belakang"
        className="absolute -top-8 -z-10 h-160 w-160 object-cover lg:-top-14"
        loading="lazy"
      />
      <h1 className="mt-6 text-xl font-bold md:text-3xl lg:text-5xl lg:leading-14">
        Butuh Bantuan?
        <br />
        Tenang,{" "}
        <span className="text-amber-600 underline decoration-wavy">
          Kami Ada untuk Kamu!
        </span>
      </h1>
      <h5 className="mt-7 inline w-full text-sm text-gray-600 sm:w-3/4 lg:w-13/20 lg:text-base">
        Di halaman ini, kamu bisa cari tahu cara kerja Farmverse, baca FAQ,
        unduh panduan, atau langsung hubungi tim kami.
        <span className="hidden lg:inline">
          Kami hadir untuk bantu kamu pakai Farmverse dengan lebih mudah.
        </span>
      </h5>
      <button
        onClick={redirectSection}
        type="button"
        className="mt-8 inline-flex cursor-pointer items-center gap-3 rounded-lg bg-amber-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-amber-500 lg:px-5 lg:py-4 lg:text-base"
      >
        <Search className="h-4 w-4 lg:h-6 lg:w-6" />
        Cari Tahu Sekarang
      </button>
    </section>
  );
}