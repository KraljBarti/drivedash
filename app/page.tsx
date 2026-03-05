import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
          The car you book is the{" "}
          <span className="text-blue-600 underline decoration-4 underline-offset-8">
            car you drive.
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Skip the paperwork and the "or similar" excuses. DriveDash connects
          you to real inventory with instant mobile unlocking.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/search"
            className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-blue-500 hover:-translate-y-1 transition-all"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </main>
  );
}
