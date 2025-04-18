import { Building2, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// prettier-ignore
export default function DukungPetaniBerkelanjutan() {
  return (
    <figure className="relative h-125">
      <Image
        height={1000}
        width={1000}
        src="/home/dukung-petani-berkelanjutan.jpg"
        alt="Dukung Petani Berkelanjutan"
        className="absolute -z-20 h-125 w-full rounded-md object-cover"
        loading="lazy"
      />
      <span className="absolute inset-0 -z-10 h-125 rounded-md bg-black opacity-50 backdrop-blur-lg" />
      <div className="z-10 flex h-125 w-full flex-col justify-between p-8 text-white">
        <Building2 size={48} />
        <figcaption className="cursor-default">
          <strong className="text-3xl">Dukung Pertanian Berkelanjutan.</strong>
          <br />
          <h5 className="mt-3 text-base lg:text-lg">
            Jadilah bagian dari perubahan dengan mendukung petani dan
            menciptakan masa depan yang lebih hijau.
          </h5>
        </figcaption>
        <Link href="/register" className="flex w-fit items-center gap-2 rounded-md bg-white px-4 py-2.5 lg:px-6 lg:py-3 text-sm lg:text-base font-semibold text-black">
          Mulai kontribusi <ChevronRight size={20} />
        </Link>
      </div>
    </figure>
  );
}