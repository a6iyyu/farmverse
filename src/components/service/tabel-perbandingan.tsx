import { Comparison } from "@/data/service";
import { Comparison as IComparison } from "@/types/service";

// prettier-ignore
export default function TabelPerbandingan() {
  return (
    <section className="container mx-auto mt-6 mb-18 w-[85vw] cursor-default overflow-x-auto lg:w-[90vw]">
      <table className="w-full min-w-[600px] border-collapse overflow-hidden rounded-lg shadow-lg">
        <thead>
          <tr className="text-md bg-green-500 text-white lg:text-lg">
            <th className="px-6 py-3 text-center">Kategori</th>
            <th className="px-6 py-3 text-center">Farmverse 🌱</th>
            <th className="px-6 py-3 text-center">Platform Lain ⚠️</th>
          </tr>
        </thead>
        <tbody>
          {Comparison.map((item: IComparison, index: number) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
              <td className="px-6 py-4 text-sm font-semibold text-gray-800 lg:text-base">
                {item.category}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-green-700 lg:text-base">
                {item.farmverse}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-red-600 lg:text-base">
                {item.others}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}