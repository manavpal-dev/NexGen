import { advantages } from "@/data/advantages";

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-yellow-400">
            Our Advantage
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why Choose NexGen?
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            We don&apos;t just process numbers. We deliver clarity, compliance,
            and confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {advantages.map((item) => (
            <article
              key={item.number}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-yellow-300"
            >
              <span className="text-4xl font-bold text-yellow-500">
                {item.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
