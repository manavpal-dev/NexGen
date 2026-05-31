import PageHero from "@/components/shared/PageHero";
// import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact Us"
        title="Let's Talk About Your Business"
        description="Reach out to our team for accounting, taxation, compliance, and advisory support."
      />

      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            {/* <ContactForm /> */}
          </div>

          <div className="rounded-3xl bg-slate-950 p-10 text-white">
            <h2 className="text-3xl font-bold">
              Get In Touch
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold text-yellow-400">
                  Email
                </h3>
                <p>contact@nexgen.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-yellow-400">
                  Phone
                </h3>
                <p>+91 XXXXX XXXXX</p>
              </div>

              <div>
                <h3 className="font-semibold text-yellow-400">
                  Office Hours
                </h3>
                <p>Mon - Fri: 9:30 AM - 6:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}