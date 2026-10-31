
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Server,
  ShieldCheck,
  Gauge,
  Database,
  Globe,
  Mail,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shared Hosting",
  description:
    "Compare Shroti Host shared hosting plans, features and resources.",
};

const plans = [
  {
    name: "Launch",
    tagline: "Start something great.",
    price: "49",
    cpu: "1 Core",
    ram: "1.5 GB",
    storage: "10 GB",
    websites: "1",
    email: "5",
    popular: false,
    domain: "",
    features: [
      "Free SSL certificate",
      "Free website migration",
      "Daily backups",
      "cPanel + Softaculous",
      "Managed WordPress + LiteSpeed Cache",
      "MySQL, phpMyAdmin and Cron Jobs",
      "DDoS and Imunify360 protection",
      "Instant activation and 24/7 support",
    ],
  },
  {
    name: "Grow",
    tagline: "Everything your growing website needs.",
    price: "79",
    cpu: "1.5 Cores",
    ram: "2 GB",
    storage: "50 GB",
    websites: "5",
    email: "25",
    popular: true,
    domain: "",
    features: [
      "Everything in Launch",
      "Git version control",
      "Node.js and Python apps",
      "JetBackup self-restore",
      "WordPress Management and AccelerateWP",
      "Website builders",
      "Advanced PHP configuration",
    ],
  },
  {
    name: "Turbo",
    tagline: "More power for growing websites.",
    price: "149",
    cpu: "2 Cores",
    ram: "3 GB",
    storage: "100 GB",
    websites: "10",
    email: "50",
    popular: false,
    domain: "Free .in domain on eligible yearly billing",
    features: [
      "Everything in Grow",
      "SSH and terminal access",
      "Redis object cache",
      "Team and user management",
      "RubyGems, Perl and PEAR modules",
      "Dynamic DNS",
      "DNSSEC and ModSecurity control",
    ],
  },
  {
    name: "Infinity",
    tagline: "Maximum shared-hosting power.",
    price: "249",
    cpu: "3 Cores",
    ram: "4 GB",
    storage: "250 GB",
    websites: "25",
    email: "Unlimited",
    popular: false,
    domain: "Free .com or .in domain on eligible yearly billing",
    features: [
      "Everything in Turbo",
      "PGP email encryption",
      "Manual SSL installation",
      "Unlimited mailboxes",
      "Full cPanel feature access",
    ],
  },
];

const comparison = [
  ["Websites", "1", "5", "10", "25"],
  ["NVMe storage", "10 GB", "50 GB", "100 GB", "250 GB"],
  ["CPU allocation", "1 Core", "1.5 Cores", "2 Cores", "3 Cores"],
  ["RAM allocation", "1.5 GB", "2 GB", "3 GB", "4 GB"],
  ["Email mailboxes", "5", "25", "50", "Unlimited"],
  ["Bandwidth", "Unmetered", "Unmetered", "Unmetered", "Unmetered"],
  ["I/O speed", "5 MB/s", "10 MB/s", "15 MB/s", "20 MB/s"],
  ["IOPS", "1,024", "1,536", "2,048", "3,072"],
  ["Entry processes", "20", "30", "40", "60"],
  ["Processes (NPROC)", "40", "60", "100", "150"],
  ["Email sending", "100/hour", "250/hour", "500/hour", "1,000/hour"],
];

const included = [
  {
    icon: ShieldCheck,
    title: "Free SSL certificates",
    description:
      "SSL certificates are included across all shared hosting plans.",
  },
  {
    icon: Database,
    title: "Daily backups",
    description:
      "Daily backups are included. JetBackup self-restore is available from Grow upward.",
  },
  {
    icon: Gauge,
    title: "LiteSpeed + LSCache",
    description: "LiteSpeed web server and LiteSpeed Cache support.",
  },
  {
    icon: Server,
    title: "cPanel + Softaculous",
    description:
      "Manage your hosting account and install supported applications.",
  },
  {
    icon: Globe,
    title: "Free website migration",
    description:
      "Website migration is included with every shared hosting plan.",
  },
  {
    icon: Mail,
    title: "Email on your domain",
    description:
      "Create domain-based email accounts within your plan's allocation.",
  },
];

