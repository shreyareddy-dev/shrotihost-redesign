
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Ban,
  Copyright,
  FileWarning,
  Headphones,
  Mail,
  Network,
  Scale,
  Server,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Acceptable Use Policy | ShrotiHost",
  description:
    "Read ShrotiHost's acceptable use rules for hosting, email, security, and network resources.",
};

const sections = [
  {
    icon: Ban,
    title: "1. Prohibited content",
    paragraphs: [
      "You may not host or link to content that is illegal under Indian law, including child sexual abuse material, content promoting terrorism or violence, or material that violates the Information Technology Act, 2000.",
      "Pirated software, cracked licenses, warez, and copyrighted media distributed without permission are prohibited.",
      "Content facilitating fraud, including fake shops, counterfeit-goods stores, and investment scams, is not permitted.",
      "Gambling or betting content is prohibited where it is unlawful under applicable law.",
    ],
  },
  {
    icon: Mail,
    title: "2. Spam and email limits",
    paragraphs: [
      "Sending unsolicited bulk email from the ShrotiHost network is prohibited. Advertising a website hosted with ShrotiHost through spam sent from another network is also prohibited.",
      "Mailing lists must be opt-in and include working unsubscribe links.",
      "Hourly outbound email limits apply to each account to protect server IP reputation. Customers requiring high-volume newsletters or transactional email should use a dedicated email service.",
    ],
  },
  {
    icon: ShieldAlert,
    title: "3. Malware, phishing, and security abuse",
    paragraphs: [
      "You may not host malware, viruses, phishing pages, credential-harvesting forms, botnet command-and-control systems, or tools designed to attack other systems.",
      "Compromised accounts, including hacked websites distributing malware, may be suspended to protect other customers and the network.",
      "Where practical, affected customers will be notified and given information about what needs to be cleaned before service reactivation.",
    ],
  },
  {
    icon: Server,
    title: "4. Resource abuse",
    paragraphs: [
      "Shared infrastructure depends on reasonable resource usage. The following activities are not permitted on any hosting plan, including plans advertised as unlimited:",
      "Cryptocurrency mining or similar sustained CPU-intensive computation.",
      "Running open proxies, VPN endpoints, Tor exit nodes, or IRC servers and bots.",
      "Using hosting accounts primarily for file storage, backup dumps, or media streaming origins instead of websites.",
      "Running scripts that hold long-running processes, flood networks, or deliberately circumvent resource limits.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "5. Your security responsibilities",
    paragraphs: [
      "Keep your content management system, plugins, and themes updated.",
      "Use strong, unique passwords and remove unused installations.",
      "Accounts repeatedly compromised because of neglected software may be suspended until they are secured.",
      "You are responsible for the content and applications hosted under your account.",
    ],
  },
  {
    icon: Copyright,
    title: "6. Copyright complaints and takedowns",
    paragraphs: [
      "If you believe content hosted on the ShrotiHost network infringes your copyright, email support@shrotihost.in with the following information:",
      "Identification of the copyrighted work.",
      "The exact URL of the material alleged to be infringing.",
      "Your contact details.",
      "A good-faith statement that the use is not authorised by the copyright owner, its agent, or the law.",
      "Valid complaints are reviewed promptly. ShrotiHost may notify the account holder and remove or disable access to infringing material where the complaint is valid. Knowingly false complaints may carry legal consequences.",
    ],
  },
  {
    icon: Network,
    title: "7. Reporting abuse",
    paragraphs: [
      "To report spam, phishing, malware, or other abuse originating from the ShrotiHost network, contact support@shrotihost.in or WhatsApp +91 95821 29099.",
      "Include relevant URLs, email headers, logs, or other supporting information where available.",
      "Abuse reports are treated confidentially.",
    ],
  },
  {
    icon: Scale,
    title: "8. Enforcement",
    paragraphs: [
      "Depending on the severity of a violation, ShrotiHost may issue a warning and allow time to resolve the issue, suspend the offending website or account, or terminate the service immediately.",
      "Severe violations, including child sexual abuse material, phishing, or active attacks, may result in immediate termination.",
      "Where service is terminated for a serious violation, no refund is due under the published Refund Policy.",
      "Where required, ShrotiHost cooperates with Indian law-enforcement authorities.",
      "The policy aims to distinguish between deliberate abuse and customers who need help resolving a compromised website.",
    ],
  },
];

export default function AcceptableUsePage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              <ShieldCheck size={16} />
              Responsible hosting
            </span>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Acceptable Use Policy
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              These guidelines help keep ShrotiHost services secure,
              reliable, and lawful for everyone sharing the network.
            </p>

            <p className="mt-6 text-sm text-slate-400">
              Last updated: August 2026
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
            <Link
              href="/privacy"
              className="text-slate-600 hover:text-blue-600"
            >
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
              className="font-semibold text-blue-600"
            >
              Acceptable Use Policy
            </Link>
          </nav>

          <div className="mt-8 border-t border-slate-200 pt-6">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Headphones size={17} className="text-blue-600" />
              Report an issue
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Contact support to report abuse or ask about these rules.
            </p>
            <a
              href="mailto:support@shrotihost.in?subject=Abuse%20Report"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Contact support
              <ArrowRight size={15} />
            </a>
          </div>
        </aside>

        <div className="min-w-0">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <div className="flex items-start gap-3">
              <FileWarning
                size={22}
                className="mt-1 shrink-0 text-blue-600"
              />
              <p className="text-sm leading-7 text-slate-700">
                This policy applies to shared, WordPress, unlimited,
                and all reseller hosting tiers. Resellers are
                responsible for ensuring that their own customers
                follow these requirements.
              </p>
            </div>
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
            <h2 className="text-xl font-bold">9. Contact</h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              For questions about this policy or to report an abuse
              issue, contact ShrotiHost through these channels:
            </p>

            <div className="mt-5 space-y-4 text-sm">
              <a
                href="mailto:support@shrotihost.in"
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
                <ShieldCheck size={17} />
                Customer portal
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-bold">Related information</h2>
          <div className="mt-6 flex flex-wrap gap-5 text-sm font-semibold">
            <Link
              href="/terms"
              className="text-blue-600 hover:text-blue-700"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-blue-600 hover:text-blue-700"
            >
              Privacy Policy
            </Link>
            <Link
              href="/refund-policy"
              className="text-blue-600 hover:text-blue-700"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
