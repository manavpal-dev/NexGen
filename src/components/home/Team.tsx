import SectionHeading from "@/components/shared/SectionHeading";
import TeamCard from "@/components/team/TeamCard";
import { team } from "@/data/team";

export default function Team() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          subtitle="Meet Our Experts"
          title="Professionals Behind NexGen"
          description="Experienced accounting, audit, and taxation professionals dedicated to helping your business succeed."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}