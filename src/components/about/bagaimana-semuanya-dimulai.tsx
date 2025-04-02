import { LandPlot } from "lucide-react";

export default function BagaimanaSemuanyaDimulai() {
  return (
    <section className="container mx-auto mt-10 w-[85vw] cursor-default lg:w-[90vw]">
      <h3 className="mb-4 inline-flex flex-wrap items-center text-xl font-bold tracking-tight whitespace-nowrap text-gray-800 md:text-2xl lg:text-3xl">
        Bagaimana Semuanya{" "}
        <span className="ml-1 text-amber-600 underline decoration-wavy">
          Dimulai?
        </span>
        <LandPlot size={40} className="ml-3 hidden lg:block" />
      </h3>
      <div className="grid grid-cols-1 gap-4 text-justify text-sm leading-relaxed text-gray-600 lg:grid-cols-2 lg:gap-8 lg:text-base">
        <p>
          Banyak pelaku agrikultur kesulitan menyalurkan hasil panen mereka
          karena perantara calo yang menekan harga. Selain itu, akses ke
          peralatan pertanian berkualitas masih menjadi kendala utama. Masalah
          ini tidak hanya merugikan petani secara finansial, tetapi juga
          menghambat inovasi di sektor agrikultur. Kami melihat perlunya solusi
          yang dapat menghubungkan petani langsung dengan pasar dan penyedia
          alat pertanian. Dari sinilah Farmverse lahir sebagai jawaban atas
          tantangan tersebut.
        </p>
        <p>
          Farmverse hadir sebagai ekosistem digital yang menghubungkan petani,
          penyedia alat pertanian, dan bank sampah. Dengan teknologi, kami
          menciptakan sistem pertanian yang lebih adil, berkelanjutan, dan
          menguntungkan petani. Kami berkomitmen untuk memberikan akses lebih
          luas ke pasar dan sumber daya. Hasil kerja keras petani harus dihargai
          dengan layak. Farmverse bukan sekadar bisnis, tetapi langkah nyata
          untuk masa depan agrikultur Indonesia yang lebih cerah.
        </p>
      </div>
    </section>
  );
}