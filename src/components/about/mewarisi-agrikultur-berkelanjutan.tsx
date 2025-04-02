import { Sprout } from "lucide-react";

// prettier-ignore
export default function MewarisiAgrikulturBerkelanjutan() {
  return (
    <section className="container mx-auto mt-14 grid w-[85vw] cursor-default grid-cols-1 gap-4 lg:w-[90vw] lg:grid-cols-2 lg:gap-12">
      <div>
        <Sprout size={50} className="rounded-xl bg-amber-600 p-2.5 text-white" />
        <h3 className="mt-3 text-xl font-bold md:text-2xl lg:text-3xl">
          Mewarisi Agrikultur Berkelanjutan untuk Masa Depan
        </h3>
      </div>
      <p className="text-justify text-sm leading-relaxed text-gray-600 lg:text-base">
        Kami percaya bahwa agrikultur harus berkembang tanpa mengorbankan
        lingkungan. Melalui inovasi dan keberlanjutan, Farmverse mendukung
        penggunaan kompos organik, mengurangi limbah pertanian, dan menciptakan
        ekosistem yang lebih hijau. Namun, ini bukan hanya tentang hari ini—ini
        tentang masa depan yang kita bangun bersama. Dengan teknologi,
        kolaborasi, dan komitmen untuk perubahan, kami ingin mewariskan sistem
        agrikultur yang lebih inklusif, inovatif, dan lestari bagi generasi
        mendatang.
      </p>
    </section>
  );
}