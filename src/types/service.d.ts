import { ReactElement } from "react";

export interface Advantages {
  icon: ReactElement;
  title: string;
  advantage: string;
}

export interface Comparison {
  category: string;
  farmverse: string;
  others: string;
}

export interface Services {
  icon: ReactElement;
  title: string;
  description: string;
}