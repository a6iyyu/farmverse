import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative container mx-auto flex w-[85vw] cursor-default flex-col pt-40 lg:w-[90vw]">
      <Image
        height={1000}
        width={1000}
        src="/latar-belakang.png"
        alt="Latar Belakang"
        className="absolute top-8 -z-10 h-120 w-120 object-cover lg:-top-10 lg:-right-60 lg:h-200 lg:w-200"
        loading="lazy"
      />
      <h6 className="w-fit rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white uppercase">
        Karier
      </h6>
      <h1 className="mt-6 w-full text-2xl font-bold md:text-3xl lg:w-3/4 lg:text-5xl lg:leading-14">
        Saatnya unjuk diri dan kembangkan kariermu bersama kami.
      </h1>
      <h5 className="mt-3 w-full text-sm text-slate-600 lg:w-3/4 lg:text-base">
        Kami percaya bahwa setiap orang punya potensi untuk tumbuh, berinovasi,
        dan menciptakan dampak nyata. Di sini, kamu tidak hanya bekerja—kamu
        membangun masa depan agrikultur bersama tim yang saling mendukung dan
        terus belajar.
      </h5>
    </section>
  );
}