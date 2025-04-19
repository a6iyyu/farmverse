"use client";

import { Leaf } from "lucide-react";
import { Missions } from "@/data/career";
import Image from "next/image";

export default function Misi() {
  return (
    <section className="horizontal-section flex h-screen w-screen flex-shrink-0 items-center justify-center">
      <figure className="container mx-auto mt-16 flex h-[calc(100vh-12rem)] w-[85svw] items-start justify-between overflow-hidden rounded-xl border border-slate-900/75 bg-slate-100 lg:w-[90svw]">
        <Image
          height={1000}
          width={1000}
          src="/career/mission.jpeg"
          alt="Misi Kami"
          className="h-full w-1/2 rounded-l-xl object-cover"
          loading="lazy"
        />
        <div className="flex flex-col justify-center p-10 text-justify">
          <h2 className="mb-4 text-2xl font-bold text-gray-800 underline decoration-wavy md:text-3xl">
            Misi Kami
          </h2>
          <ul className="mx-auto max-w-3xl space-y-2 text-gray-700">
            {Missions.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <Leaf className="mt-1 h-5 w-5 text-green-600" />
                <h5 className="w-19/20">{item}</h5>
              </li>
            ))}
          </ul>
        </div>
      </figure>
    </section>
  );
}