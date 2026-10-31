
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ShieldCheck,
  Gauge,
  Database,
  Globe,
  Zap,
  ShoppingCart,
  Code2,
  ChevronDown,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "WordPress Hosting",
  description:
    "Explore Shroti Host WordPress hosting plans with LiteSpeed, NVMe storage, AccelerateWP, daily backups and free WordPress migration.",
};

const plans = [
  {
    name: "WP Starter",
    tagline: "Start your WordPress journey.",
    price: "69",
    cpu: "1 Core",
    ram: "1.5 GB",
    storage: "10 GB",
    websites: "1",
    email: "5",
    popular: false,
    domain: "",
    accent: "from-blue-500 to-cyan-400",
    features: [
      "WordPress Manager by Softaculous",
      "Softaculous one-click installs",
      "AccelerateWP optimization",
      "LiteSpeed + LiteSpeed Cache",
      "Free SSL certificate",
      "Daily backups",
      "Free WordPress migration",
      "Imunify360 security",
      "WooCommerce ready",
    ],
  },
  {
    name: "WP Business",
    tagline: "Everything your WordPress business needs.",
    price: "119",
    cpu: "1.5 Cores",
    ram: "2 GB",
    storage: "50 GB",
    websites: "5",
    email: "25",
    popular: true,
    domain: "",
    accent: "from-violet-500 to-fuchsia-400",
    features: [
      "Everything in WP Starter",
      "Redis Object Cache",
      "Git version control",
      "Node.js and Python",
      "Advanced WordPress Management",
      "Sitejet Website Builder",
      "SitePad Website Builder",
    ],
  },
  {
    name: "WP Performance",
    tagline: "More power for demanding WordPress sites.",
    price: "229",
    cpu: "2 Cores",
    ram: "3 GB",
    storage: "100 GB",
    websites: "10",
    email: "50",
    popular: false,
    domain: "Free .in domain on eligible yearly billing",
    accent: "from-orange-500 to-amber-400",
    features: [
      "Everything in WP Business",
      "SSH and terminal access",
      "Team and user management",
      "RubyGems and Perl modules",
      "Advanced developer tools",
    ],
  },
  {
    name: "WP Ultimate",
    tagline: "Maximum WordPress power.",
    price: "379",
    cpu: "3 Cores",
    ram: "4 GB",
    storage: "250 GB",
    websites: "25",
    email: "Unlimited",
    popular: false,
    domain: "Free .com or .in domain on eligible yearly billing",
    accent: "from-emerald-500 to-teal-400",
    features: [
      "Everything in WP Performance",
      "Full available WordPress feature set",
      "Highest CloudLinux allocation on the WordPress line",
    ],
  },
];

const comparison = [
  ["WordPress websites", "1", "5", "10", "25"],
  ["NVMe storage", "10 GB", "50 GB", "100 GB", "250 GB"],
  ["CPU allocation", "1 Core", "1.5 Cores", "2 Cores", "3 Cores"],
  ["RAM allocation", "1.5 GB", "2 GB", "3 GB", "4 GB"],
  ["Bandwidth", "Unmetered", "Unmetered", "Unmetered", "Unmetered"],
  ["Email mailboxes", "5", "25", "50", "Unlimited"],
  ["I/O speed", "5 MB/s", "10 MB/s", "15 MB/s", "20 MB/s"],
  ["IOPS", "1,024", "1,536", "2,048", "3,072"],
  ["Entry processes", "20", "30", "40", "60"],
  ["Processes (NPROC)", "40", "60", "100", "150"],
  ["Email sending", "100/hour", "250/hour", "500/hour", "1,000/hour"],
];

