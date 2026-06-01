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
              Professional accounting, audit support, taxation, compliance, and
              advisory services helping businesses grow with confidence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white">
              Quick Links
            </h4>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link className="transition hover:text-yellow-300" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-yellow-300"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-yellow-300"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-yellow-300"
                  href="/team"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  className="transition hover:text-yellow-300"
                  href="/contact"
                >
                  Contact
                </Link>
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
              <li>GST Registration & Compliance</li>
              <li>TDS Return Filing</li>
              <li>Income Tax Return Filing</li>
              <li>Statutory Audit Support</li>
              <li>ROC Compliance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white">
              Contact
            </h4>

            <ul className="mt-4 space-y-3 text-sm">
              <li>Delhi NCR, India</li>
              <li>Use the enquiry form for current contact details</li>
              <li>Mon - Fri: 9:30 AM - 6:30 PM</li>
              <li>Saturday: 10:00 AM - 2:00 PM</li>
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
