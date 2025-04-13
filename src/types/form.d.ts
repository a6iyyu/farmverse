import { InputHTMLAttributes, ReactElement, SelectHTMLAttributes } from "react";

interface Input {
  error?: string | undefined;
  icon?: ReactElement;
  label: string;
  name: string;
  placeholder: string;
  value?: string;
}

export interface Text extends InputHTMLAttributes<HTMLInputElement>, Input {
  type?: string;
}

export interface Textarea extends InputHTMLAttributes<HTMLTextAreaElement>, Input {
  maxLength?: number;
}

export interface Select extends SelectHTMLAttributes<HTMLSelectElement>, Input {
  options: {
    label: string;
    value: string;
  }[];
}