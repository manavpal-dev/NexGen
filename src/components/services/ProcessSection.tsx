const processSteps = [
  {
    step: "01",
    title: "Initial Consultation",
    description:
      "We understand your business structure, compliance requirements, and financial challenges.",
  },
  {
    step: "02",
    title: "Financial Assessment",
    description:
      "Our experts review existing records, compliance status, and identify improvement opportunities.",
  },
  {
    step: "03",
    title: "Execution & Compliance",
    description:
      "We implement accounting, taxation, audit, and compliance solutions accurately and efficiently.",
  },
  {
    step: "04",
    title: "Ongoing Support",
    description:
      "Continuous monitoring, advisory, reporting, and compliance assistance for long-term success.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <span className="font-semibold uppercase tracking-widest text-yellow-600">
            Our Process
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            How We Work
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            A structured and transparent approach that ensures accuracy,
            compliance, and business growth.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="text-5xl font-bold text-yellow-500">
                {item.step}
              </span>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
