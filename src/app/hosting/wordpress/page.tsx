
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Database,
  Gauge,
  Globe,
  Mail,
  ShieldCheck,
  Server,
  ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "WordPress Hosting",
  description:
    "Explore Shroti Host WordPress hosting plans with NVMe storage, LiteSpeed Cache, free SSL and daily backups.",
};

const plans = [
  {
    name: "WP Standard",
    slug: "wp-standard",
    price: "69",
    description:
      "A streamlined WordPress hosting plan for blogs, business sites and smaller content projects.",
    websites: "1",
    storage: "10 GB",
    bandwidth: "100 GB",
    ram: "1 GB",
    subdomains: "5",
    parked: "2",
    email: "5",
    databases: "5",
    ftp: "2",
    mailing: "5",
    apps: "5",
    emailStorage: "1 GB",
    popular: false,
    features: [
      "Free SSL certificate",
      "WordPress optimized hosting",
      "cPanel control panel",
      "Softaculous 1-click installer",
      "WordPress Manager by Softaculous",
      "LiteSpeed Cache support",
      "Imunify360 security protection",
      "Daily backups",
      "SSH access and Git version control",
    ],
  },
  {
    name: "WP Advance",
    slug: "wp-advance",
    price: "129",
    description:
      "A powerful WordPress hosting plan for growing sites that need more resources and flexibility.",
    websites: "3",
    storage: "20 GB",
    bandwidth: "200 GB",
    ram: "2 GB",
    subdomains: "10",
    parked: "2",
    email: "10",
    databases: "10",
    ftp: "5",
    mailing: "10",
    apps: "5",
    emailStorage: "2 GB",
    popular: true,
    features: [
      "Free SSL certificate",
      "WordPress optimized hosting",
      "cPanel control panel",
      "Softaculous 1-click installer",
      "WordPress Manager by Softaculous",
      "LiteSpeed Cache support",
      "Imunify360 security protection",
      "Daily backups",
      "SSH access and Git version control",
    ],
  },
  {
    name: "WP Ultimate",
    slug: "wp-ultimate",
    price: "179",
    description:
      "A high-capacity WordPress hosting plan for larger websites and heavier content libraries.",
    websites: "Unlimited",
    storage: "40 GB",
    bandwidth: "Unlimited",
    ram: "4 GB",
    subdomains: "Not specified",
    parked: "Unlimited",
    email: "Unlimited",
    databases: "Unlimited",
    ftp: "10",
    mailing: "Unlimited",
    apps: "Unlimited",
    emailStorage: "3 GB",
    popular: false,
    features: [
      "Free SSL certificate",
      "WordPress optimized hosting",
      "cPanel control panel",
      "Softaculous 1-click installer",
      "WordPress Manager by Softaculous",
      "LiteSpeed Cache support",
      "Imunify360 security protection",
      "Daily backups",
      "SSH access and Git version control",
    ],
  },
];

const comparison = [
  ["Websites", "1", "3", "Unlimited"],
  ["NVMe SSD storage", "10 GB", "20 GB", "40 GB"],
  ["Bandwidth", "100 GB", "200 GB", "Unlimited"],
  ["RAM", "1 GB", "2 GB", "4 GB"],
  ["Subdomains", "5", "10", "Not specified"],
  ["Parked domains", "2", "2", "Unlimited"],
  ["Email accounts", "5", "10", "Unlimited"],
  ["Databases", "5", "10", "Unlimited"],
  ["FTP accounts", "2", "5", "10"],
  ["Mailing lists", "5", "10", "Unlimited"],
  ["Passenger apps", "5", "5", "Unlimited"],
  ["Storage per email account", "1 GB", "2 GB", "3 GB"],
  ["Team users", "Up to 7", "Up to 7", "Up to 7"],
];

