"use client";

import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQs } from "@/data/support";
import { FAQs as IFAQs } from "@/types/support";

export default function TigaPertanyaanPembuka() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const question = useRef<(HTMLLIElement | null)[]>([]);

  const toggleAnswer = (index: number) => {
    const element = question.current[index];
    if (!element) return;

    const content = element.querySelector(".answer") as HTMLElement;
    if (!content) return;

    const expanded = content.style.maxHeight && content.style.maxHeight !== "0px";
    question.current.forEach((element: HTMLLIElement | null) => {
      if (!element) return;
      const answer = element.querySelector(".answer") as HTMLElement;
      if (answer) answer.style.maxHeight = "0px";
    });

    if (!expanded) {
      content.style.maxHeight = content.scrollHeight + "px";
      setActiveIndex(index);
    } else {
      setActiveIndex(null);
    }
  };

  return (
    <figure className="flex cursor-default flex-col">
      <h5 className="w-fit cursor-pointer rounded-full bg-slate-200 px-4 py-2 text-sm font-bold text-slate-900 transition-colors duration-300 lg:hover:bg-slate-300">
        FAQ
      </h5>
      <h2 className="mt-4 text-xl font-bold md:text-2xl lg:text-3xl">
        Pertanyaan yang Sering Diajukan
      </h2>
      <ul className="mt-6 space-y-4">
        {FAQs.filter((list) => list.category.includes("Umum")).map((list: IFAQs, index: number) => (
          <li key={index} ref={(element) => { question.current[index] = element }} className="border-b border-slate-300 pb-2">
            <button
              type="button"
              onClick={() => toggleAnswer(index)}
              className="flex w-full items-center justify-between gap-3 text-left font-medium text-slate-800"
            >
              <h5 className={`flex-1 transition-colors ${activeIndex === index ? "font-semibold text-emerald-600" : "font-medium text-slate-800"}`}>
                {list.question}
              </h5>
              <ChevronDown size={20} className={`transition-transform duration-300 ${activeIndex === index && "rotate-180"}`} />
            </button>
            <figcaption className="answer overflow-hidden transition-all duration-500 ease-in-out" style={{ maxHeight: "0px" }}>
              <p className="py-3 text-sm text-slate-600">{list.answer}</p>
            </figcaption>
          </li>
        ))}
      </ul>
    </figure>
  );
}