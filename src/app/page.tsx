import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexGen Accounting Associates",
  description:
    "Professional accounting, taxation, audit support, GST, TDS, compliance, financial reporting, and advisory services for businesses in Delhi NCR.",
  alternates: {
    canonical: "/",
  },
};

import About from "@/components/home/About";
import ContactCTA from "@/components/home/ContactCTA";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Team from "@/components/home/Team";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
      <ContactCTA />
    </main>
  );
}
