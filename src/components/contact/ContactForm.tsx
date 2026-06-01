"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    setLoading(true);

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        company: formData.get("company"),
        service: formData.get("service"),
        message: formData.get("message"),
      }),
    });

    setLoading(false);

    alert("Message Sent Successfully");
  }

  return (
  <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
    <div className="mb-8">
      <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
        Get In Touch
      </span>

      <h2 className="mt-4 text-3xl font-bold text-slate-900">
        Let&apos;s Discuss Your Business Needs
      </h2>

      <p className="mt-3 text-slate-600">
        Fill out the form below and our team will get back to you
        within 24 hours.
      </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Full Name
          </label>

          <input
            name="name"
            placeholder="John Doe"
            required
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-yellow-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>

          <input
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-yellow-500 focus:bg-white"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Phone Number
          </label>

          <input
            name="phone"
            placeholder="+91 9876543210"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-yellow-500 focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Company Name
          </label>

          <input
            name="company"
            placeholder="ABC Pvt Ltd"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-yellow-500 focus:bg-white"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Service Required
        </label>

        <select
          name="service"
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-yellow-500 focus:bg-white"
        >
          <option>Accounting & Bookkeeping</option>
          <option>GST Compliance</option>
          <option>TDS Filing</option>
          <option>Income Tax Returns</option>
          <option>Audit Support</option>
          <option>Business Advisory</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Message
        </label>

        <textarea
          name="message"
          rows={6}
          placeholder="Tell us about your requirements..."
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 outline-none transition focus:border-yellow-500 focus:bg-white"
        />
      </div>

      <button
        disabled={loading}
        className="w-full rounded-xl bg-yellow-500 py-4 font-semibold text-slate-900 transition hover:bg-yellow-400 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Schedule Consultation"}
      </button>
    </form>
  </div>
);
}
