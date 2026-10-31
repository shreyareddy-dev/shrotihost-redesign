
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  Gauge,
  HardDrive,
  ShieldCheck,
  Zap,
  Globe,
  Server,
  Mail,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Unlimited Hosting | Shroti Host",
  description:
    "Explore unlimited hosting with unmetered storage and bandwidth, developer tools, security and daily backups.",
};

const plans = [
  {
    name: "Unlimited Solo",
    price: "199",
    cpu: "3 Cores",
    ram: "4 GB",
    sites: "1 Website",
    popular: false,
    accent: "from-blue-500 to-cyan-400",
    button:
      "border border-white/15 bg-white/5 text-white hover:border-cyan-300/50 hover:bg-white/10",
  },
  {
    name: "Unlimited Trio",
    price: "299",
    cpu: "4 Cores",
    ram: "5 GB",
    sites: "3 Websites",
    popular: true,
    accent: "from-violet-500 to-fuchsia-400",
    button:
      "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-950/30 hover:brightness-110",
  },
  {
    name: "Unlimited Pro",
    price: "399",
    cpu: "5 Cores",
    ram: "6 GB",
    sites: "5 Websites",
    popular: false,
    accent: "from-orange-500 to-amber-400",
    button:
      "border border-white/15 bg-white/5 text-white hover:border-orange-300/50 hover:bg-white/10",
  },
  {
    name: "Unlimited Infinity",
    price: "499",
    cpu: "6 Cores",
    ram: "8 GB",
    sites: "Unlimited",
    popular: false,
    accent: "from-emerald-500 to-teal-400",
    button:
      "border border-white/15 bg-white/5 text-white hover:border-emerald-300/50 hover:bg-white/10",
  },
];

const features = [
  {
    icon: HardDrive,
    title: "Unmetered storage",
    description: "Unmetered NVMe storage and bandwidth for your websites.",
    color: "text-cyan-300",
    bg: "bg-cyan-400/10",
  },
  {
    icon: Mail,
    title: "Unlimited email",
    description: "Unlimited email accounts and databases.",
    color: "text-violet-300",
    bg: "bg-violet-400/10",
  },
  {
    icon: Zap,
    title: "LiteSpeed technology",
    description: "LiteSpeed Web Server and caching support.",
    color: "text-orange-300",
    bg: "bg-orange-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Security protection",
    description: "CloudLinux account isolation and Imunify360 malware protection.",
    color: "text-emerald-300",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Database,
    title: "Daily backups",
    description: "Daily backups and self-service restore tools.",
    color: "text-blue-300",
    bg: "bg-blue-400/10",
  },
  {
    icon: Code2,
    title: "Developer tools",
    description: "Node.js, Python, Git version control and SSH access.",
    color: "text-pink-300",
    bg: "bg-pink-400/10",
  },
  {
    icon: Globe,
    title: "Free migration",
    description: "Free website migration to help move your existing website.",
    color: "text-teal-300",
    bg: "bg-teal-400/10",
  },
  {
    icon: Server,
    title: "cPanel and Softaculous",
    description: "Manage your hosting account and supported applications.",
    color: "text-indigo-300",
    bg: "bg-indigo-400/10",
  },
];

const faqs = [
  {
    q: "What does unlimited mean?",
    a: "Storage, bandwidth, mailboxes and databases are unmetered or unlimited at the account level, subject to the provider's acceptable-use policy. Website limits depend on the plan.",
  },
  {
    q: "Are CPU and RAM unlimited?",
    a: "No. Each plan has a defined allocation. CPU ranges from 3 to 6 cores and RAM from 4 GB to 8 GB.",
  },
  {
    q: "Can I host multiple websites?",
    a: "Yes. The plans support one, three, five or unlimited websites, depending on the plan you choose.",
  },
  {
    q: "Are backups included?",
    a: "Daily backups and self-service restore tools are included in the advertised feature set.",
  },
  {
    q: "Can I migrate my existing website?",
    a: "Free website migration is listed as an included feature. Contact support to coordinate the migration.",
  },
];

