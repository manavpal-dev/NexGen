"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold text-slate-900">NexGen</span>
          <span className="text-xs tracking-widest text-yellow-600">
            ACCOUNTING ASSOCIATES
          </span>
        </Link>

        {/* Desktop Menu */}
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

          <button className="rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-slate-900 transition hover:scale-105">
            Book Consultation
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
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

            <button className="mt-4 rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-slate-900">
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
