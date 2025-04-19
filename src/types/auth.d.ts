type Role = "ADMIN" | "BANK" | "CUSTOMER" | "FARMER" | "UNKNOWN";

interface Auth {
  id_user: string;
  username: string;
  email: string;
  password: string;
  role: Role;
}

interface Token {
  access_token: string;
  refresh_token: string;
}

export interface Login {
  data: Auth & Token;
  message: string;
}

export interface Register {
  data: Auth & { username: string };
  message: string;
  confirm_password: string;
}