"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { Value } from "@/data/about";
import { Value as IValue } from "@/types/about";

// prettier-ignore
export default function TombolEmpatNilai({ setSelectedValue }: { setSelectedValue: Dispatch<SetStateAction<number>> }) {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  return (
    <section className="container mx-auto mt-6 flex w-full max-w-[85vw] items-center justify-around overflow-x-auto rounded-full border border-slate-200 bg-slate-100/75 font-medium whitespace-nowrap shadow-lg lg:max-w-[90vw]">
      {Value.map((value: IValue, index: number) => (
        <button
          key={index}
          className={`flex h-full w-full min-w-[200px] cursor-pointer items-center justify-center rounded-full py-4 text-sm transition-colors duration-300 active:scale-95 active:shadow-inner lg:text-base lg:hover:bg-slate-200/50 ${selectedButton === index ? "bg-slate-200/50" : ""}`}
          onClick={() => { setSelectedButton(index); setSelectedValue(index); }}
        >
          {selectedButton === index && <div className="mr-3 h-2 w-2 rounded-full bg-amber-600" />} {value.title}
        </button>
      ))}
    </section>
  );
}