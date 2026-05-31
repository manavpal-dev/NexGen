type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 h-12 w-12 rounded-xl bg-yellow-100" />

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-slate-600">
        {description}
      </p>

      <button className="mt-6 font-semibold text-yellow-600">
        Learn More →
      </button>
    </div>
  );
}