import { Statistics } from "@/data/support";
import { Statistics as IStats } from "@/types/support";

export default function Statistik() {
  return (
    <ul className="hidden cursor-default grid-cols-1 gap-6 lg:grid lg:grid-cols-2">
      {Statistics.map((stats: IStats, index: number) => (
        <li key={index} className="rounded-xl bg-gradient-to-tr from-white to-slate-50 p-7 shadow-xl">
          <span className="flex items-center gap-4">
            {stats.icon}
            <strong className="text-lg lg:text-2xl">
              {stats.count} {stats.unit}
            </strong>
          </span>
          <h5 className="mt-2 text-sm italic">{stats.title}</h5>
        </li>
      ))}
    </ul>
  );
}