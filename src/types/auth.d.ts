type Role = "ADMIN" | "BANK" | "CUSTOMER" | "FARMER" | "UNKNOWN";

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