type SectionHeadingProps = {
  subtitle?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  subtitle,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {subtitle && (
        <p className="mb-3 font-semibold uppercase tracking-widest text-yellow-600">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold text-slate-900">{title}</h2>

      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