const included = [
  {
    icon: Zap,
    title: "LiteSpeed + LSCache",
    description:
      "LiteSpeed web server and LiteSpeed Cache are included to support WordPress page caching.",
    color: "text-cyan-300",
    bg: "bg-cyan-400/10",
  },
  {
    icon: Gauge,
    title: "AccelerateWP",
    description:
      "WordPress optimization tools are included across all four plans.",
    color: "text-violet-300",
    bg: "bg-violet-400/10",
  },
  {
    icon: ShieldCheck,
    title: "WordPress security",
    description:
      "Free SSL certificates and Imunify360 security are included.",
    color: "text-emerald-300",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Database,
    title: "Daily backups",
    description:
      "Daily backups help preserve your website data.",
    color: "text-blue-300",
    bg: "bg-blue-400/10",
  },
  {
    icon: Globe,
    title: "Free WordPress migration",
    description:
      "The Shroti Host team offers WordPress migration at no additional charge.",
    color: "text-orange-300",
    bg: "bg-orange-400/10",
  },
  {
    icon: Layers,
    title: "WordPress Manager",
    description:
      "Manage WordPress installations through the Softaculous WordPress Manager.",
    color: "text-pink-300",
    bg: "bg-pink-400/10",
  },
];

const faqs = [
  {
    question: "What is WordPress hosting?",
    answer:
      "WordPress hosting uses a hosting environment configured around WordPress. Shroti Host includes WordPress Manager, Softaculous one-click installation, LiteSpeed Cache and AccelerateWP. The plans also support WooCommerce.",
  },
  {
    question: "Is WordPress pre-installed?",
    answer:
      "WordPress can be installed through Softaculous with one click. WordPress Manager is included on all four plans to help manage supported installations, plugins, themes and updates.",
  },
  {
    question: "Can I run a WooCommerce store?",
    answer:
      "WooCommerce support is included across all four plans. The suitable plan depends on your site's resource requirements, theme, plugins and traffic. WP Business and higher plans include Redis Object Cache.",
  },
  {
    question: "Can I migrate my existing WordPress website?",
    answer:
      "Yes. Free WordPress migration is included across all four plans. Contact the Shroti Host team to arrange the migration.",
  },
  {
    question: "Is a free domain included?",
    answer:
      "WP Performance includes an eligible .in domain and WP Ultimate includes an eligible .com or .in domain on annual billing, for the first year only. Premium domains are excluded and domain renewals are charged separately. WP Starter and WP Business do not include a free domain.",
  },
  {
    question: "How much CPU and RAM do I get?",
    answer:
      "WP Starter includes 1 Core and 1.5 GB RAM; WP Business includes 1.5 Cores and 2 GB RAM; WP Performance includes 2 Cores and 3 GB RAM; WP Ultimate includes 3 Cores and 4 GB RAM. These are CloudLinux allocations, not dedicated physical hardware.",
  },
  {
    question: "How many email accounts are included?",
    answer:
      "WP Starter includes 5 mailboxes, WP Business 25, WP Performance 50 and WP Ultimate unlimited mailboxes. Email sending is subject to plan-specific hourly limits.",
  },
  {
    question: "What is the difference between Shared and WordPress Hosting?",
    answer:
      "Both use the same underlying hosting platform and tier-by-tier CPU, RAM and storage allocations. WordPress Hosting adds a WordPress-focused setup with WordPress Manager, AccelerateWP and related tools. Shared Hosting may be a better fit if you also need to run other types of applications.",
  },
  {
    question: "What happens when my plan renews?",
    answer:
      "The published WordPress Hosting page states that each plan renews at the same price for the corresponding billing cycle. Taxes and domain renewal charges should be checked separately.",
  },
];

