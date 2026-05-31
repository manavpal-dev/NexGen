type TeamCardProps = {
  name: string;
  role: string;
  description: string;
};

export default function TeamCard({ name, role, description }: TeamCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
      <div className="h-72 bg-slate-200" />

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900">{name}</h3>

        <p className="mt-1 font-medium text-yellow-600">{role}</p>

        <p className="mt-4 text-slate-600">{description}</p>
      </div>
    </div>
  );
}
