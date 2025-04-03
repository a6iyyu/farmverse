import { hash } from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { ILogin, IRegister } from "@/types/auth";
import { Schema } from "@/utils/schema";
import { cookies } from "next/headers";

const Prisma = new PrismaClient();

// prettier-ignore
export class Auth {
  public static async Login({ email, password }: { email: string; password: string }): Promise<ILogin> {
    try {
      Schema.Login.parse({ email, password });
      const user = await Prisma.users.findUnique({ where: { email } });

      if (!user) {
        console.error("Pengguna tidak ditemukan.");
        return redirect("/auth/login");
      }

      if (user.password !== password) {
        console.error("Kata sandi yang Anda masukkan salah.");
        return redirect("/auth/login");
      }

      return {
        username: user.username || undefined,
        name: user.name || undefined,
        role: user.role,
        password: user.password
      };
    } catch (error) {
      console.error("Terjadi kesalahan saat masuk ke akun Anda: ", error);
      return redirect("/auth/login");
    }
  }

  public static async Register({ username, name, email, password, confirm_password, role }: { username?: string; name?: string; email: string; password: string; confirm_password: string; role: "BANK" | "FARMER" }): Promise<IRegister> {
    try {
      if (role === "FARMER") Schema.Register.parse({ username: username!, email, password, confirm_password });
      else if (role === "BANK") Schema.Register.parse({ name: name!, email, password, confirm_password });

      const existing_user = await Prisma.users.findUnique({ where: { email } });

      if (existing_user) {
        console.error("Surel sudah digunakan.");
        return redirect("/auth/register");
      }

      await Prisma.users.create({
        data: {
          username: role === "FARMER" ? username : null,
          name: role === "BANK" ? name : null,
          email,
          password: await hash(password, 10),
          role: "FARMER",
        },
      });

      return role === "FARMER" ? redirect("/farmer") : redirect("/bank");
    } catch (error) {
      console.error("Terjadi kesalahan saat pendaftaran akun: ", error);
      return redirect("/auth/register");
    }
  }

  public static async Farmer({ username, email, password, confirm_password }: { username: string, email: string, password: string, confirm_password: string }) {
    return this.Register({ username, email, password, confirm_password, role: "FARMER" });
  }

  public static async Bank({ name, email, password, confirm_password }: { name: string, email: string, password: string, confirm_password: string }) {
    return this.Register({ name, email, password, confirm_password, role: "BANK" });
  }

  public static async Logout() {
    try {
      (await cookies()).set("token", "", { expires: new Date(0), httpOnly: true, secure: true, sameSite: "lax" });
      return redirect("/auth/loginw");
    } catch (error) {
      console.error("Terjadi kesalahan saat keluar dari akun Anda: ", error);
    }
  }
}