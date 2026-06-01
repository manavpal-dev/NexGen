import {
  BarChart3,
  Building2,
  Calculator,
  ClipboardCheck,
  FileCheck2,
  Landmark,
  LineChart,
  ReceiptText,
  Scale,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  highlights?: string[];
};

const iconMap = {
  "Accounting & Bookkeeping": Calculator,
  "GST Registration & Compliance": ReceiptText,
  "TDS Return Filing": FileCheck2,
  "Income Tax Return Filing": Landmark,
  "Financial Statement Preparation": BarChart3,
  "Ledger Scrutiny & Reconciliation": WalletCards,
  "Statutory Audit Support": ClipboardCheck,
  "IFC Testing": ShieldCheck,
  "Tax Audit Support": Scale,
  "ROC & Regulatory Compliance": Building2,
  "Bank Reconciliation": FileCheck2,
  "Business Advisory": LineChart,
};

export default function ServiceCard({
  title,
  description,
  highlights = [],
}: ServiceCardProps) {
  const Icon = iconMap[title as keyof typeof iconMap] ?? Calculator;

  return (
    <article className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-yellow-300 hover:shadow-xl">
      <div className="grid h-12 w-12 place-items-center rounded-lg bg-yellow-100 text-yellow-700 transition group-hover:bg-yellow-400 group-hover:text-slate-950">
        <Icon size={23} aria-hidden="true" />
      </div>

      <h3 className="mt-6 text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 flex-1 leading-relaxed text-slate-600">
        {description}
      </p>

      {highlights.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
            >
              {highlight}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
