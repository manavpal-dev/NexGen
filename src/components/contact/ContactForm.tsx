"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(e.currentTarget);

    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Thank you. Your enquiry has been submitted successfully.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "We could not send your enquiry right now. Please try again shortly.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl sm:p-8">
      <div className="mb-8">
        <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
          Get In Touch
        </span>

        <h2 className="mt-4 text-3xl font-bold text-slate-900">
          Let&apos;s Discuss Your Business Needs
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Fill out the form below and our team will get back to you with the
          right accounting, tax, audit, or compliance support.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Full Name
            </label>

            <input
              id="name"
              name="name"
              placeholder="Your full name"
              required
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-yellow-500 focus:bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-yellow-500 focus:bg-white"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              placeholder="+91 98765 43210"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-yellow-500 focus:bg-white"
            />
          </div>

          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Company Name
            </label>

            <input
              id="company"
              name="company"
              placeholder="Company or firm name"
              className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-yellow-500 focus:bg-white"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="service"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Service Required
          </label>

          <select
            id="service"
            name="service"
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-yellow-500 focus:bg-white"
          >
            <option>Accounting & Bookkeeping</option>
            <option>GST Registration & Compliance</option>
            <option>TDS Return Filing</option>
            <option>Income Tax Return Filing</option>
            <option>Financial Statement Preparation</option>
            <option>Statutory Audit Support</option>
            <option>IFC Testing</option>
            <option>Tax Audit Support</option>
            <option>ROC & Regulatory Compliance</option>
            <option>Business Advisory</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell us about your requirements..."
            required
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-yellow-500 focus:bg-white"
          />
        </div>

        {status && (
          <p
            className={`rounded-lg px-4 py-3 text-sm font-medium ${
              status.type === "success"
                ? "bg-emerald-50 text-emerald-700"
                : "bg-red-50 text-red-700"
            }`}
            role="status"
          >
            {status.message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-yellow-400 py-4 font-semibold text-slate-950 transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Sending..." : "Schedule Consultation"}
        </button>
      </form>
    </div>
  );
}
