import { FaTruck } from "react-icons/fa";

// prettier-ignore
export default function MenyalurkanHasilPanenSecaraLangsung() {
  return (
    <figure className="cursor-pointer rounded-lg border border-slate-200/75 bg-slate-50 p-8 shadow-xl transition-colors duration-300 lg:hover:bg-slate-100">
      <FaTruck size={30} className="mb-3 inline rounded-full bg-amber-600 p-2 text-slate-50 lg:hidden" />
      <h3 className="flex items-center gap-2 font-bold tracking-tight text-gray-800 lg:text-xl">
        Menyalurkan Hasil Panen Secara Langsung
        <FaTruck size={20} className="ml-1 hidden lg:inline" />
      </h3>
      <figcaption className="prose mt-3 hidden text-justify text-gray-600 lg:block">
        <u className="text-amber-700 decoration-wavy">
          Farmverse menghubungkan petani dengan pembeli secara langsung, tanpa
          melalui perantara,
        </u>{" "}
        untuk menciptakan sistem distribusi yang lebih efisien dan menguntungkan
        bagi kedua pihak. Dengan model ini, petani dapat menjual hasil
        agrikultur mereka dengan harga yang lebih adil.
      </figcaption>
      <figcaption className="prose mt-3 block text-justify text-sm text-gray-600 lg:hidden">
        Farmverse{" "}
        <u className="text-amber-700 decoration-wavy">
          membantu pelaku usaha agrikultur menjual hasil panennya langsung ke
          pembeli
        </u>{" "}
        dengan harga yang lebih adil dan transparan.
      </figcaption>
    </figure>
  );
}