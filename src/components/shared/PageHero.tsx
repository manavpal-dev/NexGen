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
    <section className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(30,58,138,0.82),_rgba(15,23,42,1)_55%,_rgba(15,23,42,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,_transparent_1px),linear-gradient(90deg,_rgba(255,255,255,0.035)_1px,_transparent_1px)] bg-[size:52px_52px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400">
          {badge}
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
