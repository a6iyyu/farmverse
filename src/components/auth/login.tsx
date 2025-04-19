"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { LockKeyhole, Mail } from "lucide-react";
import { FaGoogle } from "react-icons/fa6";
import { Login as Actions } from "@/actions/login";
import Form from "next/form";
import Link from "next/link";
import Text from "@/shared/form/text";

// prettier-ignore
export function Login() {
  const [state, action, pending] = useActionState(Actions, { error: {} });
  const router = useRouter();

  useEffect(() => {
    if (typeof state?.redirect === "string") router.push(state.redirect);
  }, [router, state]);

  return (
    <section className="bg-gradient-to-lr mx-auto flex w-4/5 flex-col items-center justify-center from-[#a9d6ff] to-[#edf2f7] bg-cover bg-center bg-no-repeat py-12 text-black lg:w-[65%]">
      <h3 className="cursor-default text-xl font-bold text-[#1a4167] lg:text-2xl">
        Selamat datang 🌿
      </h3>
      <h5 className="mt-1 cursor-default text-center text-sm text-gray-600 lg:mb-6 lg:text-base">
        Bersama kita wujudkan agrikultur yang lebih adil dan berkelanjutan.
      </h5>
      <Form action={action} className="w-full">
        <div className="mt-6 space-y-5">
          <Text
            icon={<Mail />}
            label="Surel"
            name="email"
            placeholder="Masukkan surel Anda"
            type="email"
            autoComplete="email"
            error={state.error?.email}
          />
          <Text
            icon={<LockKeyhole />}
            label="Kata Sandi"
            name="password"
            placeholder="Masukkan kata sandi Anda"
            type="password"
            error={state.error?.password}
          />
        </div>
        <button
          type="submit"
          className="mt-10 w-full transform cursor-pointer rounded-lg bg-amber-500 p-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-amber-400 focus:outline-none"
          disabled={pending}
        >
          {pending ? "Memuat..." : "Masuk"}
        </button>
      </Form>
      <div className="mt-8 flex w-full flex-col items-center justify-between text-sm lg:flex-row lg:text-base">
        <Link href="/register" className="font-semibold text-teal-600 transition-colors duration-300 hover:underline lg:hover:text-teal-500">
          Belum Punya Akun?
        </Link>
        <Link href="/forgot-password" className="font-semibold text-slate-600 transition-colors duration-300 hover:underline lg:hover:text-slate-500">
          Lupa Kata Sandi?
        </Link>
      </div>
      <div className="mt-10 flex w-full items-center">
        <span className="flex-grow border-t border-gray-300" />
        <h5 className="mx-4 text-sm text-gray-500">ATAU</h5>
        <span className="flex-grow border-t border-gray-300" />
      </div>
      <button
        type="button"
        onClick={() => signIn("google")}
        className="mt-6 flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-colors duration-300 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 focus:outline-none lg:hover:bg-gray-100"
      >
        <FaGoogle />
        <h5>Google</h5>
      </button>
      <h5 className="mt-8 cursor-default text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Farmverse
      </h5>
    </section>
  );
}