
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

const relatedPolicies = [
  { href: "/terms", label: "Terms and Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export default function AcceptableUsePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b18] text-white">
      {/* Hero */}
      <section className="relative isolate border-b border-white/10 bg-[#080e20]">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-32 -top-40 h-[440px] w-[440px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute -bottom-40 left-0 h-[350px] w-[350px] rounded-full bg-violet-600/15 blur-[110px]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
              <ShieldCheck size={16} />
              Responsible hosting
            </span>

            <h1 className="mt-7 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Acceptable Use{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              These guidelines help keep ShrotiHost services secure,
              reliable, and lawful for everyone sharing the network.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Last updated: August 2026
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Network and security guidelines
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Policy content */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-8 lg:grid-cols-[260px_1fr] lg:gap-12 lg:px-12 lg:py-20">
        {/* Sidebar */}
        <aside className="h-fit rounded-2xl border border-white/10 bg-gradient-to-br from-[#14203a] to-[#0d1529] p-6 lg:sticky lg:top-24">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-cyan-300">
              <ShieldCheck size={20} />
            </div>
            <h2 className="font-semibold text-white">
              Related policies
            </h2>
          </div>

          <nav className="mt-6 flex flex-col gap-2 text-sm">
            {relatedPolicies.map((policy) => (
              <Link
                key={policy.href}
                href={policy.href}
                className="rounded-lg px-3 py-2.5 text-slate-400 transition hover:bg-white/5 hover:text-cyan-300"
              >
                {policy.label}
              </Link>
            ))}

            <Link
              href="/acceptable-use"
              className="rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-2.5 font-semibold text-cyan-300"
            >
              Acceptable Use Policy
            </Link>
          </nav>

          <div className="mt-7 border-t border-white/10 pt-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-white">
              <Headphones size={17} className="text-cyan-300" />
              Report an issue
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Contact support to report abuse or ask about these rules.
            </p>

            <a
              href="mailto:support@shrotihost.in?subject=Abuse%20Report"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-blue-300"
            >
              Contact support
              <ArrowRight size={15} />
            </a>
          </div>
        </aside>

        {/* Main policy */}
        <div className="min-w-0">
          {/* Notice */}
          <div className="rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-500/10 to-violet-500/10 p-6 sm:p-7">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-cyan-300">
                <FileWarning size={22} />
              </div>

              <p className="text-sm leading-7 text-slate-300">
                This policy applies to shared, WordPress, unlimited,
                and all reseller hosting tiers. Resellers are
                responsible for ensuring that their own customers
                follow these requirements.
              </p>
            </div>
          </div>

          {/* Sections */}
          <div className="mt-10 space-y-5">
            {sections.map((section, index) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#121d35] to-[#0c1428] p-6 transition duration-300 hover:border-blue-400/20 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/10 text-cyan-300">
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h2 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                          {section.title}
                        </h2>

                        <span className="text-xs font-semibold tracking-widest text-slate-600">
                          SECTION {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="mt-5 space-y-4">
                        {section.paragraphs.map((paragraph, paragraphIndex) => (
                          <p
                            key={paragraph}
                            className={`text-sm leading-7 sm:text-base ${
                              paragraphIndex === 0
                                ? "text-slate-300"
                                : "text-slate-400"
                            }`}
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
          <section className="mt-8 rounded-2xl border border-blue-400/20 bg-gradient-to-br from-[#14264a] via-[#111c38] to-[#17112f] p-7 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-300/20 bg-blue-400/10 text-cyan-300">
              <Headphones size={23} />
            </div>

            <h2 className="mt-6 text-2xl font-bold text-white">
              9. Contact
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              For questions about this policy or to report an abuse
              issue, contact ShrotiHost through these channels:
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <a
                href="mailto:support@shrotihost.in"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-white/10"
              >
                <Mail size={19} className="shrink-0 text-cyan-300" />
                <span className="break-all">support@shrotihost.in</span>
              </a>

              <a
                href="https://wa.me/919582129099"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-white/10"
              >
                <Headphones size={19} className="shrink-0 text-cyan-300" />
                <span>+91 95821 29099</span>
              </a>

              <a
                href="https://portal.shrotihost.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-white/10"
              >
                <ShieldCheck size={19} className="shrink-0 text-cyan-300" />
                <span>Customer portal</span>
              </a>
            </div>
          </section>
        </div>
      </section>

      {/* Related information */}
      <section className="border-t border-white/10 bg-[#0a1021]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-bold text-white">
            Related information
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Review the other policies that govern ShrotiHost services.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {relatedPolicies.map((policy) => (
              <Link
                key={policy.href}
                href={policy.href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-blue-400/40 hover:text-cyan-300"
              >
                {policy.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
