import PageHero from "@/components/shared/PageHero";
import TeamSection from "@/components/home/Team";
import ExpertiseSection from "@/components/team/ExpertiseSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function TeamPage() {
  return (
    <>
      <PageHero
        badge="Meet Our Professionals"
        title="Experienced Financial Experts"
        description="Dedicated professionals committed to helping businesses achieve compliance, accuracy, and growth."
      />

      <TeamSection />

      <ExpertiseSection />

      <ContactCTA />
    </>
  );
}
