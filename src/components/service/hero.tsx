import { TbHandClick } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative container mx-auto w-[85vw] cursor-default pt-40 pb-28 lg:w-[90vw] lg:py-40">
      <Image
        height={1000}
        width={1000}
        src="/latar-belakang.png"
        alt="Latar Belakang"
        className="absolute top-8 -z-10 h-120 w-120 object-cover lg:-top-10 lg:-right-60 lg:h-200 lg:w-200"
        loading="lazy"
      />
      <Image
        height={750}
        width={750}
        src="/service/hero.png"
        alt="Hero"
        className="absolute -right-20 bottom-0 -z-10 hidden object-cover lg:block"
        loading="lazy"
      />
      <div className="flex w-full flex-col lg:w-[45%] xl:w-1/2">
        <mark className="w-fit cursor-pointer rounded-lg bg-amber-100/75 px-4 py-2 text-sm font-bold text-amber-600 transition-colors duration-300 lg:hover:bg-amber-100">
          Siap Membantu Anda
        </mark>
        <h1 className="mt-6 text-xl font-bold md:text-2xl lg:text-3xl">
          Mendukung Pertumbuhan Agrikultur yang Berkelanjutan
        </h1>
        <h5 className="mt-4 text-justify text-sm leading-relaxed text-gray-600 lg:text-base">
          Farmverse mempermudah pelaku usaha agrikultur dalam menyalurkan hasil
          panen dan menciptakan ekosistem yang berkelanjutan. Bersama kami,
          wujudkan masa depan agrikultur yang lebih baik.
        </h5>
        <Link href="/register" className="mt-8 inline-flex w-fit cursor-pointer items-center rounded-lg bg-amber-600 px-5 py-3 text-white transition-colors duration-300 lg:hover:bg-amber-500">
          <TbHandClick size={20} className="mr-3" /> Mulai Sekarang
        </Link>
      </div>
    </section>
  );
}