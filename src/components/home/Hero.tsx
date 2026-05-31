export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-4xl">
          <span className="mb-6 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
            Finance • Accounting • Tax Consultancy
          </span>

          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Modern Accounting
            <span className="block text-yellow-400">Solutions For</span>
            Growing Businesses
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">
            Accounting, Audit, Taxation, Compliance and Advisory services
            designed to help businesses stay compliant, organized and
            financially strong.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-yellow-500 px-6 py-4 font-semibold text-slate-900 transition hover:scale-105">
              Book Consultation
            </button>

            <button className="rounded-xl border border-slate-700 px-6 py-4 font-semibold text-white transition hover:border-yellow-400">
              Explore Services
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-yellow-400">5+</h3>
              <p className="text-slate-400">Years Experience</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">3</h3>
              <p className="text-slate-400">Founding Partners</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">15+</h3>
              <p className="text-slate-400">Services</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
