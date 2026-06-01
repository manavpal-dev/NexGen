import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400">
          Let&apos;s Work Together
        </span>

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Ready to Simplify Your
          <span className="block text-yellow-400">
            Accounting & Compliance?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          From bookkeeping and GST compliance to audit support and taxation
          services, we&apos;re here to help your business stay compliant and grow
          confidently.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-4 font-semibold text-slate-950 transition hover:bg-yellow-300"
          >
            Book Consultation
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-4 font-semibold text-white transition hover:border-yellow-300 hover:text-yellow-300"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
