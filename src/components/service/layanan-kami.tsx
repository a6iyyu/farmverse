import { Services } from "@/data/service";
import { Services as IServices } from "@/types/service";

export default function LayananKami() {
  return (
    <section className="bg-gradient-to-br from-slate-800 to-slate-900 pt-12 pb-16 xl:-mt-18 xl:pb-22">
      <div className="container mx-auto flex w-[85vw] flex-col items-center justify-center text-white lg:w-[90vw] xl:pt-20">
        <h5 className="inline-block cursor-pointer rounded-full bg-white/10 px-5 py-2 font-semibold text-gray-100 uppercase shadow-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
          Layanan Kami
        </h5>
        <h4 className="mt-4 cursor-default text-center text-base font-semibold tracking-tight text-white lg:text-2xl">
          Jelajahi berbagai layanan unggulan kami yang dirancang
          <br className="hidden lg:block" />
          untuk mendukung agrikultur berkelanjutan.
        </h4>
      </div>
      <div className="container mx-auto grid w-[85vw] grid-cols-1 gap-16 pt-14 md:grid-cols-2 lg:w-[90vw] lg:grid-cols-3">
        {Services.map((service: IServices, index: number) => (
          <figure key={index} className="flex cursor-default flex-col items-center text-white">
            {service.icon}
            <strong className="mt-4 text-base lg:text-lg">
              {service.title}
            </strong>
            <figcaption className="mt-2 text-center text-sm text-slate-100">
              {service.description}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}