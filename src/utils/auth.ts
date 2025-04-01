import { redirect } from "next/navigation";
import { Schema } from "@/utils/schema";

export class Auth {
  public Login() {
    try {
      Schema.Login.parse({});
    } catch (error) {
      console.error("Terjadi kesalahan saat masuk ke akun Anda: ", error);
      return redirect('/auth/login');
    }
  }

  public Register() {
    try {
      Schema.Register.parse({});
    } catch (error) {
      console.error("Terjadi kesalahan saat pendaftaran akun: ", error);
      return redirect('/auth/register');
    }
  }
}