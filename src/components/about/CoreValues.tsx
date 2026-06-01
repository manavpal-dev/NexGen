import { BadgeCheck, Eye, Handshake, Target } from "lucide-react";

const values = [
  {
    title: "Integrity",
    description:
      "We maintain the highest ethical standards in every engagement.",
    icon: Handshake,
  },
  {
    title: "Accuracy",
    description:
      "Every report, filing, and financial statement is prepared with precision.",
    icon: Target,
  },
  {
    title: "Transparency",
    description:
      "Clear communication and honest advice are central to our approach.",
    icon: Eye,
  },
  {
    title: "Client Success",
    description:
      "Our clients' growth and compliance remain our top priorities.",
    icon: BadgeCheck,
  },
];

export default function CoreValues() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-widest text-yellow-600">
            What Guides Us
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            The standards behind every filing, statement, audit schedule, and
            advisory conversation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-300 hover:shadow-md"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-yellow-100 text-yellow-700">
                <value.icon size={21} aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {value.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