const included = [
  {
    icon: ShieldCheck,
    title: "Free SSL certificate",
    description:
      "SSL certificates are included with every WordPress hosting plan.",
  },
  {
    icon: Gauge,
    title: "LiteSpeed Cache",
    description:
      "LiteSpeed Cache support helps optimize WordPress website performance.",
  },
  {
    icon: Database,
    title: "Daily backups",
    description:
      "Daily backups are included across the WordPress hosting plans.",
  },
  {
    icon: Server,
    title: "WordPress Manager",
    description:
      "Manage WordPress installations using the Softaculous WordPress Manager.",
  },
  {
    icon: ShieldCheck,
    title: "Imunify360 protection",
    description:
      "Security protection is included with all three plans.",
  },
  {
    icon: Globe,
    title: "Softaculous installer",
    description:
      "Use the one-click installer for supported applications.",
  },
  {
    icon: Mail,
    title: "Domain email accounts",
    description:
      "Create email accounts with allocations based on your selected plan.",
  },
  {
    icon: Server,
    title: "SSH and Git access",
    description:
      "SSH access and Git version control are included in the listed plans.",
  },
];

const faqs = [
  {
    question: "What is WordPress hosting?",
    answer:
      "WordPress hosting is a hosting service optimized for websites built with WordPress. Shroti Host plans include WordPress optimization, LiteSpeed Cache support, Softaculous and a WordPress Manager.",
  },
  {
    question: "Which WordPress plan should I choose?",
    answer:
      "WP Standard supports one website, WP Advance supports three websites, and WP Ultimate supports unlimited websites. Compare storage, bandwidth, RAM and account limits before choosing.",
  },
  {
    question: "Can I install WordPress easily?",
    answer:
      "Yes. Softaculous 1-click installation and WordPress Manager by Softaculous are included.",
  },
  {
    question: "Is SSL included?",
    answer:
      "Yes. A free SSL certificate is included with every WordPress hosting plan.",
  },
  {
    question: "Are backups included?",
    answer:
      "Daily backups are included with all three WordPress hosting plans.",
  },
  {
    question: "Can I host multiple websites?",
    answer:
      "WP Standard supports one website, WP Advance supports three websites, and WP Ultimate supports unlimited websites.",
  },
  {
    question: "Does WordPress hosting include email?",
    answer:
      "Yes. The published plans include 5 email accounts on WP Standard, 10 on WP Advance and unlimited email accounts on WP Ultimate.",
  },
  {
    question: "Can I use SSH and Git?",
    answer:
      "SSH access and Git version control are listed as included features across all three WordPress hosting plans.",
  },
  {
    question: "How do I order a plan?",
    answer:
      "Select Order Now for your preferred plan. You will be taken to the Shroti Host ordering portal, where you can choose a domain option and continue configuring your order.",
  },
];

