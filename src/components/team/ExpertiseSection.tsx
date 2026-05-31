const expertise = [
  "Accounting & Bookkeeping",
  "GST Compliance",
  "TDS Filing",
  "Income Tax",
  "Statutory Audit",
  "Business Advisory",
  "Financial Reporting",
  "ROC Compliance",
];

export default function ExpertiseSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold">
          Areas of Expertise
        </h2>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {expertise.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-5 py-3"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}