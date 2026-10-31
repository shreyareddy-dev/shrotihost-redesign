
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Globe2,
  Layers3,
  LockKeyhole,
  Server,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Reseller Hosting | Shroti Host",
  description:
    "Start your own hosting business with white-label reseller hosting, WHM access, cPanel accounts and WHMCS billing software.",
};

const plans = [
  {
    name: "Reseller Starter",
    price: "299",
    accounts: "25",
    description: "Start your hosting business.",
    popular: false,
    accent: "from-blue-500 to-cyan-400",
  },
  {
    name: "Reseller Growth",
    price: "499",
    accounts: "50",
    description: "Room to grow your client base.",
    popular: true,
    accent: "from-violet-500 to-fuchsia-400",
  },
  {
    name: "Reseller Pro",
    price: "799",
    accounts: "100",
    description: "For an established book of clients.",
    popular: false,
    accent: "from-orange-500 to-amber-400",
  },
  {
    name: "Reseller Infinity",
    price: "1,299",
    accounts: "Unlimited",
    description: "No cap on the accounts you create.",
    popular: false,
    accent: "from-emerald-500 to-teal-400",
  },
];

const included = [
  "Unlimited NVMe storage",
  "Unmetered bandwidth",
  "Free SSL certificates",
  "Daily JetBackup backups",
  "LiteSpeed Web Server",
  "cPanel and Softaculous",
  "Managed WordPress",
  "DDoS and Imunify360 protection",
  "Python and Node.js support",
  "Terminal access",
  "Free WHMCS billing software",
  "Instant activation",
  "Priority support through WhatsApp and tickets",
];

