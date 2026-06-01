import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-950 to-slate-950 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400">
          Let&apos;s Work Together
        </span>

        <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
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

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 rounded-xl bg-yellow-500 px-6 py-4 font-semibold text-slate-900 transition hover:scale-105">
            Book Consultation
            <ArrowRight size={18} />
          </button>

          <button className="rounded-xl border border-slate-700 px-6 py-4 font-semibold text-white hover:border-yellow-500">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
