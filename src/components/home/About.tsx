import SectionHeading from "@/components/shared/SectionHeading";
import { stats } from "@/data/stats";

export default function About() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading
              subtitle="Who We Are"
              title="Building Financial Confidence Through Expertise"
              description="NexGen Accounting Associates is a professionally managed finance and accounting consultancy founded by dedicated professionals focused on precise, compliant, and value-driven financial services."
            />

            <p className="mt-6 max-w-3xl leading-8 text-slate-600">
              Our team brings practical exposure from CA articleship programmes,
              corporate accounting environments, and consultancy firms. That
              blend helps us handle complex accounting, audit, tax, and
              regulatory documentation with a client-first mindset.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <h3 className="text-4xl font-bold text-yellow-600">
                  {stat.value}
                </h3>

                <p className="mt-2 font-medium text-slate-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
