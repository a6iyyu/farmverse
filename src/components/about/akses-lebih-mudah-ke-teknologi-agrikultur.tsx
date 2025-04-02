import { HiWrenchScrewdriver } from "react-icons/hi2";

// prettier-ignore
export default function AksesLebihMudahKeTeknologiAgrikultur() {
  return (
    <figure className="cursor-pointer rounded-lg border border-slate-200/75 bg-slate-50 p-8 shadow-xl transition-colors duration-300 lg:hover:bg-slate-100">
      <HiWrenchScrewdriver size={30} className="mb-3 inline rounded-full bg-amber-600 p-2 text-slate-50 lg:hidden" />
      <h3 className="flex items-center gap-2 font-bold tracking-tight text-gray-800 lg:text-xl">
        Akses Lebih Mudah ke Teknologi Agrikultur
        <HiWrenchScrewdriver size={20} className="ml-1 hidden lg:inline" />
      </h3>
      <figcaption className="prose mt-3 hidden text-justify text-gray-600 lg:block">
        Kami menyediakan platform yang{" "}
        <strong className="text-amber-700">
          memudahkan pelaku usaha agrikultur mendapatkan peralatan dan teknologi
          terbaru
        </strong>{" "}
        dalam dunia agrikultur. Dengan harga terjangkau dan mudah dijangkau,
        pelaku usaha agrikultur dapat meningkatkan kualitas dan hasil agrikultur
        mereka secara signifikan.
      </figcaption>
      <figcaption className="prose mt-3 block text-justify text-sm text-gray-600 lg:hidden">
        Kami{" "}
        <strong className="text-amber-700">
          mempermudah petani dalam mendapatkan peralatan berkualitas
        </strong>{" "}
        dengan harga terjangkau untuk meningkatkan produktivitas.
      </figcaption>
    </figure>
  );
}