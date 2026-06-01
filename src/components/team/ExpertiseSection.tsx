import {
  BarChart3,
  Building2,
  Calculator,
  ClipboardCheck,
  FileCheck2,
  Landmark,
  LineChart,
  ReceiptText,
} from "lucide-react";

const expertise = [
  {
    title: "Accounting & Bookkeeping",
    description: "Reliable day-to-day records, reconciliations, and ledgers.",
    icon: Calculator,
  },
  {
    title: "GST Compliance",
    description: "Return preparation, filing support, and compliance checks.",
    icon: ReceiptText,
  },
  {
    title: "TDS Filing",
    description: "Accurate deduction tracking, challans, and return filing.",
    icon: FileCheck2,
  },
  {
    title: "Income Tax",
    description: "Tax planning, documentation, and filing assistance.",
    icon: Landmark,
  },
  {
    title: "Statutory Audit",
    description: "Audit support focused on documentation and control clarity.",
    icon: ClipboardCheck,
  },
  {
    title: "Business Advisory",
    description: "Practical financial guidance for better business decisions.",
    icon: LineChart,
  },
  {
    title: "Financial Reporting",
    description: "Clear reports that make performance easier to understand.",
    icon: BarChart3,
  },
  {
    title: "ROC Compliance",
    description: "Company law filings and governance documentation support.",
    icon: Building2,
  },
];

export default function ExpertiseSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-widest text-yellow-600">
            What We Handle
          </p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
            Areas of Accounting and Compliance Expertise
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            From routine books to statutory filings, our team supports the
            financial work that keeps your business steady, compliant, and ready
            for review.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-yellow-300 hover:shadow-md"
            >
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-yellow-100 text-yellow-700">
                <item.icon size={21} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