const faqs = [
  {
    question: "What is shared hosting?",
    answer:
      "Shared hosting lets you host a website on a server shared with other hosting accounts. Shroti Host plans include NVMe storage, allocated CPU and RAM resources, cPanel and website management features.",
  },
  {
    question: "Which shared hosting plan should I choose?",
    answer:
      "Launch is suitable for one website. Grow supports up to five websites, Turbo supports up to ten, and Infinity supports up to twenty-five websites. Compare the allocated CPU, RAM, storage and email accounts before choosing.",
  },
  {
    question: "Are SSL certificates included?",
    answer:
      "Yes. Free SSL certificates are included across all four shared hosting plans.",
  },
  {
    question: "Are website backups included?",
    answer:
      "Daily backups are included across all shared hosting plans. JetBackup self-restore is available from the Grow plan upward.",
  },
  {
    question: "Can you migrate my existing website?",
    answer:
      "Yes. Free website migration is included with every shared hosting plan.",
  },
  {
    question: "Can I host WordPress websites?",
    answer:
      "Yes. The plans include managed WordPress support, LiteSpeed Cache and Softaculous for supported one-click application installations.",
  },
  {
    question: "Do the plans include a free domain?",
    answer:
      "Eligible annual Turbo plans include a .in domain for the first year. Eligible annual Infinity plans include a .com or .in domain for the first year. Premium domains and renewal charges are excluded.",
  },
  {
    question: "Is bandwidth unlimited?",
    answer:
      "The plans advertise unmetered bandwidth. This does not mean unlimited server resources; usage remains subject to the provider's fair-use policy and service terms.",
  },
  {
    question: "What happens when my hosting plan renews?",
    answer:
      "The published monthly plan price is stated to remain the same on renewal for the corresponding billing cycle. Taxes and applicable domain renewal charges are separate.",
  },
  {
    question: "Does shared hosting have a money-back guarantee?",
    answer:
      "The official shared hosting page advertises a 7-day money-back guarantee. Please review the refund policy for eligibility and exclusions.",
  },
];

const terms = [
  {
    title: "Unmetered bandwidth",
    content:
      "Unmetered does not mean unlimited server resources. Shared hosting usage remains subject to the provider's fair-use policy and service terms.",
  },
  {
    title: "Free domain eligibility",
    content:
      "Eligible annual Turbo plans include a .in domain for the first year. Eligible annual Infinity plans include a .com or .in domain for the first year. Premium domains are excluded and domain renewals are charged separately. Confirm eligibility and conditions before ordering.",
  },
  {
    title: "Renewal pricing",
    content:
      "The published monthly plan price is stated to remain the same on renewal for the corresponding billing cycle. Taxes and applicable domain renewal charges are separate.",
  },
  {
    title: "Money-back guarantee",
    content:
      "The official shared hosting page advertises a 7-day money-back guarantee. Review the official refund policy for eligibility and exclusions before ordering.",
  },
];

