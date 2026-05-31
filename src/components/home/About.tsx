import SectionHeading from "@/components/shared/SectionHeading";
import { stats } from "@/data/stats";

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <SectionHeading
              subtitle="Who We Are"
              title="Building Financial Confidence Through Expertise"
              description="NexGen Accounting Associates is a professionally managed finance and accounting consultancy dedicated to helping businesses stay compliant, organized and financially strong."
            />
          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 p-8 text-center shadow-sm"
              >
                <h3 className="text-4xl font-bold text-yellow-600">
                  {stat.value}
                </h3>

                <p className="mt-2 text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
