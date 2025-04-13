"use client";

import { useActionState } from "react";
import { Mail, User } from "lucide-react";
import { Support as Actions } from "@/app/support/actions";
import Form from "next/form";
import Text from "@/shared/form/text";
import Textarea from "@/shared/form/textarea";

// prettier-ignore
export default function Formulir() {
  const [state, action, pending] = useActionState(Actions, { error: {} });

  return (
    <Form action={action} className="space-y-3 rounded-lg bg-slate-50 p-8">
      <Text
        icon={<User />}
        label="Nama Lengkap"
        name="full_name"
        placeholder="Masukkan nama lengkap Anda"
        autoComplete="name"
        error={state.error?.full_name}
        value={state.values?.full_name}
      />
      <Text
        icon={<Mail />}
        label="Surel"
        name="email"
        placeholder="Masukkan surel Anda"
        type="email"
        autoComplete="email"
        error={state.error?.email}
        value={state.values?.email}
      />
      <Text
        icon={<Mail />}
        label="Nomor Telepon"
        name="phone"
        placeholder="Masukkan nomor telepon Anda"
        type="number"
        autoComplete="home tel"
        error={state.error?.phone}
        value={state.values?.phone}
      />
      <Textarea
        label="Pesan"
        name="message"
        maxLength={500}
        placeholder="Sampaikan beberapa pesan pada kami ..."
        error={state.error?.message}
        value={state.values?.message}
      />
      <button type="submit" className="mt-4 w-full transform cursor-pointer rounded-lg bg-amber-500 p-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-amber-400 focus:outline-none">
        {pending ? "Memuat..." : "Kirim"}
      </button>
    </Form>
  );
}