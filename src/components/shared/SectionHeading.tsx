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
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-yellow-600">
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}
