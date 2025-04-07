import { InputHTMLAttributes, ReactElement, SelectHTMLAttributes } from "react";

interface Input {
  icon?: ReactElement;
  label: string;
  name: string;
  placeholder: string;
  value?: string;
}

export interface Text extends InputHTMLAttributes<HTMLInputElement>, Input {
  error: string | undefined;
}

export interface Select extends SelectHTMLAttributes<HTMLSelectElement>, Input {
  options: {
    label: string;
    value: string;
  }[];
}