import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Team as TeamProps } from "@/data/about";
import { Team as ITeam } from "@/types/about";
import Image from "next/image";
import Link from "next/link";

// prettier-ignore
export default function KenaliTimKami() {
  return (
    <section className="container mx-auto my-14 flex w-[85vw] cursor-default flex-col text-justify lg:w-[90vw]">
      <h3 className="text-xl font-bold md:text-2xl lg:text-3xl">
        Kenali Tim Kami 👋
      </h3>
      <p className="mt-4 hidden w-3/4 text-gray-600 lg:block">
        Di balik Farmverse, ada tim yang penuh semangat untuk membawa perubahan
        dalam dunia agrikultur. Kami adalah sekelompok individu yang percaya
        bahwa teknologi dapat membuka peluang baru bagi para pelaku usaha
        agrikultur dan membangun ekosistem keberlanjutan.
      </p>
      <div className="mt-7 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TeamProps.map((team: ITeam, index: number) => (
          <figure key={index} className="h-full cursor-pointer rounded-lg border border-slate-200/75 bg-slate-100/75 p-4 shadow-lg duration-300 lg:hover:bg-slate-200/80">
            <Image
              height={200}
              width={200}
              src={team.image}
              alt={team.name}
              className="mb-4 aspect-square h-auto w-full rounded-lg object-cover"
              loading="lazy"
            />
            <h4 className="text-base font-bold lg:text-lg">{team.name}</h4>
            <figcaption className="mb-4 text-xs text-gray-600 lg:text-sm">
              {team.position}
            </figcaption>
            <span className="flex items-center gap-3">
              <Link href={team.instagram as string}>
                <FaInstagram className="h-5 w-5 lg:h-6.5 lg:w-6.5" />
              </Link>
              <Link href={team.linkedin as string}>
                <FaLinkedin className="h-5 w-5 lg:h-6.5 lg:w-6.5" />
              </Link>
            </span>
          </figure>
        ))}
      </div>
    </section>
  );
}