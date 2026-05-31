export default function MissionVision() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-slate-950 p-10">
            <span className="text-yellow-500 font-semibold">Our Mission</span>

            <h2 className="mt-4 text-3xl font-bold text-white">
              Deliver Reliable Financial Solutions
            </h2>

            <p className="mt-4 text-slate-300 leading-relaxed">
              To help businesses maintain financial clarity, regulatory
              compliance, and sustainable growth through professional
              accounting, audit, and advisory services.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 p-10">
            <span className="text-yellow-600 font-semibold">Our Vision</span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Become a Trusted Financial Partner
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              To be recognized as a dependable consultancy that empowers
              businesses through financial discipline, transparency, and
              strategic guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
