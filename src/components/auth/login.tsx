"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { LockKeyhole, Mail } from "lucide-react";
import { Login as Actions } from "@/actions/login";
import { signIn } from "next-auth/react";
import Text from "@/shared/form/text";

// prettier-ignore
export function Login() {
  const [state, action, pending] = useActionState(Actions, { error: {} });
  const router = useRouter();

    useEffect(() => {
      if (state?.redirect) router.push(state.redirect);
    }, [router, state]);

  return (
    <section className="bg-gradient-to-lr mx-auto flex w-4/5 flex-col items-center justify-center from-[#a9d6ff] to-[#edf2f7] bg-cover bg-center bg-no-repeat text-black lg:w-[65%]">
      <h3 className="cursor-default text-xl font-bold text-[#1a4167] lg:text-2xl">
        Selamat datang 🌿
      </h3>
      <h5 className="mt-1 cursor-default text-center text-sm text-gray-600 lg:mb-6 lg:text-base">
        Bersama kita wujudkan agrikultur yang lebih adil dan berkelanjutan.
      </h5>
      <form action={action} className="w-full">
        <div className="mt-6 space-y-5">
          <Text
            icon={<Mail />}
            label="Surel"
            name="email"
            placeholder="Masukkan surel Anda"
            type="email"
            autoComplete="email"
            error={state?.error?.email}
          />
          <Text
            icon={<LockKeyhole />}
            label="Kata Sandi"
            name="password"
            placeholder="Masukkan kata sandi Anda"
            type="password"
            error={state?.error?.password}
          />
        </div>
        <button type="submit" className="mt-10 w-full transform cursor-pointer rounded-lg bg-amber-500 p-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-amber-400 focus:outline-none">
          {pending ? "Memuat..." : "Masuk"}
        </button>
      </form>
      
      <div className="mt-6 flex items-center w-full">
        <div className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-sm text-gray-500">Or</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>

      <button
        type="button"
        onClick={() => signIn("google")}
        className="mt-6 w-full flex items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
      >
        <svg className="h-5 w-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
          <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.4-34.3-4-50.5H272.1v95.6h146.9c-6.4 34.3-25.7 63.4-54.7 83l88.7 69c51.9-47.9 82.5-118.2 82.5-197.1z"/>
          <path fill="#34A853" d="M272.1 544.3c73.6 0 135.3-24.3 180.4-66.4l-88.7-69c-24.6 17-56.2 27-91.7 27-70.6 0-130.4-47.7-151.9-111.6l-91.2 70.7c43.2 85.4 131.7 149.3 243.1 149.3z"/>
          <path fill="#FBBC05" d="M120.2 324.6c-10.1-29.3-10.1-60.7 0-90l-91.2-70.7c-39.7 79.5-39.7 173.5 0 253.1l91.2-70.7z"/>
          <path fill="#EA4335" d="M272.1 107.7c39.9-.6 78 14.6 107.2 42.6l80.4-80.4C402.2 24.3 340.5 0 272.1 0 161 0 72.6 63.9 29.4 149.3l91.2 70.7c21.5-63.9 81.3-111.6 151.5-111.6z"/>
        </svg>
        <span>Sign in with Google</span>
      </button>
      
      <h5 className="mt-8 cursor-default text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Farmverse
      </h5>
    </section>
  );
}
