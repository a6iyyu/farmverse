import { compare, hash } from "bcrypt";
import { getRandomValues } from "crypto";
import { Login as ILogin, Register as IRegister } from "@/types/auth";
import { JWT } from "@/utils/jwt";
import { Prisma } from "@/utils/prisma";

// prettier-ignore
export class Auth {
  public static async Login({ email, password }: { email: string; password: string }): Promise<ILogin> {
    try {
      const user = await Prisma.users.findUnique({ where: { email } });

      if (!user) throw new Error("Akun Anda tidak ditemukan!");
      if (!(await compare(password, user.password))) throw new Error("Kata sandi yang Anda masukkan salah!");

      const accessToken = await JWT.sign({ id_user: user.id_user, role: user.role });
      const refreshToken = Array.from(getRandomValues(new Uint8Array(32))).map((b) => b.toString(16).padStart(2, "0")).join("");

      await Prisma.sessions.deleteMany({ where: { id_user: user.id_user } });
      await Prisma.sessions.create({
        data: {
          id_user: user.id_user,
          token: refreshToken,
          expires_at: new Date(Date.now() + 1000 * 60 * 60 * 24),
        },
      });

      return {
        message: "Berhasil masuk ke akun Anda.",
        data: {
          id_user: user.id_user,
          email: user.email,
          role: user.role,
          refresh_token: refreshToken,
          access_token: accessToken,
        },
      };
    } catch (error) {
      if (process.env.NODE_ENV !== "production") console.error(`Terjadi kesalahan saat masuk ke akun Anda: ${error}`);
      throw new Error(`Terjadi kesalahan saat masuk ke akun Anda.`);
    }
  }

  public static async Register({ username, email, password, confirm_password, role }: { username: string; email: string; password: string; confirm_password: string; role: string }): Promise<IRegister> {
    try {
      const existingUser = await Prisma.users.findFirst({ where: { OR: [{ email }, { username }] } });
      if (!["ADMIN", "BANK", "CUSTOMER", "FARMER"].includes(role)) throw new Error("Peran Anda tidak valid.");
      if (password !== confirm_password) throw new Error("Konfirmasi kata sandi tidak sesuai!");
      if (existingUser) throw new Error("Pengguna sudah ada!");
      
      const hashing = await hash(password, 10);
      const user = await Prisma.users.create({
        data: {
          username,
          name: username,
          email,
          password: hashing,
          role: role as "ADMIN" | "BANK" | "CUSTOMER" | "FARMER",
        },
      });

      return {
        message: "Pendaftaran akun Anda berhasil!",
        data: {
          id_user: user.id_user,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      };
    } catch (error) {
      if (process.env.NODE_ENV !== "production") console.error(`Terjadi kesalahan saat mendaftarkan akun Anda: ${error}`);
      throw new Error("Terjadi kesalahan saat mendaftarkan akun Anda.");
    }
  }

  public static async Logout(token: string): Promise<{ message: string, redirect: string }> {
    try {
      const session = await Prisma.sessions.findUnique({ where: { token } });
      if (!session) throw new Error("Sesi tidak ditemukan atau akun Anda sudah keluar.");
      await Prisma.sessions.delete({ where: { token } });
      return { message: "Anda berhasil keluar.", redirect: "/login" };
    } catch (error) {
      if (process.env.NODE_ENV !== "production") console.error(`Terjadi kesalahan saat keluar dari akun Anda: ${error}`);
      throw new Error("Terjadi kesalahan saat keluar dari akun Anda.");
    }
  }
}