export default function SharedHostingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#050B20] py-16 text-white sm:py-24 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:size-[28rem] before:rounded-full before:bg-blue-600/25 before:blur-[120px] after:pointer-events-none after:absolute after:-right-40 after:top-20 after:size-[30rem] after:rounded-full after:bg-violet-600/20 after:blur-[130px]">
        <div className="container-shell relative z-10 w-full min-w-0">
          <div className="w-full min-w-0 max-w-3xl">
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-blue-300">
              <Server size={18} className="shrink-0" />
              HOSTING SOLUTIONS
            </div>

            <h1 className="break-words text-4xl font-extrabold tracking-tight sm:text-6xl">
              Shared Hosting{" "}
              <span className="text-blue-400">for your website.</span>
            </h1>

            <p className="mt-6 w-full max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Start your website with NVMe storage, LiteSpeed technology
              and hosting resources allocated to your plan. Compare all
              four options and find the right fit for your project.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#plans"
                className="primary-button w-full justify-center sm:w-auto"
              >
                Compare plans <ArrowRight size={18} />
              </a>

              <Link
                href="/contact"
                className="secondary-button w-full justify-center sm:w-auto"
              >
                Contact us
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-4 text-xs text-slate-300 sm:mt-10 sm:flex sm:flex-wrap sm:gap-x-7 sm:gap-y-3 sm:text-sm">
              {[
                "NVMe storage",
                "Free SSL",
                "Daily backups",
                "Free migration",
              ].map((item) => (
                <span key={item} className="flex min-w-0 items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="shrink-0 text-cyan-400"
                  />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="plans"
        className="section-spacing overflow-hidden bg-[#0B1530] text-white"
      >
        <div className="container-shell w-full min-w-0">
          <div className="section-heading">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-cyan-400">
              SIMPLE, TRANSPARENT PRICING
            </p>

            <h2 className="text-white">
              Choose the hosting plan that fits
            </h2>

            <p className="text-slate-300">
              From a first website to multiple growing projects, compare
              the resources and features available at every level.
            </p>
          </div>

          <div className="mt-10 grid min-w-0 grid-cols-1 items-stretch gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-[#172747] to-[#101D38] p-5 text-white shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 sm:p-6 sm:hover:-translate-y-2 ${
                  plan.popular
                    ? "border-cyan-400 ring-2 ring-cyan-400/20 shadow-cyan-500/10"
                    : "border-white/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute right-0 top-0 rounded-bl-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-2 text-[10px] font-extrabold text-[#07152B] sm:px-4 sm:text-xs">
                    MOST POPULAR
                  </span>
                )}

                <div className="mb-5 min-w-0">
                  <h3 className="text-xl font-extrabold text-white">
                    {plan.name}
                  </h3>

                  <p className="mt-2 min-h-10 text-sm leading-6 text-slate-300">
                    {plan.tagline}
                  </p>
                </div>

                <div className="border-b border-white/10 pb-5">
                  <div className="flex min-w-0 flex-wrap items-baseline gap-x-1">
                    <span className="text-2xl font-bold text-cyan-300">
                      ₹
                    </span>

                    <span className="text-5xl font-extrabold tracking-tight text-white">
                      {plan.price}
                    </span>

                    <span className="text-sm text-slate-400">
                      /month
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-400">
                    Billed monthly · Excluding taxes
                  </p>

                  <p className="mt-1 text-xs font-semibold text-emerald-300">
                    Same price on renewal
                  </p>
                </div>

                <div className="my-5 grid min-w-0 grid-cols-2 gap-2.5 sm:gap-3">
                  {[
                    ["CPU", plan.cpu],
                    ["RAM", plan.ram],
                    ["Storage", plan.storage],
                    ["Websites", plan.websites],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="min-w-0 rounded-xl border border-white/10 bg-[#0A142B] p-3"
                    >
                      <p className="text-xs text-slate-400">{label}</p>

                      <p className="mt-1 break-words text-sm font-bold text-white sm:text-base">
                        {value}
                      </p>

                      {label === "Storage" && (
                        <p className="text-xs text-slate-400">NVMe</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mb-5 flex min-w-0 items-center justify-between gap-3 text-sm">
                  <span className="text-slate-400">Email accounts</span>
                  <span className="text-right font-semibold text-white">
                    {plan.email}
                  </span>
                </div>

                {plan.domain && (
                  <div className="mb-5 flex items-start gap-1 rounded-lg border border-cyan-400/20 bg-cyan-400/10 p-3 text-xs font-semibold leading-5 text-cyan-200">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0" />
                    <span>{plan.domain}</span>
                  </div>
                )}

                <div className="mb-6 flex-1 border-t border-white/10 pt-5">
                  <p className="mb-4 text-sm font-bold text-white">
                    Plan features
                  </p>

                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex min-w-0 gap-2 text-sm leading-5 text-slate-300"
                      >
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-cyan-300"
                        />
                        <span className="min-w-0 break-words">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`mt-auto flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-xl px-3 py-3.5 text-center text-sm font-bold transition sm:px-5 ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-[#061126] shadow-lg shadow-blue-500/20 hover:from-cyan-300 hover:to-blue-400"
                      : "border border-white/20 bg-white/5 text-white hover:border-cyan-300/50 hover:bg-white/10"
                  }`}
                >
                  <span>Enquire about {plan.name}</span>
                  <ArrowRight size={17} className="shrink-0" />
                </Link>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-400">
            Prices shown are monthly prices excluding taxes. Annual billing
            options and their prices should be reviewed on the official
            ordering portal before purchase. All plans renew at the listed
            price for the corresponding billing cycle.
          </p>
        </div>
      </section>

      {/* INCLUDED FEATURES */}
      <section className="section-spacing overflow-hidden bg-[#071126] text-white">
        <div className="container-shell w-full min-w-0">
          <div className="section-heading">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-cyan-400">
              INCLUDED ACROSS ALL PLANS
            </p>

            <h2 className="text-white">
              The essentials are already covered
            </h2>

            <p className="text-slate-300">
              Shared hosting features available across the four plans.
            </p>
          </div>

          <div className="mt-12 grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="min-w-0 rounded-2xl border border-white/10 bg-gradient-to-br from-[#172747] to-[#101B34] p-5 shadow-xl shadow-black/10 transition duration-300 hover:border-cyan-300/30 hover:shadow-cyan-900/20 sm:p-6 sm:hover:-translate-y-1"
                >
                  <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-300">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section-spacing overflow-hidden bg-[#0B1530] text-white">
        <div className="container-shell w-full min-w-0">
          <div className="section-heading">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-cyan-400">
              SIDE-BY-SIDE COMPARISON
            </p>

            <h2 className="text-white">Every spec, in the open</h2>

            <p className="text-slate-300">
              Compare the published resource allocations across all four
              shared hosting plans.
            </p>
          </div>

          <div className="mt-12 min-w-0 max-w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111F3B] shadow-2xl shadow-black/20">
            <div className="max-w-full overflow-x-auto overscroll-x-contain">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm text-slate-200">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 text-white">
                    <th className="px-6 py-5 font-semibold">
                      Specification
                    </th>

                    {plans.map((plan) => (
                      <th
                        key={plan.name}
                        className="px-5 py-5 font-semibold"
                      >
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {comparison.map((row, index) => (
                    <tr
                      key={row[0]}
                      className={
                        index % 2 === 0
                          ? "bg-[#142442]"
                          : "bg-[#101D36]"
                      }
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={`${row[0]}-${cellIndex}`}
                          className={`border-b border-white/10 px-6 py-4 ${
                            cellIndex === 0
                              ? "font-semibold text-white"
                              : "text-slate-300"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="border-t border-white/10 px-5 py-4 text-xs leading-5 text-slate-400 sm:px-6">
              Resource allocations and limits are based on the published
              shared hosting specifications.
            </p>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="section-spacing overflow-hidden bg-[#0B1530] text-white">
        <div className="container-shell w-full min-w-0">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10">
              <p className="mb-3 text-sm font-bold tracking-[0.2em] text-cyan-400">
                SHARED HOSTING FAQ
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Frequently asked questions
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Answers to common questions about shared hosting plans,
                features, migration and billing.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group min-w-0 rounded-2xl border border-blue-400/25 bg-[#172747] p-5 transition hover:border-cyan-400/50 open:border-cyan-400/50 sm:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-white">
                    <span>{faq.question}</span>

                    <ChevronDown
                      size={21}
                      className="shrink-0 text-cyan-400 transition-transform group-open:rotate-180"
                    />
                  </summary>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COLLAPSIBLE TERMS */}
      <section className="section-spacing overflow-hidden bg-[#071126] text-white">
        <div className="container-shell w-full min-w-0">
          <div className="mx-auto max-w-4xl">
            <div className="mb-9">
              <p className="mb-3 text-sm font-bold tracking-[0.2em] text-cyan-400">
                BEFORE YOU ORDER
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Important plan information
              </h2>

              <p className="mt-3 text-slate-300">
                Find details about usage, billing, domain eligibility and refunds.
              </p>
            </div>

            <div className="space-y-3">
              {terms.map((term) => (
                <details
                  key={term.title}
                  className="group min-w-0 rounded-xl border border-white/10 bg-[#13213D] p-4 transition hover:border-cyan-300/30 open:border-cyan-300/30 open:bg-[#192B4D] sm:p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-white">
                    <span>{term.title}</span>

                    <ChevronDown
                      size={20}
                      className="shrink-0 text-cyan-300 transition-transform group-open:rotate-180"
                    />
                  </summary>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                    {term.content}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-cyan-300 hover:text-cyan-200"
              >
                Have questions? Contact the team
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 py-14 text-white sm:py-16">
        <div className="container-shell flex w-full min-w-0 flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div className="min-w-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to get your website online?
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-blue-100">
              Explore the available hosting options or contact the team
              if you need help choosing a plan.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold !text-blue-700 transition hover:bg-blue-50 sm:w-auto"
          >
            Talk to the team
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
