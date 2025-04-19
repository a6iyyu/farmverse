"use client";

import { Culture } from "@/data/career";
import { Culture as ICulture } from "@/types/career";

export default function BudayaKerja() {
  return (
    <section className="horizontal-section flex h-screen w-screen flex-shrink-0 flex-col justify-center px-6 py-16 md:px-12 lg:px-24">
      <h2 className="mt-16 mb-4 text-center text-2xl font-semibold text-gray-800 md:text-3xl">
        Budaya Kerja Kami
      </h2>
      <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
        Di Farmverse, semua suara didengar dan setiap ide dihargai. Kami
        mengedepankan komunikasi yang terbuka, kerja tim lintas divisi, dan
        fleksibilitas yang memungkinkan setiap anggota tumbuh tanpa batasan
        birokrasi yang menghambat.
      </p>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Culture.map((list: ICulture, index: number) => (
          <li key={index} className="cursor-pointer rounded-xl border bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:shadow-md lg:hover:bg-gray-100">
            {list.icon}
            <h4 className="mt-4 mb-1 font-medium text-gray-800">
              {list.title}
            </h4>
            <h5 className="text-sm text-gray-600">{list.description}</h5>
          </li>
        ))}
      </ul>
    </section>
  );
}