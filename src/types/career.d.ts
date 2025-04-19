import { ReactElement } from "react";

type Department =
  | AGRICULTURE
  | DESIGN
  | EDUCATION
  | FINANCE
  | MARKETING
  | OPERATIONS
  | RESEARCH
  | SUPPORT
  | TECHNOLOGY;

type Location = ONSITE | HYBRID | REMOTE;
type CareerType = FULL_TIME | PART_TIME | INTERNSHIP;
type Status = OPEN | CLOSE;

export interface Culture {
  icon: ReactElement;
  title: string;
  description: string;
}

export interface Career {
  id_career: string;
  title: string;
  department: Department;
  description: string;
  requirements: string;
  status: Status;
  type;
  min_salary: number;
  max_salary: number;
  location: Location;
  deadline: Date;
}