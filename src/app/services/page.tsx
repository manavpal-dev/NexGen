import PageHero from "@/components/shared/PageHero";
import ServiceGrid from "@/components/services/ServiceGrid";
import ProcessSection from "@/components/services/ProcessSection";
import IndustriesSection from "@/components/services/IndustriesSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Professional Financial Solutions"
        title="Accounting & Compliance Services"
        description="Comprehensive accounting, taxation, audit, and advisory services designed for modern businesses."
      />

      <ServiceGrid />

      <ProcessSection />

      <IndustriesSection />

      <ContactCTA />
    </>
  );
}
