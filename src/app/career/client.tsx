"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/career/hero";
import BudayaKerja from "@/components/career/budaya-kerja";
import Visi from "@/components/career/visi";
import Misi from "@/components/career/misi";

gsap.registerPlugin(ScrollTrigger);

// prettier-ignore
export default function Client() {
  const section = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const horizontal = gsap.utils.toArray(".horizontal-section");

    const setupHorizontalScroll = () => {
      gsap.to(horizontal, {
        ease: "none",
        xPercent: -100 * (horizontal.length - 1),
        scrollTrigger: {
          end: () => `+=${section.current!.offsetWidth * (horizontal.length - 1)}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          snap: 1 / (horizontal.length - 1),
          start: "top top",
          trigger: section.current,
        },
      });
    };

    const timer = setTimeout(setupHorizontalScroll, 100);
    window.addEventListener("resize", setupHorizontalScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", setupHorizontalScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Hero />
      <main ref={section} className="flex cursor-default overflow-x-hidden">
        <BudayaKerja />
        <Visi />
        <Misi />
      </main>
      <hr className="mx-auto h-0.5 w-[85vw] rounded-full bg-slate-600 lg:w-[90vw]" />
    </>
  );
}