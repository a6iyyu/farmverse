import { ReactElement } from "react";

export interface Team {
  image: string;
  name: string;
  position: string;
  instagram?: string;
  linkedin?: string;
}

export interface Value {
  image: string;
  icon: ReactElement;
  title: string;
  description: string;
}