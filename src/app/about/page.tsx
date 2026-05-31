import PageHero from "@/components/shared/PageHero";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import ContactCTA from "@/components/home/ContactCTA";

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Who We Are"
        title="About NexGen Accounting Associates"
        description="Professional accounting, audit, taxation and compliance consultancy helping businesses grow with confidence."
      />

      <MissionVision />

      <CoreValues />

      <ContactCTA />
    </>
  );
}