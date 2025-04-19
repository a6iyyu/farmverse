"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { LogOut, UserCheck } from "lucide-react";
import { Logout } from "@/actions/logout";
import Image from "next/image";

export default function VerificationSidebar() {
  const [state, action] = useActionState(Logout, { message: "", redirect: "" });
  const router = useRouter();

  useEffect(() => {
    if (state.redirect) router.push(state.redirect);
  }, [router, state]);

  return (
    <aside className="fixed top-1/2 left-6 z-30 flex h-[95svh] w-20 -translate-y-1/2 flex-col items-center rounded-xl border-2 border-amber-600 bg-amber-700 p-4 shadow-2xl transition-all duration-300 ease-in-out">
      <section className="mb-4">
        <Image
          src="/favicon.ico"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </section>
      <section className="flex flex-grow flex-col items-center justify-center space-y-6 text-white">
        <UserCheck size={24} />
      </section>
      <form action={action} className="mt-4">
        <button
          type="submit"
          className="text-white transition hover:text-red-400"
          title="Keluar"
        >
          <LogOut size={20} />
        </button>
      </form>
    </aside>
  );
}