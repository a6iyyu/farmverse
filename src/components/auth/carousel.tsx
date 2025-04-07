"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// prettier-ignore
export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const images = ["/auth/karosel-1.jpeg", "/auth/karosel-2.jpeg", "/auth/karosel-3.jpg"];

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % images.length), 5000);
    return () => clearInterval(interval);
  });

  return (
    <section className="relative hidden lg:inline">
      <span className="absolute inset-0 z-10 bg-gradient-to-b from-[#1a4167]/20 to-[#1a4167]/30 transition-opacity duration-300"></span>
      <div className="relative h-full w-full">
        {images.map((src, index) => (
          <Image
            key={index}
            height={1000}
            width={1000}
            src={src}
            alt="Selamat datang di Farmverse!"
            className={`absolute h-full w-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
            loading={index !== 0 ? "lazy" : "eager"}
            priority={index === 0}
          />
        ))}
      </div>
      <figure className="absolute bottom-8 left-8 z-20 space-y-2 text-white">
        <Image
          height={1000}
          width={1000}
          src="/favicon.ico"
          alt="Logo"
          className="mb-4 w-16 transform transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <h4 className="cursor-default text-2xl font-bold tracking-tight">
          Famverse
        </h4>
        <h6 className="cursor-default text-sm text-gray-200">
          Tempat Para Pelaku Usaha Agrikultur Berkembang
        </h6>
        <div className="mt-4 flex h-fit space-x-4">
          {images.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 cursor-pointer rounded-full border-2 border-white transition-all duration-300 ${index === current ? "bg-white" : "bg-transparent"}`}
            />
          ))}
        </div>
      </figure>
    </section>
  );
}