const comparison = [
  ["cPanel accounts", "25", "50", "100", "Unlimited"],
  ["NVMe storage", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
  ["Bandwidth", "Unmetered", "Unmetered", "Unmetered", "Unmetered"],
  ["Hosted websites", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
  ["Mailboxes", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
  ["WHM control panel", "Included", "Included", "Included", "Included"],
  ["WHMCS billing software", "Included", "Included", "Included", "Included"],
  ["White-label branding", "Included", "Included", "Included", "Included"],
  ["Private nameservers", "Included", "Included", "Included", "Included"],
  ["Custom hosting packages", "Included", "Included", "Included", "Included"],
  ["Overselling support", "Included", "Included", "Included", "Included"],
  ["Daily backups", "Included", "Included", "Included", "Included"],
  ["Free SSL", "Included", "Included", "Included", "Included"],
];

const faqs = [
  {
    q: "What is reseller hosting?",
    a: "Reseller hosting allows you to purchase a hosting plan and create individual cPanel accounts for your own customers. You can sell hosting under your own brand and manage accounts through WHM.",
  },
  {
    q: "What is the difference between WHM and cPanel?",
    a: "WHM is the reseller control panel used to create and manage customer hosting accounts. Each customer uses their own cPanel account to manage files, databases, email and website settings.",
  },
  {
    q: "Is WHMCS billing software included?",
    a: "Yes. Free WHMCS billing software is included with every advertised reseller plan. It helps automate customer orders, invoices and account provisioning.",
  },
  {
    q: "Can I use my own company name and branding?",
    a: "Yes. The plans include white-label branding and private nameservers, allowing you to present hosting services under your own brand.",
  },
  {
    q: "Can I create my own hosting packages?",
    a: "Yes. WHM lets you create custom hosting packages and manage the cPanel accounts you provide to your customers.",
  },
  {
    q: "Are storage and bandwidth unlimited?",
    a: "The plans advertise unlimited NVMe storage and unmetered bandwidth. These services remain subject to the provider's acceptable-use policy and applicable resource policies.",
  },
  {
    q: "Can my customers host WordPress websites?",
    a: "Yes. Managed WordPress, cPanel and Softaculous are included in the advertised reseller plan features.",
  },
  {
    q: "What is the difference between reseller and master reseller hosting?",
    a: "A reseller plan lets you create cPanel accounts for your customers. Master reseller hosting additionally lets you create WHM reseller accounts for people who want to run their own hosting businesses.",
  },
];

const steps = [
  {
    icon: Wallet,
    number: "01",
    title: "Choose a reseller plan",
    text: "Select the account capacity that fits the number of customers you want to serve.",
    color: "text-blue-300",
    bg: "bg-blue-400/10",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Create hosting packages",
    text: "Use WHM to configure packages, create cPanel accounts and manage customer hosting.",
    color: "text-violet-300",
    bg: "bg-violet-400/10",
  },
  {
    icon: Globe2,
    number: "03",
    title: "Sell under your brand",
    text: "Use private nameservers and white-label branding to present hosting as your own service.",
    color: "text-emerald-300",
    bg: "bg-emerald-400/10",
  },
];

const businessTools = [
  {
    icon: Server,
    title: "Full WHM access",
    text: "Create, manage and suspend customer cPanel accounts.",
    color: "text-blue-300",
    bg: "bg-blue-400/10",
  },
  {
    icon: Globe2,
    title: "White-label branding",
    text: "Present hosting services under your own brand.",
    color: "text-violet-300",
    bg: "bg-violet-400/10",
  },
  {
    icon: Wallet,
    title: "Free WHMCS billing",
    text: "Automate orders, invoices and account provisioning.",
    color: "text-emerald-300",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Layers3,
    title: "Custom packages",
    text: "Configure hosting packages for different customers.",
    color: "text-orange-300",
    bg: "bg-orange-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Security tools",
    text: "DDoS protection and Imunify360 security.",
    color: "text-cyan-300",
    bg: "bg-cyan-400/10",
  },
  {
    icon: Zap,
    title: "Developer support",
    text: "Node.js, Python and terminal access.",
    color: "text-pink-300",
    bg: "bg-pink-400/10",
  },
];

export default function ResellerHostingPage() {
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
              <Globe2 size={16} />
              BUILD YOUR OWN HOSTING BRAND
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Start your own
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                hosting business.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Full WHM access, white-label branding and free WHMCS billing
              software. Create hosting packages, manage customer accounts and
              sell hosting under your own name.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#plans"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-950/40 transition hover:-translate-y-1 hover:shadow-blue-500/20"
              >
                Explore reseller plans <ArrowRight size={18} />
              </a>

              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
              >
                How it works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm text-slate-300">
              {[
                "White-label hosting",
                "Free WHMCS",
                "Full WHM access",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={16} className="text-cyan-300" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RESELLER DASHBOARD ILLUSTRATION */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-violet-500/15 to-cyan-400/20 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-[#101B38]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-slate-400">
                    Your reseller business
                  </p>
                  <h2 className="mt-1 text-xl font-bold text-white">
                    Your brand. Your customers.
                  </h2>
                </div>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  Illustration
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-[#0C142C] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                    <Server size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-white">
                      Your hosting brand
                    </p>
                    <p className="text-xs text-slate-400">
                      WHM reseller account
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "Customer account 01",
                    "Customer account 02",
                    "Customer account 03",
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-4"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex size-8 items-center justify-center rounded-lg ${
                            index === 0
                              ? "bg-blue-400/10 text-blue-300"
                              : index === 1
                                ? "bg-violet-400/10 text-violet-300"
                                : "bg-cyan-400/10 text-cyan-300"
                          }`}
                        >
                          <Globe2 size={16} />
                        </div>
                        <span className="text-sm text-slate-200">{item}</span>
                      </div>
                      <span className="text-xs text-emerald-300">Example</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-2xl font-extrabold text-cyan-300">
                    WHM
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Account management
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-2xl font-extrabold text-violet-300">
                    WHMCS
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Billing automation
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-500">
                Conceptual illustration of a reseller account structure, not a
                live WHM dashboard.
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
              RESELLER HOSTING PLANS
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Choose how far{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                you want to grow.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Start with 25 customer accounts or choose unlimited cPanel
              accounts as your hosting business expands.
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Monthly billing · Prices exclude applicable taxes
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
                    MOST POPULAR
                  </span>
                )}

                <h3 className="pt-3 text-xl font-extrabold text-white">
                  {plan.name}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-slate-300">₹</span>
                  <span className="text-5xl font-extrabold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-400">/month</span>
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  Same listed renewal price
                </p>

                <div className="my-6 rounded-2xl border border-white/10 bg-[#0A132A] p-5">
                  <p className="text-xs text-slate-400">
                    Customer cPanel accounts
                  </p>
                  <p className="mt-2 text-3xl font-extrabold text-white">
                    {plan.accounts}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Account capacity
                  </p>
                </div>

                <ul className="mb-8 flex-1 space-y-3 text-sm text-slate-300">
                  {[
                    "Unlimited NVMe storage",
                    "Unmetered bandwidth",
                    "Free SSL certificates",
                    "Daily backups",
                    "Free WHMCS billing",
                    "White-label branding",
                    "Priority support",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
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
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                    plan.popular
                      ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-950/30 hover:brightness-110"
                      : "border border-white/15 bg-white/5 text-white hover:border-cyan-300/50 hover:bg-white/10"
                  }`}
                >
                  Choose plan <ArrowRight size={17} />
                </a>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Select your plan, domain and billing cycle through the Shroti Host
            client portal.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="scroll-mt-24 bg-[#070D20] py-20 sm:py-24"
      >
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
              HOW RESELLER HOSTING WORKS
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              From hosting provider to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                hosting business owner.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Your reseller plan gives you the tools to create packages,
              provision accounts and manage your customers.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group rounded-2xl border border-white/10 bg-[#101B38] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#142344]"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex size-14 items-center justify-center rounded-2xl ${step.bg} ${step.color}`}
                    >
                      <Icon size={26} />
                    </div>
                    <span className="text-sm font-bold tracking-widest text-slate-500">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BUSINESS TOOLS */}
      <section className="relative overflow-hidden bg-[#0B1530] py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-40 top-20 size-[28rem] rounded-full bg-violet-600/10 blur-[130px]" />

        <div className="container-shell relative">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
                BUSINESS TOOLS INCLUDED
              </p>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                Everything you need to{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  manage your customers.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-400">
                Manage hosting accounts, automate billing and offer services
                under your own brand with the reseller tools included in the
                advertised plans.
              </p>

              <div className="mt-8 rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
                  <LockKeyhole size={27} />
                </div>

                <h3 className="mt-4 font-bold text-white">
                  Your brand stays yours
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  White-label branding and private nameservers let you present
                  hosting services using your own business identity.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {businessTools.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-[#101B38] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#142344]"
                  >
                    <div
                      className={`flex size-12 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
                    >
                      <Icon size={24} />
                    </div>

                    <h3 className="mt-5 font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PLAN COMPARISON */}
      <section
        id="comparison"
        className="scroll-mt-24 bg-[#070D20] py-20 sm:py-24"
      >
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
              PLAN COMPARISON
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Every plan.{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Every important detail.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Compare the account limits and included reseller features.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#101B38] shadow-2xl shadow-black/20">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead className="bg-gradient-to-r from-blue-700 to-violet-700 text-white">
                  <tr>
                    {[
                      "Specification",
                      "Starter",
                      "Growth",
                      "Pro",
                      "Infinity",
                    ].map((heading) => (
                      <th key={heading} className="px-5 py-5 font-bold">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {comparison.map((row, index) => (
                    <tr
                      key={row[0]}
                      className={
                        index % 2 === 0 ? "bg-[#101B38]" : "bg-[#0D1730]"
                      }
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={`${row[0]}-${cellIndex}`}
                          className={`border-t border-white/[0.06] px-5 py-4 ${
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
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-500">
            Unlimited and unmetered services remain subject to the Acceptable
            Use Policy and applicable resource policies.
          </p>
        </div>
      </section>

      {/* INCLUDED FEATURES */}
      <section className="bg-[#0B1530] py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
              INCLUDED IN EVERY PLAN
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              A complete{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                reseller hosting toolkit.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#101B38] p-5 transition duration-300 hover:border-blue-400/30 hover:bg-[#142344]"
              >
                <span
                  className={`flex size-9 shrink-0 items-center justify-center rounded-full ${
                    index % 3 === 0
                      ? "bg-blue-400/10 text-blue-300"
                      : index % 3 === 1
                        ? "bg-violet-400/10 text-violet-300"
                        : "bg-emerald-400/10 text-emerald-300"
                  }`}
                >
                  <Check size={17} />
                </span>

                <span className="text-sm font-medium text-slate-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#070D20] py-20 sm:py-24">
        <div className="container-shell max-w-4xl">
          <div className="text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Questions about reseller hosting?
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Understand how reseller accounts, billing and branding work.
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

                <p className="mt-4 max-w-3xl pr-8 text-sm leading-7 text-slate-400">
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
                  BUILD YOUR OWN HOSTING BRAND
                </p>

                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Ready to build your hosting brand?
                </h2>

                <p className="mt-4 leading-7 text-blue-100">
                  Start with reseller hosting or explore master reseller plans
                  if you want to create reseller accounts of your own.
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
                  href="/hosting/master-reseller"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Master reseller <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
