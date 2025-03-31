"use client";

import Image from "next/image";

// prettier-ignore
export default function Quotes() {
  return (
    <figure className="relative h-80 w-full lg:h-204 lg:w-1/2">
      <Image
        height={1000}
        width={1000}
        src="/home/dukung-petani-berkelanjutan.jpg"
        alt="Dukung Petani Berkelanjutan"
        className="absolute -z-20 h-80 w-full rounded-md object-cover lg:h-204"
        loading="lazy"
      />
      <span className="absolute inset-0 -z-10 h-80 rounded-md bg-black opacity-50 backdrop-blur-lg lg:h-204" />
      <figcaption className="z-10 flex h-80 w-full cursor-default flex-col justify-center p-8 text-white lg:h-204">
        <q className="text-3xl font-bold">
          Pertanian bukan hanya tentang mengolah tanah, tetapi juga mengolah
          hati dan jiwa.
        </q>
        <br />
        <em className="mt-3 text-lg">Masanobu Fukuoka</em>
      </figcaption>
    </figure>
  );
}