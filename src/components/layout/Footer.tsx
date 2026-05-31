import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              NexGen
            </h3>

            <p className="mt-4 text-sm leading-relaxed">
              Professional Accounting, Audit, Taxation,
              Compliance and Advisory services helping
              businesses grow with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white">
              Services
            </h4>

            <ul className="mt-4 space-y-3 text-sm">
              <li>Accounting & Bookkeeping</li>
              <li>GST Compliance</li>
              <li>TDS Filing</li>
              <li>Income Tax</li>
              <li>Audit Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white">
              Contact
            </h4>

            <ul className="mt-4 space-y-3 text-sm">
              <li>Delhi NCR, India</li>
              <li>contact@nexgen.com</li>
              <li>+91 XXXXX XXXXX</li>
              <li>Mon - Fri : 9:30 AM - 6:30 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} NexGen Accounting
          Associates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}