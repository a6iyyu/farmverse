import { ReactElement } from "react";

type Categories = "Umum" | "Akun" | "Mitra" | "Petani" | "Teknis";

export interface FAQs {
  category: Categories;
  question: string;
  answer: string;
}

export interface Feedback {
  full_name: string;
  email: string;
  phone: string;
  message: string;
}

export interface Statistics {
  icon: ReactElement;
  count: number;
  title: string;
  unit: string;
}