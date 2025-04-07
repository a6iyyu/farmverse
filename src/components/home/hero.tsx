"use client";

import { useCallback, useEffect, useState } from "react";
import { Hero as HeroProps } from "@/data/home";
import { Pagination } from "@/components/home/pagination";
import Image from "next/image";

// prettier-ignore
export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const nextSlide = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % HeroProps.length);
      setIsAnimating(false);
    }, 500);
  }, []);

  const handleIndicatorClick = (index: number) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  });

  return (
    <section className="relative mx-auto h-[calc(100vh-4rem)] w-full overflow-hidden lg:h-screen">
      <span className="absolute inset-0 h-full w-full bg-gradient-to-t from-amber-400 via-transparent to-transparent opacity-30" />
      {[currentIndex].map((list: number, index: number) => (
        <figure key={index} className={`absolute inset-0 h-full w-full transition-transform duration-500 ease-in-out`}>
          <Image
            height={1000}
            width={1000}
            src={HeroProps[list].image}
            alt={HeroProps[list].title}
            className="h-full w-full object-cover [object-position:_center_center] [filter:_brightness(40%)]"
            loading="lazy"
          />
          <figcaption className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
            <div className="mx-auto max-w-4xl cursor-default px-4 text-center text-white lg:px-8">
              <h3 className="mb-4 inline-block rounded-full bg-white/10 px-5 py-2 font-semibold text-gray-100 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:bg-white/20">
                {HeroProps[list].category}
              </h3>
              <h1 className="mb-4 text-3xl leading-tight font-bold lg:text-5xl">
                {HeroProps[list].title}
              </h1>
              <h2 className="mb-8 text-xl text-gray-300 lg:text-2xl">
                {HeroProps[list].description}
              </h2>
              <span className="flex justify-center gap-2">
                {HeroProps.map((_, index: number) => (
                  <Pagination key={index} is_active={index === currentIndex} on_click={() => handleIndicatorClick(index)} />
                ))}
              </span>
            </div>
          </figcaption>
        </figure>
      ))}
    </section>
  );
}