import { ReactElement } from "react";

type Categories = "Umum" | "Akun" | "Mitra" | "Petani" | "Teknis";

export interface FAQs {
  category: Categories;
  question: string;
  answer: string;
}

export interface Statistics {
  icon: ReactElement;
  count: number;
  title: string;
  unit: string;
}