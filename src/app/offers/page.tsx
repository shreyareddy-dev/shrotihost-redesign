
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  CircleHelp,
  Gift,
  Globe2,
  Headphones,
  ShieldCheck,
  Tag,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Offers and Hosting Plans | Shroti Host",
  description:
    "Explore Shroti Host hosting plans, included features and available services. Find a hosting solution for your website.",
};

const highlights = [
  {
    icon: Zap,
    title: "Hosting for every stage",
    description:
      "Explore shared, WordPress, unlimited, reseller and VPS hosting options.",
    color: "text-blue-300",
    background: "bg-blue-500/15",
  },
  {
    icon: ShieldCheck,
    title: "Features included",
    description:
      "Compare the security, backup and management features included with each plan.",
    color: "text-violet-300",
    background: "bg-violet-500/15",
  },
  {
    icon: Headphones,
    title: "Support when you need it",
    description:
      "Contact the Shroti Host support team for help choosing a suitable plan.",
    color: "text-cyan-300",
    background: "bg-cyan-500/15",
  },
];

const hostingOptions = [
  {
    name: "Shared Hosting",
    description:
      "A starting point for personal websites, blogs and small businesses.",
    price: "From ₹49/month",
    href: "/hosting/shared",
    tag: "For beginners",
    icon: Globe2,
    accent: "from-blue-500 to-cyan-400",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    name: "WordPress Hosting",
    description:
      "Hosting designed for WordPress websites and content publishing.",
    price: "From ₹69/month",
    href: "/hosting/wordpress",
    tag: "For WordPress",
    icon: Zap,
    accent: "from-violet-500 to-fuchsia-400",
    glow: "group-hover:shadow-violet-500/10",
  },
  {
    name: "Unlimited Hosting",
    description:
      "Unmetered storage and bandwidth with allocated server resources.",
    price: "From ₹199/month",
    href: "/hosting/unlimited",
    tag: "For growing websites",
    icon: ShieldCheck,
    accent: "from-cyan-400 to-teal-400",
    glow: "group-hover:shadow-cyan-500/10",
  },
  {
    name: "Reseller Hosting",
    description:
      "Start offering hosting services to customers under your own brand.",
    price: "From ₹299/month",
    href: "/hosting/reseller",
    tag: "For businesses",
    icon: Headphones,
    accent: "from-orange-400 to-amber-400",
    glow: "group-hover:shadow-orange-500/10",
  },
  {
    name: "Master Reseller",
    description:
      "Create reseller accounts and build a hosting business network.",
    price: "From ₹499/month",
    href: "/hosting/master-reseller",
    tag: "For hosting providers",
    icon: ServerIcon,
    accent: "from-pink-500 to-rose-400",
    glow: "group-hover:shadow-pink-500/10",
  },
  {
    name: "VPS Hosting",
    description:
      "Get root access and allocated virtual server resources.",
    price: "From ₹499/month",
    href: "/hosting/vps",
    tag: "For developers",
    icon: Tag,
    accent: "from-indigo-400 to-blue-500",
    glow: "group-hover:shadow-indigo-500/10",
  },
];

function ServerIcon({ size = 24 }: { size?: number }) {
  return <Globe2 size={size} />;
}

const faqs = [
  {
    q: "Are there any active promotional discounts?",
    a: "This page does not advertise a specific active coupon or discount. Please check the official client portal for current checkout pricing and any available promotions.",
  },
  {
    q: "Where can I compare hosting prices?",
    a: "Visit the individual hosting pages to compare plan prices, resource allocations and included features.",
  },
  {
    q: "Are taxes included in the listed prices?",
    a: "Applicable taxes may be additional. Review the final order summary in the client portal before completing payment.",
  },
  {
    q: "Can I ask for help choosing a hosting plan?",
    a: "Yes. Visit the Contact page to reach the Shroti Host support team.",
  },
];

