import type { Metadata } from "next";

import PageHero from "@/components/shared/PageHero";
import TeamSection from "@/components/home/Team";
import ExpertiseSection from "@/components/team/ExpertiseSection";
import ContactCTA from "@/components/home/ContactCTA";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Accounting Team",
  description:
    "Meet the NexGen Accounting Associates founding partners with experience in CA articleship, corporate accounting, statutory audit support, GST, TDS, income tax, IFC testing, financial reporting, and ROC compliance.",
  keywords: [
    "NexGen Accounting Associates team",
    "accounting professionals",
    "GST experts",
    "tax consultants",
    "audit professionals",
    "business compliance team",
  ],
  openGraph: {
    title: "Our Accounting Team | NexGen Accounting Associates",
    description:
      "Meet the Delhi NCR accounting, audit, taxation, and compliance professionals helping businesses stay accurate, compliant, and growth-ready.",
    type: "website",
  },
};

export default function TeamPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "NexGen Accounting Associates",
    description:
      "Professionally managed finance and accounting consultancy offering accounting, audit support, taxation, compliance, and advisory services.",
    areaServed: "Delhi NCR, India",
    employee: team.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      description: member.description,
      address: member.location,
      knowsAbout: member.specialties,
      alumniOf: member.credentials,
    })),
    serviceType: [
      "Accounting",
      "Bookkeeping",
      "GST Compliance",
      "TDS Filing",
      "Income Tax",
      "Statutory Audit",
      "IFC Testing",
      "Tax Audit Support",
      "ROC Compliance",
      "Business Advisory",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        badge="Meet Our Professionals"
        title="Accounting Experts for Clearer Business Decisions"
        description="Meet the NexGen professionals who keep your books accurate, filings compliant, and financial decisions grounded in reliable numbers."
      />

      <TeamSection />

      <ExpertiseSection />

      <ContactCTA />
    </>
  );
}
