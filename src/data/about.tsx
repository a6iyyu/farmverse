import { FaHandshake } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
import { IoMdPricetags } from "react-icons/io";
import { IoRocket } from "react-icons/io5";
import { Team as ITeam, Value as IValue } from "@/types/about";

// prettier-ignore
export const Team: ITeam[] = [
  {
    image: "/about/rafi-abiyyu-airlangga.jpeg",
    name: "Rafi Abiyyu Airlangga",
    position: "Founder & Full-stack Developer",
    instagram: "https://www.instagram.com/a6iyyu",
    linkedin: "https://www.linkedin.com/in/rafiabiyyuairlangga",
  },
];

// prettier-ignore
export const Value: IValue[] = [
  {
    image: "/about/keberlanjutan.jpeg",
    icon: <GiThreeLeaves className="rounded-full bg-amber-700 p-3 text-5xl text-white" />,
    title: "Keberlanjutan",
    description: "Kami berkomitmen untuk membangun agrikultur yang ramah lingkungan dan berkelanjutan. Melalui teknologi dan inovasi, kami mendukung praktik pertanian yang lebih efisien dan peduli terhadap ekosistem.",
  },
  {
    image: "/about/keterjangkauan.jpeg",
    icon: <IoMdPricetags className="rounded-full bg-amber-700 p-3 text-5xl text-white" />,
    title: "Keterjangkauan",
    description: "Farmverse hadir untuk memastikan petani mendapatkan akses langsung ke pasar dan peralatan pertanian tanpa perantara yang merugikan. Kami percaya bahwa agrikultur yang kuat dimulai dari kesejahteraan petani.",
  },
  {
    image: "/about/inovasi.jpg",
    icon: <IoRocket className="rounded-full bg-amber-700 p-3 text-5xl text-white" />,
    title: "Inovasi",
    description: "Kami memanfaatkan teknologi untuk menciptakan solusi yang memudahkan petani dalam berdagang dan mengakses alat pertanian. Farmverse terus berkembang agar selalu relevan dengan kebutuhan pengguna.",
  },
  {
    image: "/about/kolaborasi.jpg",
    icon: <FaHandshake className="rounded-full bg-amber-700 p-3 text-5xl text-white" />,
    title: "Kolaborasi",
    description: "Kami percaya bahwa membangun ekosistem agrikultur yang lebih baik memerlukan kerja sama dengan berbagai pihak—petani, mitra bisnis, dan komunitas. Dengan semangat kolaborasi, kita bisa menata masa depan agrikultur bersama.",
  },
];