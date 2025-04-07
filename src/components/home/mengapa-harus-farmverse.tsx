import { Reason as ReasonProps } from "@/data/home";
import Image from "next/image";

// prettier-ignore
export default function MengapaHarusFarmverse() {
  return (
    <section className="container mx-auto mt-20 flex w-[90vw] flex-col items-center justify-between gap-12 lg:flex-row">
      <div className="relative w-full lg:w-1/2">
        <span className="absolute inset-0 -z-10 -rotate-3 transform rounded-xl bg-amber-200" />
        <Image
          height={1000}
          width={1000}
          src="/home/mengapa-harus-farmverse.jpg"
          alt="Mengapa Harus Farmverse?"
          className="relative h-[300px] w-full transform rounded-xl object-cover shadow-xl transition-transform duration-300 lg:hover:scale-[1.02] lg:hover:rotate-1"
          loading="lazy"
        />
      </div>
      <div className="w-full cursor-default lg:w-1/2">
        <h2 className="mb-6 text-3xl leading-12 font-bold tracking-tight text-gray-800">
          Mengapa Harus{" "}
          <mark className="bg-amber-600 text-white">Memilih Farmverse?</mark>
        </h2>
        <ol className="space-y-4">
          {ReasonProps.map((reason: string, index: number) => (
            <li key={index} className="flex items-center gap-4">
              <h5 className="grid h-8 w-8 place-items-center rounded-full bg-amber-100 font-semibold text-amber-600">
                {index + 1}
              </h5>
              <p className="text-gray-600">{reason}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}