import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="bg-slate-950 px-6 py-24 text-white sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-semibold uppercase tracking-widest text-yellow-400">
          404
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          This page could not be found
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          The page may have moved, or the address may be incorrect. You can
          return home or contact NexGen Accounting Associates for support.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-yellow-300"
          >
            <Home size={18} aria-hidden="true" />
            Go Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-semibold text-white transition hover:border-yellow-300 hover:text-yellow-300"
          >
            Contact Us
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
