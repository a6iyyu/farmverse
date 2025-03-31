import { ReactElement } from "react";

export interface IFitur {
  icon: string;
  title: string;
  description: string;
}

export interface IHero {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface IWeAreCaring {
  icon: ReactElement;
  title: string;
  description: string;
}