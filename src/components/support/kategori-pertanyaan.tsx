import { Dispatch, SetStateAction, useState } from "react";
import { FAQs } from "@/data/support";
import { Categories } from "@/types/support";

// prettier-ignore
export default function KategoriPertanyaan({ setShowCategory }: { setShowCategory: Dispatch<SetStateAction<string>> }) {
  const [categoryIndex, setCategoryIndex] = useState<number>(0);

  return (
    <div>
      <h3 className="cursor-default text-center text-xl font-bold md:text-left md:text-2xl lg:text-3xl">
        Pertanyaan <br className="hidden md:block" />
        Lainnya
      </h3>
      <hr className="my-4 h-0.5 w-full bg-slate-50 md:h-1" />
      <span className="flex w-full max-w-full flex-row justify-start gap-4 overflow-x-auto scroll-smooth whitespace-nowrap md:flex-col md:flex-wrap md:overflow-x-hidden">
        {Array.from(new Set(FAQs.map((faq) => faq.category))).filter((category) => category !== "Umum").map((list: Categories, index) => (
          <button
            key={index}
            onClick={() => { setShowCategory(list); setCategoryIndex(index) }}
            className={`min-w-max cursor-pointer rounded-lg px-6 py-3 text-center font-semibold shadow-lg transition-colors duration-400 md:w-full md:max-w-full md:text-left md:active:scale-95 ${categoryIndex === index ? "bg-amber-600 text-white" : "bg-slate-50 text-slate-900 lg:hover:bg-slate-100"}`}
          >
            {list}
          </button>
        ))}
      </span>
    </div>
  );
}
