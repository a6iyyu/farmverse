import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQs as Questions } from "@/data/support";
import { FAQs as IFAQs } from "@/types/support";

// prettier-ignore
export default function FAQs({ showCategory }: { showCategory: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const answer = useRef<(HTMLElement | null)[]>([]), question = useRef<(HTMLElement | null)[]>([]);

  const toggleAnswer = (index: number) => {
    const content = answer.current[index];
    if (!content) return;

    const expanded = content.style.maxHeight && content.style.maxHeight !== "0px";
    answer.current.forEach((element: HTMLElement | null) => {
      if (element) element.style.maxHeight = "0px";
    });

    if (!expanded) {
      content.style.maxHeight = content.scrollHeight + "px";
      setActiveIndex(index);
    } else {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    setActiveIndex(null);
    answer.current.forEach((element: HTMLElement | null) => {
      if (element) element.style.maxHeight = "0px";
    });
  }, [showCategory]);

  return (
    <div className="w-full space-y-4">
      {Questions.filter((faq) => faq.category === showCategory && faq.category !== "Umum").map((faq: IFAQs, index: number) => (
        <figure key={index} ref={(element) => { question.current[index] = element }} className="border-b border-slate-300 pb-2">
          <button
            type="button"
            onClick={() => toggleAnswer(index)}
            className="flex w-full items-center justify-between gap-3 text-left font-medium text-slate-800"
          >
            <h5 className={`flex-1 transition-colors ${activeIndex === index ? "font-semibold text-emerald-600" : "font-medium text-slate-800"}`}>
              {faq.question}
            </h5>
            <ChevronDown className={`transition-transform duration-300 ${activeIndex === index && "rotate-180"}`} />
          </button>
          <figcaption
            ref={(element) => { answer.current[index] = element }}
            className="answer overflow-hidden transition-all duration-500 ease-in-out"
            style={{ maxHeight: "0px" }}
          >
            <p className="cursor-default py-3 text-sm text-slate-600">
              {faq.answer}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}