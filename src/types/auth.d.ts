export interface ILogin {
  username?: string;
  name?: string;
  password: string;
  role: "ADMIN" | "BANK" | "FARMER";
}

export interface IRegister {
  username?: string;
  name?: string;
  email: string;
  password: string;
  confirm_password: string;
  role: "BANK" | "FARMER";
}