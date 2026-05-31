const industries = [
  "Retail",
  "Interiors",
  "Trading",
  "Consultancy",
  "Professional Services",
  "Law & Publishing",
];

export default function IndustriesSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-yellow-600">
            Industry Expertise
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Industries We Serve
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Our experience spans multiple sectors, allowing us to understand
            unique business and compliance requirements.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry}
              className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:border-yellow-500 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {industry}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
