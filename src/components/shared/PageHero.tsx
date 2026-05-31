type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
};

export default function PageHero({
  badge,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-32">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-900" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
          {badge}
        </span>

        <h1 className="mt-6 text-5xl font-bold text-white md:text-7xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
          {description}
        </p>
      </div>
    </section>
  );
}