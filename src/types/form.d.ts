import { InputHTMLAttributes, ReactElement, SelectHTMLAttributes } from "react";

interface Input {
  icon?: ReactElement;
  error?: string | undefined;
  label: string;
  name: string;
  placeholder: string;
  value?: string;
}

export interface Text extends InputHTMLAttributes<HTMLInputElement>, Input {
  type?: string;
}

export interface Select extends SelectHTMLAttributes<HTMLSelectElement>, Input {
  options: {
    label: string;
    value: string;
  }[];
}