export default function WordPressHostingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#050B20] py-16 text-white sm:py-24 before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:size-[28rem] before:rounded-full before:bg-blue-600/25 before:blur-[120px] after:pointer-events-none after:absolute after:-right-40 after:top-20 after:size-[30rem] after:rounded-full after:bg-violet-600/20 after:blur-[130px]">
        <div className="container-shell relative z-10 w-full min-w-0">
          <div className="w-full min-w-0 max-w-3xl">
            <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-blue-300">
              <Server size={18} className="shrink-0" />
              WORDPRESS HOSTING
            </div>

            <h1 className="break-words text-4xl font-extrabold tracking-tight sm:text-6xl">
              WordPress Hosting{" "}
              <span className="text-blue-400">built for your website.</span>
            </h1>

            <p className="mt-6 w-full max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Give your WordPress website a home with NVMe storage,
              LiteSpeed Cache support, daily backups and WordPress
              management tools. Compare three plans and choose the
              resources that fit your website.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4">
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

            <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-4 text-xs text-slate-300 sm:flex sm:flex-wrap sm:gap-x-7 sm:text-sm">
              {[
                "WordPress optimized",
                "Free SSL",
                "Daily backups",
                "LiteSpeed Cache",
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
              Find your WordPress hosting plan
            </h2>

            <p className="text-slate-300">
              Start with one website or choose more resources for
              multiple WordPress projects.
            </p>
          </div>

          <div className="mt-10 grid min-w-0 grid-cols-1 items-stretch gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.slug}
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

                  <p className="mt-3 min-h-16 text-sm leading-6 text-slate-300">
                    {plan.description}
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
                    Monthly · Excluding applicable taxes
                  </p>
                </div>

                <div className="my-5 grid min-w-0 grid-cols-2 gap-2.5 sm:gap-3">
                  {[
                    ["Websites", plan.websites],
                    ["NVMe storage", plan.storage],
                    ["Bandwidth", plan.bandwidth],
                    ["RAM", plan.ram],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="min-w-0 rounded-xl border border-white/10 bg-[#0A142B] p-3"
                    >
                      <p className="text-xs text-slate-400">{label}</p>

                      <p className="mt-1 break-words text-sm font-bold text-white sm:text-base">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mb-5 space-y-2 border-b border-white/10 pb-5 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-400">Email accounts</span>
                    <span className="font-semibold text-white">{plan.email}</span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span className="text-slate-400">Databases</span>
                    <span className="font-semibold text-white">{plan.databases}</span>
                  </div>
                </div>

                <div className="mb-6 flex-1">
                  <p className="mb-4 text-sm font-bold text-white">
                    Included features
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

                <a
                  href={`https://portal.shrotihost.in/index.php/store/wordpress-hosting/${plan.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-xl px-3 py-3.5 text-center text-sm font-bold transition sm:px-5 ${
                    plan.popular
                      ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-[#061126] shadow-lg shadow-blue-500/20 hover:from-cyan-300 hover:to-blue-400"
                      : "border border-white/20 bg-white/5 text-white hover:border-cyan-300/50 hover:bg-white/10"
                  }`}
                >
                  <span>Order Now</span>
                  <ArrowRight size={17} className="shrink-0" />
                </a>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-400">
            Prices shown are the published monthly prices, excluding
            applicable taxes. Review the official ordering portal for
            available billing cycles and final charges.
          </p>
        </div>
      </section>

      {/* INCLUDED FEATURES */}
      <section className="section-spacing overflow-hidden bg-[#071126] text-white">
        <div className="container-shell w-full min-w-0">
          <div className="section-heading">
            <p className="mb-3 text-sm font-bold tracking-[0.2em] text-cyan-400">
              INCLUDED WITH EVERY PLAN
            </p>

            <h2 className="text-white">
              Everything you need to manage WordPress
            </h2>

            <p className="text-slate-300">
              Essential hosting, management and security features
              included across the three plans.
            </p>
          </div>

          <div className="mt-12 grid min-w-0 gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

            <h2 className="text-white">
              Compare WordPress hosting specifications
            </h2>

            <p className="text-slate-300">
              Review the published limits and allocations before
              selecting your plan.
            </p>
          </div>

          <div className="mt-12 min-w-0 max-w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111F3B] shadow-2xl shadow-black/20">
            <div className="max-w-full overflow-x-auto overscroll-x-contain">
              <table className="w-full min-w-[650px] border-collapse text-left text-sm text-slate-200">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 text-white">
                    <th className="px-6 py-5 font-semibold">
                      Specification
                    </th>

                    {plans.map((plan) => (
                      <th
                        key={plan.slug}
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
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing overflow-hidden bg-[#0B1530] text-white">
        <div className="container-shell w-full min-w-0">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10">
              <p className="mb-3 text-sm font-bold tracking-[0.2em] text-cyan-400">
                WORDPRESS HOSTING FAQ
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Frequently asked questions
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Helpful answers about plans, WordPress management,
                backups and ordering.
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

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 py-14 text-white sm:py-16">
        <div className="container-shell flex w-full min-w-0 flex-col items-start justify-between gap-7 md:flex-row md:items-center">
          <div className="min-w-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Ready to build with WordPress?
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-blue-100">
              Choose a plan, select your domain and get started
              with your WordPress website.
            </p>
          </div>

          <a
            href="https://portal.shrotihost.in/index.php/store/wordpress-hosting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold !text-blue-700 transition hover:bg-blue-50 sm:w-auto"
          >
            View WordPress plans
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}
