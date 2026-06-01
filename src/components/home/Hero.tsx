import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(23,37,84,0.92),_rgba(15,23,42,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,255,255,0.04)_1px,_transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <div>
          <span className="mb-6 inline-flex rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-300">
            Finance • Accounting • Tax Consultancy
          </span>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Accounting clarity for compliant, confident growth
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            NexGen Accounting Associates delivers accounting, audit support,
            taxation, compliance, financial reporting, and advisory services for
            businesses that need accurate records and dependable guidance.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
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
              Explore Services
            </Link>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-5">
              <h3 className="text-3xl font-bold text-yellow-400">5+</h3>
              <p className="mt-1 text-sm text-slate-300">Years experience</p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-5">
              <h3 className="text-3xl font-bold text-yellow-400">3</h3>
              <p className="mt-1 text-sm text-slate-300">Founding partners</p>
            </div>

            <div className="rounded-lg border border-white/10 bg-white/5 p-5">
              <h3 className="text-3xl font-bold text-yellow-400">15+</h3>
              <p className="mt-1 text-sm text-slate-300">Services offered</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur sm:p-6">
          <div className="rounded-lg bg-white p-6 text-slate-950 sm:p-8">
            <p className="font-semibold uppercase tracking-widest text-yellow-700">
              Core Coverage
            </p>

            <h2 className="mt-4 text-2xl font-bold">
              End-to-end finance support under one professional roof
            </h2>

            <div className="mt-6 grid gap-4">
              {[
                "Accounting, bookkeeping, and financial statements",
                "GST registration, returns, 2B reconciliation, E-Way Bill, and E-Invoicing",
                "TDS returns, income tax filing, tax audit support, and ROC compliance",
                "Statutory audit support, IFC testing, ledger scrutiny, and reporting",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-yellow-600"
                    size={20}
                    aria-hidden="true"
                  />
                  <p className="leading-7 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
