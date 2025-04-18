import { hash } from "bcrypt";
import { Register as IRegister } from "@/types/auth";
import { Prisma } from "@/utils/prisma";

// prettier-ignore
export class Auth {
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
      console.error(process.env.NODE_ENV !== "production" && `Terjadi kesalahan saat mendaftarkan akun Anda: ${error}`);
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
      console.error(process.env.NODE_ENV !== "production" && `Terjadi kesalahan saat keluar dari akun Anda: ${error}`);
      throw new Error("Terjadi kesalahan saat keluar dari akun Anda.");
    }
  }
}