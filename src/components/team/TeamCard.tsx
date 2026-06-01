import {
  BadgeCheck,
  BriefcaseBusiness,
  ChevronRight,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

type TeamCardProps = {
  name: string;
  role: string;
  headline: string;
  location: string;
  experience: string;
  description: string;
  specialties: string[];
  credentials: string[];
  strengths: string[];
};

export default function TeamCard({
  name,
  role,
  headline,
  location,
  experience,
  description,
  specialties,
  credentials,
  strengths,
}: TeamCardProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-xl">
      <div className="relative min-h-52 overflow-hidden bg-slate-950 p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(234,179,8,0.24),_transparent_32%),linear-gradient(135deg,_rgba(30,58,138,0.85),_rgba(15,23,42,1))]" />
        <div className="absolute -right-10 -top-12 h-36 w-36 rounded-full border border-white/10" />
        <div className="absolute -bottom-12 left-8 h-32 w-32 rounded-full border border-yellow-400/20" />

        <div className="relative flex h-full flex-col justify-between gap-10">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-300">
              <BriefcaseBusiness size={14} aria-hidden="true" />
              {experience}
            </span>

            <BadgeCheck
              className="text-yellow-300 transition group-hover:scale-110"
              size={24}
              aria-hidden="true"
            />
          </div>

          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="grid h-20 w-20 place-items-center rounded-lg border border-yellow-300/40 bg-yellow-400 text-2xl font-bold text-slate-950 shadow-lg">
                {initials}
              </div>
              <p className="mt-4 text-sm font-medium text-slate-300">
                {role}
              </p>
            </div>
            <ChevronRight
              className="mb-2 text-white/45 transition group-hover:translate-x-1 group-hover:text-yellow-300"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold text-slate-900">{name}</h3>
        <p className="mt-1 font-semibold text-yellow-700">{headline}</p>

        <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-500">
          <MapPin size={16} aria-hidden="true" />
          {location}
        </p>

        <p className="mt-4 leading-relaxed text-slate-600">{description}</p>

        <div className="mt-6 flex flex-wrap gap-2" aria-label="Specialties">
          {specialties.map((specialty) => (
            <span
              key={specialty}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
            >
              {specialty}
            </span>
          ))}
        </div>

        <div className="mt-6 grid gap-4 border-t border-slate-100 pt-5">
          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-900">
              <GraduationCap size={16} aria-hidden="true" />
              Credentials
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {credentials.join(" · ")}
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-900">
              <Sparkles size={16} aria-hidden="true" />
              Strengths
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {strengths.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
