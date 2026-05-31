import PageHero from "@/components/shared/PageHero";
import ServiceGrid from "@/components/services/ServiceGrid";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Our Services"
        title="Professional Accounting Services"
        description="Comprehensive financial and compliance solutions."
      />

      <ServiceGrid />
    </>
  );
}