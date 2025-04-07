import { Value as ValueProps } from "@/data/about";
import Image from "next/image";

// prettier-ignore
export default function FondasiYangMembimbingKami({ selectedValue }: { selectedValue: number }) {
  const selected = ValueProps[selectedValue];

  return (
    <section className="container mx-auto my-6 w-[85vw] lg:w-[90vw]">
      <figure className="flex items-center justify-between gap-12">
        <Image
          height={1000}
          width={1000}
          src={selected.image}
          alt={selected.title}
          className="hidden h-60 w-60 rounded-full object-cover duration-300 lg:block lg:hover:scale-105"
          loading="lazy"
        />
        <section className="flex flex-1 cursor-default flex-col justify-between">
          {selected.icon}
          <h4 className="mt-4 text-base font-semibold lg:text-xl">
            {selected.title}
          </h4>
          <figcaption className="mt-3 text-justify text-sm leading-relaxed text-gray-600 lg:text-base">
            {selected.description}
          </figcaption>
        </section>
      </figure>
    </section>
  );
}