const values = [
  {
    title: "Integrity",
    description:
      "We maintain the highest ethical standards in every engagement.",
  },
  {
    title: "Accuracy",
    description:
      "Every report, filing, and financial statement is prepared with precision.",
  },
  {
    title: "Transparency",
    description:
      "Clear communication and honest advice are central to our approach.",
  },
  {
    title: "Client Success",
    description:
      "Our clients' growth and compliance remain our top priorities.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Core Values
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {value.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}