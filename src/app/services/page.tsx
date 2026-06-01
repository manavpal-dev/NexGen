import type { Metadata } from "next";

import PageHero from "@/components/shared/PageHero";
import ServiceGrid from "@/components/services/ServiceGrid";
import ProcessSection from "@/components/services/ProcessSection";
import IndustriesSection from "@/components/services/IndustriesSection";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "Accounting & Compliance Services",
  description:
    "Explore NexGen Accounting Associates services including bookkeeping, GST registration and filing, TDS returns, income tax filing, financial statements, statutory audit support, IFC testing, tax audit support, ROC compliance, and business advisory.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Professional Financial Solutions"
        title="Accounting, Tax and Compliance Services"
        description="End-to-end finance support, from day-to-day bookkeeping to statutory audit documentation, tax compliance, ROC filings, and advisory."
      />

      <ServiceGrid />

      <ProcessSection />

      <IndustriesSection />

      <ContactCTA />
    </>
  );
}
