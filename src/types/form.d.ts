import { InputHTMLAttributes, ReactElement, SelectHTMLAttributes } from "react";

interface Input {
  icon: ReactElement;
  label: string;
  name: string;
}

export interface Text extends InputHTMLAttributes<HTMLInputElement>, Input {
  placeholder: string;
  value?: string;
}

export interface Select extends SelectHTMLAttributes<HTMLSelectElement>, Input {}