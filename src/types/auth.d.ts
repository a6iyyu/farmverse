type Role = "ADMIN" | "BANK" | "FARMER";

interface Auth {
  id_user: string;
  email: string;
  role: Role;
}

interface Token {
  access_token: string;
  refresh_token: string;
}

export interface Login {
  message: string;
  data: Auth & Token;
}

export interface Register {
  message: string;
  data: Auth & { username: string };
}