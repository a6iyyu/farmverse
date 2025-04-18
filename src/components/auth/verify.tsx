"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { LockKeyhole, ShieldCheck, SquareUser } from "lucide-react";
import { Verify as Actions } from "@/actions/verify";
import Form from "next/form";
import Text from "@/shared/form/text";
import Select from "@/shared/form/select";

// prettier-ignore
export function Verify() {
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
        Lengkapi informasi Anda untuk mulai menjelajahi solusi agrikultur
        berkelanjutan bersama kami.
      </h5>
      <Form action={action} className="w-full">
        <div className="mt-6 space-y-5">
          <Select
            icon={<SquareUser />}
            label="Peran"
            name="role"
            placeholder="Masukkan peran Anda"
            options={[
              { label: "Farmer", value: "FARMER" },
              { label: "Bank", value: "BANK" },
              { label: "Customer", value: "CUSTOMER" },
            ]}
            value={state.values?.role}
          />
          <Text
            icon={<LockKeyhole />}
            label="Kata Sandi"
            name="password"
            placeholder="Masukkan kata sandi Anda"
            type="password"
            error={state.error?.password}
            value={state.values?.password}
          />
          <Text
            icon={<ShieldCheck />}
            label="Konfirmasi Kata Sandi"
            name="confirm_password"
            placeholder="Konfirmasi kata sandi Anda"
            type="password"
            error={state.error?.confirm_password}
            value={state.values?.confirm_password}
          />
        </div>
        <span className="flex items-center justify-between"></span>
        <button
          type="submit"
          className="mt-10 w-full transform cursor-pointer rounded-lg bg-amber-500 p-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-amber-400 focus:outline-none"
          disabled={pending}
        >
          {pending ? "Memuat..." : "Masuk"}
        </button>
      </Form>
      <h5 className="mt-8 cursor-default text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Farmverse
      </h5>
    </section>
  );
}