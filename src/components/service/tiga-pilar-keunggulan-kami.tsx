import { Advantages } from "@/data/service";
import { Advantages as IAdvantages } from "@/types/service";

// prettier-ignore
export default function TigaPilarKeunggulanKami() {
  return (
    <section className="relative container mx-auto -mt-16 hidden grid-cols-3 gap-6 xl:grid xl:w-[90vw]">
      {Advantages.map((list: IAdvantages, index: number) => (
        <figure key={index} className="flex w-full cursor-default flex-col rounded-lg border border-amber-500 bg-amber-600 px-8 py-6 text-white">
          <span className="flex items-center gap-4">
            {list.icon}
            <strong>{list.title}</strong>
          </span>
          <figcaption className="mt-3">{list.advantage}</figcaption>
        </figure>
      ))}
    </section>
  );
}