import type { Metadata } from "next";

import PageHero from "@/components/shared/PageHero";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import ContactCTA from "@/components/home/ContactCTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NexGen Accounting Associates, a Delhi NCR finance and accounting consultancy providing accounting, audit support, tax, GST, TDS, ROC, and advisory services.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Who We Are"
        title="About NexGen Accounting Associates"
        description="A professionally managed finance and accounting consultancy built to deliver precise, compliant, and value-driven financial support."
      />

      <MissionVision />

      <CoreValues />

      <ContactCTA />
    </>
  );
}
