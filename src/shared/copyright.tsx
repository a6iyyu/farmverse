export default function Copyright() {
  return (
    <section className="cursor-default bg-gradient-to-tl from-amber-900 to-amber-800 pb-5">
      <div className="container mx-auto w-[90vw]">
        <hr className="border-slate-200" />
        <p className="mt-5 text-center text-slate-200">
          Copyright &copy; {new Date().getFullYear()} Farmverse
        </p>
      </div>
    </section>
  );
}