const resources = [
  ["CPU", "3 Cores", "4 Cores", "5 Cores", "6 Cores"],
  ["RAM", "4 GB", "5 GB", "6 GB", "8 GB"],
  ["Websites", "1", "3", "5", "Unlimited"],
  ["NVMe storage", "Unmetered", "Unmetered", "Unmetered", "Unmetered"],
  ["Bandwidth", "Unmetered", "Unmetered", "Unmetered", "Unmetered"],
  ["Email accounts", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
  ["Databases", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
];

export default function UnlimitedHostingPage() {
  return (
    <main className="overflow-hidden bg-[#070D20] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#070D20] py-24 sm:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 size-[32rem] rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="pointer-events-none absolute right-0 top-0 size-[30rem] rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 size-[22rem] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="container-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-blue-300">
              <Sparkles size={15} />
              HOSTING WITHOUT UNNECESSARY LIMITS
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Unlimited hosting.
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                More possibilities.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Host your websites with unmetered NVMe storage and bandwidth,
              unlimited mailboxes and databases, and clearly allocated
              processing resources.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#plans"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-950/40 transition hover:-translate-y-1 hover:shadow-blue-500/20"
              >
                Explore plans <ArrowRight size={18} />
              </a>

              <a
                href="#comparison"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
              >
                Compare plans
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm text-slate-300">
              {["Free SSL", "Daily backups", "Free migration"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={16} className="text-cyan-300" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* ILLUSTRATIVE HOSTING PANEL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-violet-500/15 to-cyan-400/20 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-[#101B38]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                    <Database size={25} />
                  </div>
                  <div>
                    <h2 className="font-semibold text-white">
                      Your hosting workspace
                    </h2>
                    <p className="text-sm text-slate-400">
                      An illustrative overview
                    </p>
                  </div>
                </div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Example
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  {
                    value: "3–6",
                    label: "CPU cores",
                    color: "text-blue-300",
                    bg: "bg-blue-400/10",
                  },
                  {
                    value: "4–8 GB",
                    label: "RAM allocation",
                    color: "text-violet-300",
                    bg: "bg-violet-400/10",
                  },
                  {
                    value: "NVMe",
                    label: "Storage type",
                    color: "text-cyan-300",
                    bg: "bg-cyan-400/10",
                  },
                  {
                    value: "4 plans",
                    label: "Available options",
                    color: "text-emerald-300",
                    bg: "bg-emerald-400/10",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/[0.07] bg-[#0A132A] p-4"
                  >
                    <p className={`text-2xl font-extrabold ${item.color}`}>
                      {item.value}
                    </p>
                    <p className="mt-2 text-xs text-slate-400">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <p className="text-xs font-bold tracking-widest text-slate-400">
                  EXAMPLE HOSTED WEBSITES
                </p>
                {[
                  "yourwebsite.com",
                  "clientproject.in",
                  "yourstore.shop",
                  "portfolio.dev",
                ].map((site, index) => (
                  <div
                    key={site}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0C142C] px-4 py-4"
                  >
                    <span className="text-sm font-medium text-slate-200">
                      {site}
                    </span>
                    <span
                      className={`text-xs ${
                        index % 2 === 0
                          ? "text-cyan-300"
                          : "text-violet-300"
                      }`}
                    >
                      Example site
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-500">
                This is a design illustration, not a live hosting dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="plans"
        className="relative scroll-mt-24 bg-[#0B1530] py-20 sm:py-24"
      >
        <div className="pointer-events-none absolute left-1/3 top-0 size-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="container-shell relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
              UNLIMITED HOSTING PLANS
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Choose the{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                space you need.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Four plans for individual websites, growing businesses and
              multi-site projects.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Monthly prices · Applicable taxes extra
            </p>
          </div>

          <div className="mt-14 grid items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col overflow-hidden rounded-2xl border bg-[#101B38] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.popular
                    ? "border-violet-400/70 shadow-xl shadow-violet-950/30 ring-1 ring-violet-400/30"
                    : "border-white/10 hover:border-blue-400/40"
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${plan.accent}`}
                />

                {plan.popular && (
                  <span className="absolute right-4 top-5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-[10px] font-extrabold tracking-wide text-white">
                    POPULAR CHOICE
                  </span>
                )}

                <h3 className="pt-3 text-xl font-extrabold text-white">
                  {plan.name}
                </h3>

                <div className="mt-7 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-slate-300">₹</span>
                  <span className="text-5xl font-extrabold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-400">/month</span>
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Monthly pricing · Taxes extra
                </p>

                <div className="my-6 grid grid-cols-2 gap-3 border-y border-white/10 py-5">
                  <div className="rounded-xl bg-[#0A132A] p-3">
                    <Gauge size={19} className="text-blue-300" />
                    <p className="mt-3 text-xs text-slate-500">CPU</p>
                    <p className="mt-1 font-bold text-white">{plan.cpu}</p>
                  </div>

                  <div className="rounded-xl bg-[#0A132A] p-3">
                    <HardDrive size={19} className="text-violet-300" />
                    <p className="mt-3 text-xs text-slate-500">RAM</p>
                    <p className="mt-1 font-bold text-white">{plan.ram}</p>
                  </div>

                  <div className="rounded-xl bg-[#0A132A] p-3">
                    <Database size={19} className="text-cyan-300" />
                    <p className="mt-3 text-xs text-slate-500">Storage</p>
                    <p className="mt-1 font-bold text-white">Unmetered</p>
                  </div>

                  <div className="rounded-xl bg-[#0A132A] p-3">
                    <Code2 size={19} className="text-emerald-300" />
                    <p className="mt-3 text-xs text-slate-500">Websites</p>
                    <p className="mt-1 font-bold text-white">{plan.sites}</p>
                  </div>
                </div>

                <ul className="mb-8 flex-1 space-y-3 text-sm text-slate-300">
                  {[
                    "Unmetered bandwidth",
                    "Unlimited mailboxes",
                    "Unlimited databases",
                    "Free SSL",
                    "Daily backups",
                    "Free migration",
                  ].map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0 text-cyan-400"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://portal.shrotihost.in"
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition ${plan.button}`}
                >
                  Choose plan <ArrowRight size={17} />
                </a>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-500">
            CPU and RAM allocations are defined for each plan. Unmetered
            services remain subject to the provider&apos;s acceptable-use
            policy.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative bg-[#070D20] py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-40 top-20 size-[28rem] rounded-full bg-violet-600/10 blur-[130px]" />

        <div className="container-shell relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
              INCLUDED FEATURES
            </p>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Everything to run your{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                websites.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Hosting essentials, security tools and developer capabilities
              are brought together in one platform.
            </p>

            <div className="mt-8 rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-6">
              <div className="flex size-12 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
                <ShieldCheck size={27} />
              </div>
              <h3 className="mt-4 font-bold text-white">
                Security and protection
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                SSL certificates, malware protection and backup tools help
                protect your websites and data.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group flex gap-4 rounded-2xl border border-white/10 bg-[#101B38] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#142344]"
                >
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${feature.bg} ${feature.color}`}
                  >
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section
        id="comparison"
        className="scroll-mt-24 bg-[#0B1530] py-20 sm:py-24"
      >
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
              COMPARE RESOURCES
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Know what each{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                plan includes.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Compare the resource allocations and website limits side by side.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#101B38] shadow-2xl shadow-black/20">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                <thead className="bg-gradient-to-r from-blue-700 to-violet-700 text-white">
                  <tr>
                    {["Specification", "Solo", "Trio", "Pro", "Infinity"].map(
                      (heading) => (
                        <th key={heading} className="px-5 py-5 font-bold">
                          {heading}
                        </th>
                      )
                    )}
                  </tr>
                </thead>

                <tbody>
                  {resources.map((row, index) => (
                    <tr
                      key={row[0]}
                      className={
                        index % 2 === 0 ? "bg-[#101B38]" : "bg-[#0D1730]"
                      }
                    >
                      {row.map((cell, i) => (
                        <td
                          key={`${row[0]}-${i}`}
                          className={`border-t border-white/[0.06] px-5 py-4 ${
                            i === 0
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
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            Unmetered services remain subject to acceptable-use policies.
            CPU and RAM are allocated resources, not unlimited resources.
          </p>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="relative overflow-hidden bg-[#070D20] py-20 sm:py-24">
        <div className="pointer-events-none absolute left-1/4 top-0 size-96 rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="container-shell relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
              BUILT FOR YOUR WORKFLOW
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Hosting tools for{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                modern projects.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Manage your websites with performance, security and developer
              tools in one place.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Zap,
                title: "LiteSpeed",
                text: "Web server and caching support.",
                color: "text-cyan-300",
                bg: "bg-cyan-400/10",
              },
              {
                icon: ShieldCheck,
                title: "CloudLinux",
                text: "Account isolation and resource allocation.",
                color: "text-emerald-300",
                bg: "bg-emerald-400/10",
              },
              {
                icon: Database,
                title: "NVMe storage",
                text: "Fast storage for website workloads.",
                color: "text-violet-300",
                bg: "bg-violet-400/10",
              },
              {
                icon: Code2,
                title: "Developer tools",
                text: "Node.js, Python, Git and SSH access.",
                color: "text-orange-300",
                bg: "bg-orange-400/10",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-[#101B38] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#142344]"
                >
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
                  >
                    <Icon size={25} />
                  </div>

                  <h3 className="mt-5 font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0B1530] py-20 sm:py-24">
        <div className="container-shell max-w-4xl">
          <div className="text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
              UNLIMITED HOSTING FAQ
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Frequently asked questions.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Learn more about resources, website limits and included features.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-white/10 bg-[#101B38] p-5 transition open:border-blue-400/40 open:bg-[#142344]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-white">
                  {faq.q}
                  <ChevronDown
                    size={19}
                    className="shrink-0 text-cyan-300 transition-transform group-open:rotate-180"
                  />
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden px-0 pb-20">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 px-7 py-12 text-white shadow-2xl shadow-blue-950/30 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-40 size-96 rounded-full bg-cyan-400/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-40 left-1/4 size-96 rounded-full bg-fuchsia-400/20 blur-[100px]" />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-bold tracking-[0.2em] text-blue-100">
                  YOUR NEXT PROJECT STARTS HERE
                </p>

                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Ready to host more?
                </h2>

                <p className="mt-4 leading-7 text-blue-100">
                  Find the right plan for your websites and growing projects.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#plans"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 font-bold text-blue-700 transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  View plans <ArrowRight size={17} />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
