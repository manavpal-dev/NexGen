import SectionHeading from "@/components/shared/SectionHeading";
import { advantages } from "@/data/advantages";

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Advantage"
          title="Why Choose NexGen?"
          description="We don't just process numbers — we deliver clarity, compliance, and confidence."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((item) => (
            <div
              key={item.number}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-yellow-500"
            >
              <span className="text-4xl font-bold text-yellow-500">
                {item.number}
              </span>

              <h3 className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
