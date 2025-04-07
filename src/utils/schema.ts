import { z } from "zod";

export class Schema {
  static Login = z.object({
    email: z.string().trim().toLowerCase().email({ message: "Format surel tidak valid." }),
    role: z.enum(["ADMIN", "BANK", "FARMER"]),
    password: z.string().trim().min(1, { message: "Kata sandi tidak boleh kosong." }),
  });
  
  static Register = z.object({
    username: z.string().trim().min(3, { message: "Minimal 3 karakter." }).max(50, { message: "Maksimal 50 karakter." }).regex(/^[a-z0-9]+$/, { message: "Hanya boleh berisi huruf kecil dan angka." }),
    email: z.string().trim().toLowerCase().email({ message: "Format surel tidak valid." }).max(100, { message: "Harus kurang dari 100 karakter." }),
    role: z.enum(["ADMIN", "BANK", "FARMER"]),
    password: z.string().trim().min(7, { message: "Minimal 7 karakter." }).max(60, { message: "Maksimal 60 karakter." }).regex(/[A-Z]/, { message: "Setidaknya ada satu huruf besar." }).regex(/\d/, { message: "Setidaknya ada satu angka." }).regex(/[!@#$%^&*()_+{}:"<>?~`]/, { message: "Setidaknya ada satu karakter spesial." }),
    confirm_password: z.string().trim(),
  }).refine(data => data.password === data.confirm_password, {
    message: "Tidak sama dengan kata sandi.",
    path: ["confirm_password"],
  });
}