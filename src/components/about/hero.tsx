import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen cursor-default text-left text-white">
      <Image
        height={1000}
        width={1000}
        src="/about/hero.jpg"
        alt="Lebih dari sekadar agrikultur, kami membangun masa depan"
        className="h-screen w-full bg-cover bg-center bg-no-repeat object-cover"
        loading="lazy"
      />
      <span className="absolute inset-0 h-screen w-full bg-gradient-to-t from-slate-700/75 via-transparent to-transparent opacity-30" />
      <div className="absolute bottom-0 w-full p-8 lg:p-15">
        <strong className="text-xl md:text-3xl lg:text-4xl">
          Lebih dari Sekadar Profesi,
          <br />
          Kami Membangun Masa Depan
        </strong>
        <br />
        <br />
        <p className="hidden lg:inline">
          Kami memahami bahwa kerja keras para pelaku agrikultur berperan
          penting dalam
          <br />
          membangun masa depan Indonesia. Bukan sekadar rutinitas, tetapi
          peluang untuk
          <br />
          berkembang dan mewujudkan potensi lebih besar.
        </p>
        <p className="inline lg:hidden">
          Kami memahami bahwa kerja keras pelaku agrikultur bukan sekadar
          profesi, tetapi peluang untuk membangun masa depan Indonesia.
        </p>
      </div>
    </section>
  );
}