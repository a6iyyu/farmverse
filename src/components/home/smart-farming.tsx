"use client";

// prettier-ignore
export default function SmartFarming() {
  return (
    <section className="container mx-auto mt-20 grid w-[90vw] cursor-default grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-12">
      <h4 className="text-justify text-lg leading-relaxed font-light text-gray-600 lg:max-w-xl">
        Tingkatkan produktivitas pertanian Anda dengan solusi AI canggih yang
        memberikan wawasan <em>real-time</em>, prediksi akurat, dan rekomendasi
        yang dipersonalisasi untuk setiap tahap pertumbuhan tanaman.
      </h4>
      <h2 className="-order-1 text-left text-3xl font-bold tracking-tight text-gray-800 md:text-4xl lg:order-0 lg:text-right lg:text-5xl">
        Smart Farming dengan
        <span className="text-amber-600 underline decoration-wavy">
          {" "}
          Kecerdasan Buatan
        </span>
      </h2>
    </section>
  );
}