import { RiPlantFill } from "react-icons/ri";

// prettier-ignore
export default function MendorongAgrikulturBerkelanjutan() {
  return (
    <figure className="cursor-pointer rounded-lg border border-slate-200/75 bg-slate-50 p-8 shadow-xl transition-colors duration-300 lg:hover:bg-slate-100">
      <RiPlantFill size={30} className="mb-3 inline rounded-full bg-amber-600 p-2 text-slate-50 lg:hidden" />
      <h3 className="flex items-center gap-2 font-bold tracking-tight text-gray-800 lg:text-xl">
        Mendorong Agrikultur Berkelanjutan
        <RiPlantFill size={20} className="ml-1 hidden lg:inline" />
      </h3>
      <figcaption className="prose mt-3 hidden text-justify text-gray-600 lg:block">
        Kami percaya bahwa{" "}
        <mark className="bg-amber-600 text-white">
          masa depan agrikultur harus berorientasi pada keberlanjutan.
        </mark>{" "}
        Oleh karena itu, Farmverse menyediakan akses ke bank sampah untuk
        penyediaan kompos organik, membantu petani beralih ke metode yang lebih
        ramah lingkungan dan menjaga keseimbangan ekosistem.
      </figcaption>
      <figcaption className="prose mt-3 block text-justify text-sm text-gray-600 lg:hidden">
        Melalui bank sampah dan kompos organik, kami{" "}
        <mark className="bg-amber-600 text-white">
          mendukung pertanian yang lebih ramah lingkungan
        </mark>{" "}
        dan berkelanjutan.
      </figcaption>
    </figure>
  );
}