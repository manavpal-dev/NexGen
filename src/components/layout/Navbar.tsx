"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
        <Link href="/" className="flex flex-col" aria-label="NexGen home">
          <span className="text-xl font-bold text-slate-900">NexGen</span>
          <span className="text-xs tracking-widest text-yellow-600">
            ACCOUNTING ASSOCIATES
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium text-slate-700 transition hover:text-yellow-600"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-yellow-300"
          >
            Book Consultation
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-900 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="flex flex-col p-6">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-3 font-medium text-slate-700"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 px-5 py-3 font-semibold text-slate-950"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
