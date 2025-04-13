import { Building2, Phone } from "lucide-react";
import Image from "next/image";

export default function HubungiKami() {
  return (
    <section>
      <div className="relative">
        <span className="absolute inset-0 -z-10 -rotate-2 transform rounded-xl bg-amber-200" />
        <Image
          height={1000}
          width={1000}
          src="/support/hubungi-kami.jpg"
          alt="Hubungi Kami"
          className="h-60 w-full rounded-lg object-cover shadow-lg"
          loading="lazy"
        />
      </div>
      <h5 className="mt-5 cursor-default font-medium text-slate-600">
        Semua pesan punya arti, tapi yang disampaikan dengan niat baik akan
        lebih mudah kami tindak lanjuti.
      </h5>
      <ul className="mt-7 flex flex-col items-start gap-8 sm:flex-row sm:items-center lg:flex-col lg:items-start">
        <li className="flex items-center gap-4">
          <Phone className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-600 bg-transparent p-2 text-amber-600" />
          <span>
            <h5 className="text-lg font-semibold">Phone</h5>
            <p className="text-slate-600">+62 812-3456-7890</p>
          </span>
        </li>
        <li className="flex items-center gap-4">
          <Building2 className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-600 bg-transparent p-2 text-amber-600" />
          <span>
            <h5 className="text-lg font-semibold">Address</h5>
            <p className="text-slate-600">Jln. Pemuda No. 1, Jakarta</p>
          </span>
        </li>
      </ul>
    </section>
  );
}