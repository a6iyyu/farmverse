"use client";

import { WeAreCaring } from "@/data/home";
import { Sprout } from "lucide-react";
import Image from "next/image";

// prettier-ignore
export default function KamiPeduli() {
  return (
    <section className="mt-20 bg-gradient-to-br from-amber-700 to-amber-800 py-12">
      <div className="container mx-auto grid w-[90vw] grid-cols-1 gap-12 lg:grid-cols-2">
        <Image
          height={1000}
          width={1000}
          src="/home/kami-peduli.jpg"
          alt="Kami Peduli pada Pertanian Anda dengan Sepenuh Hati"
          className="hidden h-full w-full rounded-md object-cover shadow-2xl lg:inline"
          loading="lazy"
        />
        <figure>
          <h2 className="mb-4 inline-flex flex-wrap items-center text-xl leading-tight font-light tracking-tight whitespace-nowrap text-gray-50 lg:text-3xl">
            Kami peduli pada pertanian Anda <strong>dengan sepenuh hati</strong>
            <Sprout size={28} className="ml-1 lg:ml-3" />
          </h2>
          <br />
          <figcaption className="cursor-default text-justify leading-relaxed tracking-wide text-gray-300">
            <span className="font-medium text-amber-200">Farmverse </span>
            adalah pusat layanan pertanian modern yang berkomitmen untuk
            memberikan pengalaman yang nyaman, terjangkau, dan berkualitas
            tinggi dalam mendukung kesejahteraan petani.
          </figcaption>
          <ul className="mt-10 cursor-pointer space-y-4">
            {WeAreCaring.map((list, index: number) => (
              <li key={index} className="relative rounded-2xl border border-amber-100/20 bg-amber-100/10 p-6 backdrop-blur-md transition-all duration-300 ease-in-out lg:hover:border-amber-100/40 lg:hover:bg-amber-100/20">
                <span className="inline-flex items-center gap-2 font-medium tracking-wide text-amber-100">
                  {list.icon}
                  <h5>{list.title}</h5>
                </span>
                <p className="mt-3 text-justify text-sm leading-relaxed text-gray-300">
                  {list.description}
                </p>
              </li>
            ))}
          </ul>
        </figure>
      </div>
    </section>
  );
}