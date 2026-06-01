export default function MissionVision() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-lg bg-slate-950 p-8 shadow-xl sm:p-10">
            <span className="font-semibold uppercase tracking-widest text-yellow-400">
              Our Mission
            </span>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Deliver precise, compliant financial solutions
            </h2>

            <p className="mt-4 leading-relaxed text-slate-300">
              To help businesses maintain financial clarity, regulatory
              compliance, and sustainable growth through professional
              accounting, audit, and advisory services.
            </p>
          </article>

          <article className="rounded-lg border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <span className="font-semibold uppercase tracking-widest text-yellow-600">
              Our Vision
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Become a trusted financial partner
            </h2>

            <p className="mt-4 leading-relaxed text-slate-600">
              To be recognized as a dependable consultancy that empowers
              businesses through financial discipline, transparency, and
              strategic guidance.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
