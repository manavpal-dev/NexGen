const industries = [
  "Retail",
  "Interiors",
  "Nursery & Trading",
  "Consultancy",
  "Professional Services",
  "Law & Publishing",
];

export default function IndustriesSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-semibold uppercase tracking-widest text-yellow-600">
            Industry Expertise
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            Industries We Serve
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Our experience spans multiple sectors, allowing us to understand
            unique business and compliance requirements.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry}
              className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-yellow-300 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {industry}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
