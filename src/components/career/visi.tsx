"use client";

import Image from "next/image";

export default function Visi() {
  return (
    <section className="horizontal-section flex h-screen w-screen flex-shrink-0 items-center justify-center">
      <figure className="container mx-auto mt-16 flex h-[calc(100vh-12rem)] w-[85svw] items-start justify-between overflow-hidden rounded-xl border border-slate-900/75 bg-slate-100 lg:w-[90svw]">
        <div className="flex flex-col justify-center p-10 text-justify">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 underline decoration-wavy md:text-3xl">
            Visi Kami
          </h2>
          <h4 className="mb-6 font-semibold text-gray-600 italic">
            Mendorong transformasi agrikultur Indonesia melalui teknologi dan
            kolaborasi yang inklusif.
          </h4>
          <figcaption className="text-gray-500">
            Kami percaya bahwa masa depan agrikultur Indonesia harus didukung
            oleh teknologi yang mudah diakses dan kolaborasi antar pelaku yang
            inklusif — dari petani kecil hingga lembaga besar. Melalui
            Farmverse, kami ingin menciptakan ekosistem yang memberdayakan
            setiap individu dalam rantai agrikultur, menjembatani kesenjangan,
            dan mempercepat inovasi demi keberlanjutan pangan nasional.
          </figcaption>
        </div>
        <Image
          height={1000}
          width={1000}
          src="/career/vision.jpg"
          alt="Visi Kami"
          className="h-full w-1/2 rounded-r-xl object-cover"
          loading="lazy"
        />
      </figure>
    </section>
  );
}