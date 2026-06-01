import SectionHeading from "@/components/shared/SectionHeading";
import TeamCard from "@/components/team/TeamCard";
import { team } from "@/data/team";

const firmStats = [
  ["5+", "Years combined experience"],
  ["3", "Founding partners"],
  ["15+", "Services offered"],
];

const industries = [
  "Retail",
  "Interiors",
  "Nursery & Trading",
  "Consultancy",
  "Professional Services",
  "Law & Publishing",
];

export default function Team() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-end">
          <SectionHeading
            subtitle="Meet Our Experts"
            title="Professionals Behind NexGen Accounting Associates"
            description="A professionally managed finance and accounting consultancy founded by dedicated professionals with hands-on experience in CA articleship, corporate accounting, audit support, GST, TDS, income tax, financial reporting, and compliance documentation."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {firmStats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-lg border border-slate-200 bg-slate-50 p-5 text-center sm:text-left"
              >
                <p className="text-3xl font-bold text-slate-950">{value}</p>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-slate-200 bg-slate-950 p-6 text-white sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-semibold uppercase tracking-widest text-yellow-400">
                Industry Exposure
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                Practical experience across real business environments
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              headline={member.headline}
              location={member.location}
              experience={member.experience}
              description={member.description}
              specialties={member.specialties}
              credentials={member.credentials}
              strengths={member.strengths}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