export default function OffersPage() {
  return (
    <main className="overflow-hidden bg-[#080D22] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#05091b]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.30),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.16),transparent_45%),radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_65%)]" />
        <div className="absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="container-shell grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              <Gift size={16} />
              Explore hosting options
            </span>

            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              The right hosting.
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                The right value.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Explore hosting plans for websites, businesses, developers and
              hosting providers. Compare features and find a solution that
              fits your requirements.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#hosting-options" className="primary-button">
                Explore hosting plans <ArrowRight size={18} />
              </a>
              <Link
                href="/contact"
                className="secondary-button border-white/20 text-white hover:bg-white/10"
              >
                Contact support
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-cyan-300" />
                Multiple hosting options
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-cyan-300" />
                Clear plan comparisons
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-cyan-300" />
                Flexible configurations
              </span>
            </div>
          </div>

          {/* Hosting overview illustration */}
          <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#14234a] via-[#101831] to-[#17113b] p-7 shadow-2xl shadow-blue-950/40 sm:p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative flex items-center gap-3 border-b border-white/10 pb-5">
              <div className="rounded-xl bg-blue-500/20 p-3 text-blue-300">
                <Tag size={25} />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Explore your options</h2>
                <p className="text-sm text-slate-400">
                  Compare before you choose
                </p>
              </div>
            </div>

            <div className="relative mt-7 space-y-4">
              {[
                ["Compare monthly plan prices", "text-blue-300"],
                ["Review included hosting features", "text-violet-300"],
                ["Check resource allocations", "text-cyan-300"],
                ["Choose a suitable hosting category", "text-emerald-300"],
              ].map(([item, color]) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <Check size={18} className={`shrink-0 ${color}`} />
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <p className="relative mt-5 text-xs leading-5 text-slate-400">
              Pricing and plan availability are subject to the official
              checkout information.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 lg:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Why explore Shroti Host?
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Choose with confidence.
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Understand what each hosting category offers before making
              your decision.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#15213e] to-[#101a32] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div
                  className={`w-fit rounded-2xl p-3 ${item.background} ${item.color}`}
                >
                  <item.icon size={26} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting catalogue */}
      <section
        id="hosting-options"
        className="scroll-mt-24 border-y border-white/5 bg-[#0c1530] py-20 lg:py-24"
      >
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Hosting catalogue
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Find your hosting solution.
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Explore the available hosting categories and visit their
              individual pages for detailed plan comparisons.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {hostingOptions.map((item) => (
              <article
                key={item.name}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#15213e] to-[#0d162d] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl ${item.glow}`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${item.accent}`}
                />

                <div className="flex items-center justify-between gap-3 pt-2">
                  <div
                    className={`rounded-xl bg-gradient-to-br ${item.accent} p-[1px]`}
                  >
                    <div className="rounded-xl bg-[#14203c] p-3 text-white">
                      <item.icon size={23} />
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-medium text-slate-300">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">{item.name}</h3>
                <p className="mt-3 min-h-14 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                  <span className="font-semibold text-cyan-300">
                    {item.price}
                  </span>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-cyan-200"
                  >
                    View plans <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20">
        <div className="container-shell">
          <div className="relative grid gap-8 overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#142d64] via-[#19265a] to-[#101b3c] p-8 shadow-2xl shadow-blue-950/30 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-violet-400/10 blur-3xl" />

            <div className="relative">
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Need a recommendation?
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Not sure which plan to choose?
              </h2>
              <p className="mt-4 leading-7 text-blue-100/80">
                Share your website type, expected traffic and technical
                requirements with the support team to discuss a suitable
                hosting option.
              </p>
            </div>

            <div className="relative flex flex-wrap gap-4 lg:justify-end">
              <Link href="/contact" className="primary-button">
                Talk to support <ArrowRight size={18} />
              </Link>
              <a
                href="https://portal.shrotihost.in"
                target="_blank"
                rel="noreferrer"
                className="secondary-button border-white/20 text-white hover:bg-white/10"
              >
                Client portal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-white/5 bg-[#0c1530] py-20 lg:py-24">
        <div className="container-shell max-w-4xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Frequently asked questions
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Before you choose a plan.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-100">
                  <span className="flex items-center gap-3">
                    <CircleHelp size={19} className="shrink-0 text-cyan-300" />
                    {faq.q}
                  </span>
                  <span className="text-xl text-slate-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl pl-8 text-sm leading-7 text-slate-400">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-700 px-7 py-12 text-white shadow-2xl shadow-blue-950/40 sm:px-12">
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight">
                  Ready to find your hosting plan?
                </h2>
                <p className="mt-3 leading-7 text-blue-50">
                  Explore the plans and choose a solution that suits your next
                  project.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/hosting/shared"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
                >
                  Explore hosting <ArrowRight size={17} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
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
