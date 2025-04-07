type Role = "ADMIN" | "BANK" | "FARMER";

export interface Login {
  message: string;
  data: {
    id_user: string;
    email: string;
    role: Role;
    token: string;
  };
}

export interface Register {
  message: string;
  data: {
    id_user: string;
    username: string;
    email: string;
    role: "ADMIN" | "BANK" | "FARMER";
  };
}