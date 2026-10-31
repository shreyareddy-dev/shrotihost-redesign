
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Cookie,
  Database,
  FileText,
  Headphones,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | ShrotiHost",
  description:
    "Learn how ShrotiHost collects, uses, protects, and handles personal information.",
};

const sections = [
  {
    icon: Database,
    title: "1. Information we collect",
    paragraphs: [
      "Account and billing information: Your name, email address, phone number, billing address, and order or invoice history when you register or purchase through our customer portal.",
      "Payment information: Payments are processed by our payment providers. ShrotiHost does not store full card numbers.",
      "Support conversations: Tickets, emails, and WhatsApp messages you send to our team may be retained so we can resolve issues and refer to previous conversations.",
      "Technical and analytics information: IP addresses, browser type, pages visited, and standard server logs are collected for security, troubleshooting, and understanding website usage.",
      "Domain registration information: Registrant contact details required by domain registries when you register a domain through us.",
    ],
  },
  {
    icon: FileText,
    title: "2. How we use your information",
    paragraphs: [
      "We use personal information to create and manage accounts, provision services, process payments, issue invoices, and provide customer support.",
      "We may use it to send service-related notifications about renewals, maintenance, security issues, and changes affecting your account.",
      "We also use relevant technical information to prevent fraud and abuse, troubleshoot problems, and improve our website and services.",
      "We may send occasional promotional messages about our own services. You can opt out of marketing messages without affecting essential service communications.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "3. Data sharing",
    paragraphs: [
      "ShrotiHost does not sell or rent personal data.",
      "Information may be shared with service providers when necessary to deliver your services. These include payment processors, domain registrars and registries, and infrastructure providers.",
      "Information may also be disclosed to government or law-enforcement authorities when legally required.",
      "We aim to share only the information necessary for the relevant service or legal purpose.",
    ],
  },
  {
    icon: Cookie,
    title: "4. Cookies and analytics",
    paragraphs: [
      "Our website and customer portal use cookies to maintain login sessions and remember preferences such as theme and display currency.",
      "We use Google Analytics 4 to understand how visitors use our website. Analytics is configured for cross-domain measurement between shrotihost.in and portal.shrotihost.in.",
      "Analytics information is used to understand website usage and improve our services. It is not used to sell personal data.",
      "You can block or delete cookies through your browser settings or use a content blocker. Essential cookies may be required for the customer portal to function correctly.",
    ],
  },
  {
    icon: LockKeyhole,
    title: "5. Data security",
    paragraphs: [
      "ShrotiHost describes its security measures as including encrypted HTTPS connections, access controls limiting who can view customer information, and standard server hardening.",
      "No internet-based system can be guaranteed to be completely secure. If we become aware of a personal-data breach requiring notification, we will notify affected parties and relevant authorities as required by law.",
    ],
  },
  {
    icon: UserCheck,
    title: "6. Your privacy rights",
    paragraphs: [
      "Subject to applicable law, including India's Digital Personal Data Protection Act, 2023, you can request a summary of the personal data we hold about you.",
      "You can request correction or updating of inaccurate information and ask for erasure of data that we no longer need to retain.",
      "You can nominate another person to exercise your rights on your behalf and raise a grievance about how your personal data is handled.",
      "To make a request, email support@shrotihost.in or open a ticket through the customer portal. Unresolved grievances may be escalated through the applicable legal process.",
    ],
  },
  {
    icon: Database,
    title: "7. Data retention",
    paragraphs: [
      "Account and billing records are retained while your account is active and afterwards where required for tax and legal purposes.",
      "Server logs are rotated on a short cycle. Support conversations are retained so the team can refer to previous issues.",
      "Job applications and project enquiries submitted through the website are retained for 12 months after submission. You can request earlier deletion by emailing support@shrotihost.in.",
      "When information is no longer required, it is deleted or anonymised.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "8. Children's privacy",
    paragraphs: [
      "ShrotiHost services are not directed at children. We do not knowingly collect personal data from anyone under 18 without verifiable parental consent.",
    ],
  },
  {
    icon: FileText,
    title: "9. Changes to this policy",
    paragraphs: [
      "This Privacy Policy may be updated as our services or applicable laws change. Material changes will be announced by email or through the customer portal.",
      "Please review this page periodically to stay informed about how personal information is handled.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              <ShieldCheck size={16} />
              Your privacy matters
            </span>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Transparency matters when you trust a company with your
              information. This policy explains what ShrotiHost
              collects, how it is used, and the choices available to you.
            </p>

            <p className="mt-6 text-sm text-slate-400">
              Last updated: September 2026
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[260px_1fr] lg:px-12">
        <aside className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 lg:sticky lg:top-24">
          <h2 className="font-semibold">Related policies</h2>

          <nav className="mt-5 flex flex-col gap-4 text-sm">
            <Link
              href="/terms"
              className="text-slate-600 hover:text-blue-600"
            >
              Terms and Conditions
            </Link>
            <Link href="/privacy" className="font-semibold text-blue-600">
              Privacy Policy
            </Link>
            <Link
              href="/refund-policy"
              className="text-slate-600 hover:text-blue-600"
            >
              Refund Policy
            </Link>
            <Link
              href="/acceptable-use"
              className="text-slate-600 hover:text-blue-600"
            >
              Acceptable Use Policy
            </Link>
          </nav>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Headphones size={17} className="text-blue-600" />
              Privacy questions?
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Contact the support team for privacy-related requests.
            </p>
            <a
              href="mailto:support@shrotihost.in?subject=Privacy%20request"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Send a request
              <ArrowRight size={15} />
            </a>
          </div>
        </aside>

        <div className="min-w-0">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm leading-7 text-slate-700">
              ShrotiHost states that it collects information needed to
              operate its hosting services and does not sell personal
              data. This policy should be read together with the
              applicable service terms.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.title}
                  className="border-b border-slate-100 pb-9 last:border-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-xl font-bold tracking-tight">
                        {section.title}
                      </h2>

                      <div className="mt-4 space-y-4">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-sm leading-7 text-slate-600 sm:text-base"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>

          <div className="mt-4 rounded-2xl border border-slate-200 p-6 sm:p-8">
            <h2 className="text-xl font-bold">
              10. Contact for privacy requests
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              For questions, access requests, corrections, or other
              privacy-related concerns, use one of these official
              channels:
            </p>

            <div className="mt-5 space-y-4 text-sm">
              <a
                href="mailto:support@shrotihost.in?subject=Privacy%20request"
                className="flex items-center gap-3 text-blue-600 hover:underline"
              >
                <Mail size={17} />
                support@shrotihost.in
              </a>

              <a
                href="https://wa.me/919582129099"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-600 hover:underline"
              >
                <Headphones size={17} />
                +91 95821 29099
              </a>

              <a
                href="https://portal.shrotihost.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-600 hover:underline"
              >
                <LockKeyhole size={17} />
                Customer support portal
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
