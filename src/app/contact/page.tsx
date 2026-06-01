import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact NexGen Accounting Associates for accounting, GST, TDS, income tax, audit support, ROC compliance, and advisory services in Delhi NCR.",
  alternates: {
    canonical: "/contact",
  },
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "Use the enquiry form for current contact details",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Share your number and our team will respond",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Delhi NCR, India",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon - Fri: 9:30 AM - 6:30 PM, Sat: 10:00 AM - 2:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Let's Talk About Your Business"
        description="Reach out to our team for accounting, taxation, compliance, and advisory support."
      />

      <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <ContactForm />
          </div>

          <aside className="rounded-lg bg-slate-950 p-6 text-white shadow-xl sm:p-8 lg:p-10">
            <p className="font-semibold uppercase tracking-widest text-yellow-400">
              Get In Touch
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Clear guidance starts with a short conversation.
            </h2>

            <p className="mt-4 leading-relaxed text-slate-300">
              Tell us what you need help with. We will review your requirement
              and guide you on the right accounting, tax, compliance, or audit
              support path.
            </p>

            <div className="mt-8 space-y-5">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-yellow-400 text-slate-950">
                    <item.icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.label}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
