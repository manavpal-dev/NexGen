import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServiceGrid() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              highlights={service.highlights}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
