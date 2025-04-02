import { ReactElement } from "react";

export interface Hero {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface WeAreCaring {
  icon: ReactElement;
  title: string;
  description: string;
}