export default function WordPressHostingPage() {
  return (
    <main className="overflow-hidden bg-[#070D20] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#070D20] py-24 sm:py-28">
        <div className="pointer-events-none absolute -left-40 -top-40 size-[32rem] rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="pointer-events-none absolute right-0 top-0 size-[30rem] rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 size-[22rem] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="container-shell relative z-10">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-bold tracking-[0.16em] text-blue-300">
                <Layers size={16} />
                WORDPRESS HOSTING
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                WordPress,
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                  tuned to run fast.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                One-click installation, LiteSpeed Cache and AccelerateWP.
                A WordPress-focused hosting environment for blogs, business
                websites and WooCommerce stores.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#plans"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-950/40 transition hover:-translate-y-1 hover:shadow-blue-500/20"
                >
                  Explore plans <ArrowRight size={18} />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
                >
                  Migrate my site free
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-7 gap-y-4 text-sm text-slate-300">
                {[
                  "LiteSpeed Cache",
                  "Free SSL",
                  "Daily backups",
                  "Free migration",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-cyan-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-violet-500/15 to-cyan-400/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-[#101B38]/90 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div>
                    <p className="text-sm font-semibold text-slate-300">
                      WordPress environment
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Hosting tools at a glance
                    </p>
                  </div>
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    WordPress ready
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-4 rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-500/15 to-violet-500/15 p-5">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
                    <Layers size={30} />
                  </div>
                  <div>
                    <p className="font-bold text-white">WordPress Manager</p>
                    <p className="mt-1 text-sm text-slate-400">
                      Manage your installations
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: Zap,
                      title: "LiteSpeed",
                      detail: "Cache support",
                      color: "text-cyan-300",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Imunify360",
                      detail: "Security tools",
                      color: "text-emerald-300",
                    },
                    {
                      icon: Database,
                      title: "Daily backups",
                      detail: "Data protection",
                      color: "text-violet-300",
                    },
                    {
                      icon: Gauge,
                      title: "AccelerateWP",
                      detail: "Optimization",
                      color: "text-orange-300",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <Icon size={22} className={item.color} />
                        <p className="mt-3 text-sm font-bold text-white">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          {item.detail}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-xl border border-white/10 bg-[#0A132A] p-4">
                  <div className="mb-3 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Choose your resources</span>
                    <span className="font-semibold text-cyan-300">
                      4 plan options
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2 flex-1 rounded-full bg-blue-500" />
                    <div className="h-2 flex-1 rounded-full bg-violet-500" />
                    <div className="h-2 flex-1 rounded-full bg-orange-400" />
                    <div className="h-2 flex-1 rounded-full bg-emerald-400" />
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] text-slate-500">
                    <span>Starter</span>
                    <span>Business</span>
                    <span>Performance</span>
                    <span>Ultimate</span>
                  </div>
                </div>
              </div>
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
              SIMPLE, HONEST PRICING
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Find the right{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                WordPress plan
              </span>
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Choose from four plans with different resource allocations
              for personal websites, businesses and growing online stores.
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

                <div className="mb-5 pt-2">
                  <h3 className="text-xl font-extrabold text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 min-h-10 text-sm leading-6 text-slate-400">
                    {plan.tagline}
                  </p>
                </div>

                <div className="border-b border-white/10 pb-5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-slate-300">
                      ₹
                    </span>
                    <span className="text-5xl font-extrabold tracking-tight text-white">
                      {plan.price}
                    </span>
                    <span className="text-sm text-slate-400">/month</span>
                  </div>

                  <p className="mt-2 text-xs text-slate-500">
                    Billed monthly · Excluding taxes
                  </p>
                  <p className="mt-2 text-xs font-semibold text-emerald-300">
                    <CheckCircle2 size={13} className="mr-1 inline" />
                    Same price on renewal
                  </p>
                </div>

                <div className="my-5 grid grid-cols-2 gap-3">
                  {[
                    ["CPU", plan.cpu],
                    ["RAM", plan.ram],
                    ["Storage", plan.storage],
                    ["Websites", plan.websites],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-xl border border-white/[0.07] bg-[#0A132A] p-3"
                    >
                      <p className="text-xs text-slate-500">{label}</p>
                      <p className="mt-1 font-bold text-white">{value}</p>
                      {label === "Storage" && (
                        <p className="text-xs text-slate-500">NVMe</p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mb-5 flex items-center justify-between text-sm">
                  <span className="text-slate-400">Email accounts</span>
                  <span className="font-semibold text-white">
                    {plan.email}
                  </span>
                </div>

                {plan.domain && (
                  <div className="mb-5 rounded-xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-xs font-semibold leading-5 text-cyan-200">
                    <CheckCircle2 size={15} className="mr-1 inline" />
                    {plan.domain}
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
                        className="flex gap-2 text-sm leading-5 text-slate-300"
                      >
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-cyan-400"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                    plan.popular
                      ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-950/30 hover:brightness-110"
                      : "border border-white/15 bg-white/5 text-white hover:border-cyan-300/50 hover:bg-white/10"
                  }`}
                >
                  Enquire about {plan.name}
                  <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-500">
            Prices shown are monthly prices excluding taxes. Annual billing
            options and their prices should be checked on the official
            ordering portal before purchase. Eligible free-domain offers
            apply to annual plans for the first year only. Premium domains
            are excluded and renewals are charged separately.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative bg-[#070D20] py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-40 top-20 size-[28rem] rounded-full bg-violet-600/10 blur-[130px]" />

        <div className="container-shell relative">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
              INCLUDED ACROSS ALL PLANS
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Everything your{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                WordPress site
              </span>{" "}
              needs
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              A set of WordPress-focused tools and hosting essentials
              included across the four plans.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-[#101B38] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#142344]"
                >
                  <div
                    className={`mb-5 flex size-13 items-center justify-center rounded-2xl ${item.bg} ${item.color} transition group-hover:scale-110`}
                  >
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WOOCOMMERCE */}
      <section className="relative overflow-hidden bg-[#0B1530] py-20 sm:py-24">
        <div className="pointer-events-none absolute -left-40 top-10 size-[30rem] rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 size-[25rem] rounded-full bg-fuchsia-600/10 blur-[120px]" />

        <div className="container-shell relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                <ShoppingCart size={27} />
              </div>

              <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
                WORDPRESS + WOOCOMMERCE
              </p>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
                Build your online store on{" "}
                <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  WordPress.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                All four WordPress plans support WooCommerce. Select a
                resource allocation that matches your store&apos;s requirements,
                plugins and expected traffic.
              </p>

              <Link
                href="#plans"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:gap-3 hover:text-white"
              >
                Compare WordPress plans
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: ShoppingCart,
                  title: "WooCommerce support",
                  description:
                    "WooCommerce is supported on all four WordPress plans.",
                  color: "text-blue-300",
                  bg: "bg-blue-400/10",
                },
                {
                  icon: Database,
                  title: "Redis Object Cache",
                  description: "Included from WP Business upward.",
                  color: "text-violet-300",
                  bg: "bg-violet-400/10",
                },
                {
                  icon: Zap,
                  title: "LiteSpeed Cache",
                  description:
                    "WordPress caching support across every plan.",
                  color: "text-cyan-300",
                  bg: "bg-cyan-400/10",
                },
                {
                  icon: Code2,
                  title: "Developer tools",
                  description:
                    "Advanced developer access is available on higher tiers.",
                  color: "text-emerald-300",
                  bg: "bg-emerald-400/10",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-[#101B38] p-6 transition hover:border-blue-400/30 hover:bg-[#142344]"
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
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-[#070D20] py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
              SIDE-BY-SIDE COMPARISON
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Compare every{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                specification
              </span>
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Review the published resource allocations before choosing
              your WordPress hosting plan.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-[#101B38] shadow-2xl shadow-black/20">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-700 to-violet-700 text-white">
                    <th className="px-6 py-5 font-bold">
                      Specification
                    </th>
                    {plans.map((plan) => (
                      <th
                        key={plan.name}
                        className="px-5 py-5 font-bold"
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
                          ? "bg-[#101B38]"
                          : "bg-[#0D1730]"
                      }
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={`${row[0]}-${cellIndex}`}
                          className={`border-b border-white/[0.06] px-6 py-4 ${
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

            <p className="px-6 py-4 text-xs leading-6 text-slate-500">
              Resource allocations and limits are based on the published
              WordPress Hosting specifications.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0B1530] py-20 sm:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10">
              <p className="mb-4 text-xs font-bold tracking-[0.24em] text-cyan-300">
                WORDPRESS HOSTING FAQ
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                Frequently asked questions
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Answers to common questions about plans, features,
                migration and billing.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-white/10 bg-[#101B38] p-5 transition open:border-blue-400/40 open:bg-[#142344]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-white">
                    {faq.question}
                    <ChevronDown
                      size={20}
                      className="shrink-0 text-cyan-300 transition-transform group-open:rotate-180"
                    />
                  </summary>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 py-16 sm:py-20">
        <div className="pointer-events-none absolute -right-20 -top-40 size-96 rounded-full bg-cyan-400/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 size-96 rounded-full bg-fuchsia-400/20 blur-[100px]" />

        <div className="container-shell relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-xs font-bold tracking-[0.2em] text-blue-100">
              YOUR WORDPRESS JOURNEY STARTS HERE
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to power your WordPress website?
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-blue-100">
              Explore the plans or contact the team for help with your
              existing WordPress website and migration.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-blue-700 shadow-xl transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Talk to the team
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
