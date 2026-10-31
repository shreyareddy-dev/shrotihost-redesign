
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Globe2,
  Layers3,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Wallet,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Master Reseller Hosting | Shroti Host",
  description:
    "Build your own reseller network with master reseller hosting, WHM reseller accounts, cPanel, white-label branding and WHMCS billing.",
};

const plans = [
  {
    name: "Master Starter",
    price: "499",
    cpanel: "30",
    resellers: "5",
    description: "Sign your first resellers.",
    accent: "from-blue-500 to-cyan-400",
  },
  {
    name: "Master Growth",
    price: "999",
    cpanel: "100",
    resellers: "15",
    description: "Build a growing reseller network.",
    popular: true,
    accent: "from-violet-500 to-fuchsia-400",
  },
  {
    name: "Master Pro",
    price: "1,499",
    cpanel: "250",
    resellers: "35",
    description: "For an established reseller network.",
    accent: "from-orange-500 to-amber-400",
  },
  {
    name: "Master Infinity",
    price: "2,499",
    cpanel: "Unlimited",
    resellers: "Unlimited",
    description: "No cap on accounts or resellers.",
    accent: "from-emerald-500 to-teal-400",
  },
];

const comparison = [
  ["cPanel accounts", "30", "100", "250", "Unlimited"],
  ["WHM reseller accounts", "5", "15", "35", "Unlimited"],
  ["NVMe storage", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
  ["Bandwidth", "Unmetered", "Unmetered", "Unmetered", "Unmetered"],
  ["Hosted websites", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
  ["Mailboxes", "Unlimited", "Unlimited", "Unlimited", "Unlimited"],
  ["WHMCS billing", "Included", "Included", "Included", "Included"],
  ["White-label branding", "Included", "Included", "Included", "Included"],
  ["Private nameservers", "Included", "Included", "Included", "Included"],
  ["Custom packages", "Included", "Included", "Included", "Included"],
  ["Daily backups", "Included", "Included", "Included", "Included"],
  ["Free SSL", "Included", "Included", "Included", "Included"],
];

const faqs = [
  {
    q: "What is master reseller hosting?",
    a: "Master reseller hosting allows you to create regular cPanel hosting accounts as well as WHM reseller accounts. You can sell hosting to website owners and also sell reseller hosting to people who want to start their own hosting businesses.",
  },
  {
    q: "What is the difference between reseller and master reseller hosting?",
    a: "A standard reseller plan lets you create cPanel accounts for your customers. A master reseller plan also lets you create WHM reseller accounts, allowing your customers to create and manage their own cPanel accounts.",
  },
  {
    q: "How many reseller accounts can I create?",
    a: "The published plans include 5 WHM reseller accounts on Master Starter, 15 on Master Growth, 35 on Master Pro and unlimited accounts on Master Infinity.",
  },
  {
    q: "Is WHMCS billing software included?",
    a: "Yes. Free WHMCS billing software is included with every advertised master reseller plan to help automate orders, invoices and account provisioning.",
  },
  {
    q: "Can I use my own brand?",
    a: "Yes. White-label branding and private nameservers are included, allowing you to present your hosting business under your own brand.",
  },
  {
    q: "Can my resellers create their own hosting packages?",
    a: "Each WHM reseller account gets its own WHM access to manage cPanel accounts and hosting packages within the permissions and limits of the reseller account.",
  },
  {
    q: "Are storage and bandwidth unlimited?",
    a: "The plans advertise unlimited NVMe storage and unmetered bandwidth. These services remain subject to the provider's acceptable-use policy.",
  },
  {
    q: "What if I only need to host my own customers?",
    a: "If you do not plan to sell WHM reseller accounts to other businesses, standard reseller hosting may be a more suitable and economical option.",
  },
];

const steps = [
  {
    icon: Server,
    number: "01",
    title: "Get your master account",
    text: "Choose a plan and use your master WHM account to manage the reseller network.",
    color: "text-blue-300",
    bg: "bg-blue-400/10",
  },
  {
    icon: Network,
    number: "02",
    title: "Create reseller accounts",
    text: "Create WHM reseller accounts and provide access to people who want to sell hosting.",
    color: "text-violet-300",
    bg: "bg-violet-400/10",
  },
  {
    icon: Globe2,
    number: "03",
    title: "Grow your network",
    text: "Your resellers can create cPanel accounts and serve their own hosting customers.",
    color: "text-emerald-300",
    bg: "bg-emerald-400/10",
  },
];

const businessTools = [
  {
    icon: Network,
    title: "WHM reseller accounts",
    text: "Create and manage reseller accounts under your master account.",
    color: "text-blue-300",
    bg: "bg-blue-400/10",
  },
  {
    icon: Server,
    title: "Full WHM access",
    text: "Manage cPanel and reseller accounts through WHM.",
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
    icon: Globe2,
    title: "Private nameservers",
    text: "Present your hosting services under your own domain.",
    color: "text-orange-300",
    bg: "bg-orange-400/10",
  },
  {
    icon: ShieldCheck,
    title: "Security and backups",
    text: "Imunify360, DDoS protection and daily JetBackup backups.",
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

const accountExamples = [
  "Reseller account A",
  "Reseller account B",
  "Reseller account C",
];

export default function MasterResellerPage() {
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
              <Network size={16} />
              BUILD YOUR OWN RESELLER NETWORK
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Sell hosting to
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                other resellers.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Go beyond traditional reseller hosting. Create cPanel accounts
              for your customers and WHM reseller accounts for businesses
              that want to build their own hosting brands.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#plans"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-950/40 transition hover:-translate-y-1 hover:shadow-blue-500/20"
              >
                Explore master plans <ArrowRight size={18} />
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
                "WHM reseller accounts",
                "White-label branding",
                "Free WHMCS",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check size={16} className="text-cyan-300" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* NETWORK ILLUSTRATION */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-violet-500/15 to-cyan-400/20 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-[#101B38]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
              <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                <div className="flex size-12 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                  <Network size={25} />
                </div>
                <div>
                  <h2 className="font-bold text-white">
                    Your reseller network
                  </h2>
                  <p className="text-sm text-slate-400">
                    Illustrative account structure
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-blue-400/20 bg-blue-500/10 p-5">
                <div className="flex items-center gap-3">
                  <Server size={22} className="text-cyan-300" />
                  <div>
                    <p className="font-bold text-white">Your master account</p>
                    <p className="text-xs text-slate-400">
                      Master WHM access
                    </p>
                  </div>
                </div>
              </div>

              <div className="ml-6 mt-3 space-y-3 border-l border-blue-400/30 pl-5 sm:ml-8">
                {accountExamples.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-[#0C142C] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex size-9 items-center justify-center rounded-lg ${
                          index === 0
                            ? "bg-blue-400/10 text-blue-300"
                            : index === 1
                              ? "bg-violet-400/10 text-violet-300"
                              : "bg-cyan-400/10 text-cyan-300"
                        }`}
                      >
                        <Layers3 size={17} />
                      </div>
                      <span className="text-sm font-semibold text-white">
                        {item}
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-400">
                      <span className="rounded-md bg-white/5 px-2 py-1">
                        Customer sites
                      </span>
                      <span className="rounded-md bg-white/5 px-2 py-1">
                        cPanel
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-xs leading-5 text-slate-500">
                Conceptual illustration of a multi-level reseller structure,
                not a live WHM dashboard.
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
              MASTER RESELLER PLANS
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Choose the scale{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                of your network.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              From your first reseller to a growing network of hosting
              businesses, choose the account capacity that fits your plans.
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

                <div className="my-6 space-y-4 rounded-2xl border border-white/10 bg-[#0A132A] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-slate-400">
                      cPanel accounts
                    </span>
                    <span className="font-bold text-white">
                      {plan.cpanel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm text-slate-400">
                      WHM resellers
                    </span>
                    <span className="font-bold text-white">
                      {plan.resellers}
                    </span>
                  </div>
                </div>

                <ul className="mb-8 flex-1 space-y-3 text-sm text-slate-300">
                  {[
                    "Unlimited NVMe storage",
                    "Unmetered bandwidth",
                    "Free SSL certificates",
                    "Daily backups",
                    "Free WHMCS billing",
                    "White-label branding",
                    "Private nameservers",
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
                  href="https://portal.shrotihost.in/index.php/store/master-reseller"
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
              HOW IT WORKS
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Build a hosting{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                business network.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Create multiple levels of hosting services using your own brand
              and reseller accounts.
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

        <div className="container-shell relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
              BUSINESS TOOLS
            </p>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Manage every level{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                of your business.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-slate-400">
              Use the included reseller tools to manage accounts, create
              packages, automate billing and present your own hosting brand.
            </p>

            <div className="mt-8 rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-6">
              <div className="flex size-12 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
                <LockKeyhole size={27} />
              </div>

              <h3 className="mt-4 font-bold text-white">
                White-label control
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Private nameservers and white-label branding help keep your
                hosting business identity at the forefront.
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

      {/* COMPARISON */}
      <section className="scroll-mt-24 bg-[#070D20] py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
              PLAN COMPARISON
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Compare accounts{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                and features.
              </span>
            </h2>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#101B38] shadow-2xl shadow-black/20">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                <thead className="bg-gradient-to-r from-blue-700 to-violet-700 text-white">
                  <tr>
                    {[
                      "Specification",
                      "Master Starter",
                      "Master Growth",
                      "Master Pro",
                      "Master Infinity",
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
            Unmetered and unlimited services remain subject to the provider&apos;s
            acceptable-use policy and applicable resource policies.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0B1530] py-20 sm:py-24">
        <div className="container-shell max-w-4xl">
          <div className="text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Master reseller hosting explained.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              Understand reseller accounts, account limits and billing tools.
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
      <section className="relative isolate overflow-hidden pb-20">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 px-7 py-12 text-white shadow-2xl shadow-blue-950/30 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-40 size-96 rounded-full bg-cyan-400/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-40 left-1/4 size-96 rounded-full bg-fuchsia-400/20 blur-[100px]" />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="mb-3 text-xs font-bold tracking-[0.2em] text-blue-100">
                  GROW YOUR HOSTING BUSINESS
                </p>

                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                  Ready to build your reseller network?
                </h2>

                <p className="mt-4 leading-7 text-blue-100">
                  Compare the plans and choose the account capacity that fits
                  your hosting business.
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
                  href="/hosting/reseller"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3.5 font-semibold text-white transition hover:bg-white/10"
                >
                  Standard reseller <ArrowRight size={17} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
