import SectionHeading from "@/components/shared/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="What We Do"
          title="Professional Financial Services Under One Roof"
          description="From daily bookkeeping to audit documentation and tax compliance, our service coverage is built for practical business needs."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
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
