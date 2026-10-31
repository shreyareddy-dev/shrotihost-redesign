
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CreditCard,
  FileText,
  Headphones,
  LockKeyhole,
  RefreshCw,
  Server,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | ShrotiHost",
  description:
    "Read the terms governing ShrotiHost hosting, domain registration, accounts, payments, and services.",
};

const sections = [
  {
    icon: FileText,
    title: "1. Acceptance of these terms",
    content: [
      "These Terms of Service govern your use of ShrotiHost services. By creating an account, placing an order, or using a service, you agree to these terms and the related Acceptable Use Policy, Privacy Policy, and Refund Policy.",
      "If you do not agree with these terms, please do not purchase or use the services.",
    ],
  },
  {
    icon: Server,
    title: "2. Services provided",
    content: [
      "ShrotiHost provides web hosting and domain-related services, including shared hosting, WordPress hosting, unlimited hosting, reseller hosting, master reseller hosting, alpha reseller hosting, and domain name registration.",
      "Available features, resource allocations, pricing, and billing periods are described on the relevant service and plan pages and confirmed during ordering.",
    ],
  },
  {
    icon: UserCheck,
    title: "3. Account registration",
    content: [
      "You must provide accurate and up-to-date contact and billing information when registering. You are responsible for maintaining the security of your login credentials and for activity carried out through your account.",
      "You must be at least 18 years old or use the services under the supervision of a parent or legal guardian who accepts these terms.",
    ],
  },
  {
    icon: CreditCard,
    title: "4. Payments and billing",
    content: [
      "Billing and invoices are handled through the ShrotiHost customer portal. Services are generally billed in advance for the billing period selected during checkout.",
      "Invoices must be paid by their stated due dates. Overdue services may be suspended, and continued non-payment may result in termination and deletion of service data after reasonable notice.",
      "Applicable taxes are calculated at checkout. The available payment methods are displayed in the customer portal.",
      "If you have a payment concern, please contact support before initiating a chargeback or payment reversal.",
    ],
  },
  {
    icon: RefreshCw,
    title: "5. Service activation and delivery",
    content: [
      "Hosting orders are generally activated after payment confirmation. Some orders may require additional manual verification or fraud review.",
      "Domain registrations are submitted to the relevant registry after payment and are subject to registry processing and availability.",
      "Activation times may vary depending on verification requirements, registry processing, or other operational circumstances.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "6. Fair use of unmetered resources",
    content: [
      "Where a plan is described as unlimited or unmetered, it means that usage is not billed per unit of storage or bandwidth. It does not mean that shared infrastructure provides infinite resources.",
      "Resources must be used for normal website hosting. Accounts that consistently consume resources in ways that affect other customers may be asked to reduce usage, upgrade, or move to a more suitable service.",
      "Examples include using a hosting account primarily for file storage, backup dumps, or media streaming rather than website hosting.",
    ],
  },
  {
    icon: LockKeyhole,
    title: "7. Your responsibilities",
    content: [
      "You are responsible for the content, files, applications, and data hosted under your account.",
      "Keep your website software, content management systems, themes, and plugins updated. Use strong passwords and take appropriate security precautions.",
      "You should maintain your own off-server backups of important information. Resellers are responsible for ensuring that their customers comply with the applicable policies.",
    ],
  },
  {
    icon: Server,
    title: "8. Service availability and maintenance",
    content: [
      "ShrotiHost aims to maintain stable services and may perform maintenance when required. Advance notice will be provided where practical.",
      "No hosting service can guarantee uninterrupted availability. Any uptime figure displayed on a service page is a target unless a separate written agreement expressly states otherwise.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "9. Suspension and termination",
    content: [
      "Services may be suspended or terminated for non-payment, violations of these Terms or the Acceptable Use Policy, legal requirements, or security threats to the network.",
      "Where practical, customers will be notified and given an opportunity to address an issue before action is taken. Urgent security or legal situations may require immediate action.",
      "Customers may request cancellation through the customer portal. The effective date depends on the cancellation option selected and the applicable service terms.",
    ],
  },
  {
    icon: FileText,
    title: "10. Limitation of liability",
    content: [
      "To the maximum extent permitted by applicable law, ShrotiHost is not liable for indirect or consequential losses, including lost profits, lost data, or business interruption.",
      "The limitation of liability and any applicable exceptions are subject to the governing law and the specific terms of the service purchased.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "11. Governing law",
    content: [
      "These terms are governed by the laws of India. Disputes will be subject to the jurisdiction of the competent courts in India.",
    ],
  },
  {
    icon: RefreshCw,
    title: "12. Changes to these terms",
    content: [
      "ShrotiHost may update these terms from time to time. Significant changes may be communicated by email or through the customer portal.",
      "Continued use of the services after updated terms take effect constitutes acceptance of the revised terms, subject to applicable law.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b18] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#080e20]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              <FileText size={16} />
              Legal information
            </span>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Terms and Conditions
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Please read these terms carefully before purchasing or
              using ShrotiHost services. They explain the responsibilities
              and conditions that apply to your account and services.
            </p>

            <p className="mt-6 text-sm text-slate-400">
              Last updated: August 2026
            </p>
          </div>
        </div>
      </section>

      {/* Policy content */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-[260px_1fr] lg:px-12">
        {/* Sidebar */}
        <aside className="h-fit rounded-2xl border border-white/10 bg-gradient-to-br from-[#14203a] to-[#0d1529] p-6 lg:sticky lg:top-24">
          <h2 className="font-semibold text-white">
            Related policies
          </h2>

          <nav className="mt-5 flex flex-col gap-4 text-sm">
            <Link
              href="/terms"
              className="font-semibold text-cyan-300"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-slate-400 transition hover:text-cyan-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund-policy"
              className="text-slate-400 transition hover:text-cyan-300"
            >
              Refund Policy
            </Link>
            <Link
              href="/acceptable-use"
              className="text-slate-400 transition hover:text-cyan-300"
            >
              Acceptable Use Policy
            </Link>
          </nav>

          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Headphones size={17} className="text-blue-400" />
              Need clarification?
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Contact our team if you have questions about these terms.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-cyan-300"
            >
              Contact support
              <ArrowRight size={15} />
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <div className="min-w-0">
          <div className="rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-violet-500/5 p-6">
            <p className="text-sm leading-7 text-slate-300">
              These terms apply to ShrotiHost services and should be
              read together with the relevant service description,
              order details, and related policies.
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.title}
                  className="scroll-mt-24 border-b border-white/10 pb-9 last:border-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/15 text-blue-300">
                      <Icon size={20} />
                    </div>

                    <div className="min-w-0">
                      <h2 className="text-xl font-bold tracking-tight text-white">
                        {section.title}
                      </h2>

                      <div className="mt-4 space-y-4">
                        {section.content.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-sm leading-7 text-slate-400 sm:text-base"
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

          {/* Contact */}
          <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-br from-[#14203a] to-[#0d1529] p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white">
              13. Contact
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-400">
              For questions about these Terms of Service, contact
              ShrotiHost using the following channels:
            </p>

            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-white">Email: </span>
                <a
                  href="mailto:support@shrotihost.in"
                  className="text-blue-400 transition hover:text-cyan-300 hover:underline"
                >
                  support@shrotihost.in
                </a>
              </p>

              <p>
                <span className="font-semibold text-white">WhatsApp: </span>
                <a
                  href="https://wa.me/919582129099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 transition hover:text-cyan-300 hover:underline"
                >
                  +91 95821 29099
                </a>
              </p>

              <p>
                <span className="font-semibold text-white">Customer portal: </span>
                <a
                  href="https://portal.shrotihost.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 transition hover:text-cyan-300 hover:underline"
                >
                  portal.shrotihost.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
