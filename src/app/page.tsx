
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Globe2,
  Server,
  ShieldCheck,
  Code2,
  Zap,
  Headphones,
  CheckCircle2,
  Sparkles,
  Layers3,
  Rocket,
} from "lucide-react";

const products = [
  {
    icon: Server,
    number: "01",
    title: "Shared Hosting",
    description:
      "A practical starting point for personal websites, blogs and growing projects.",
    href: "/hosting/shared",
    label: "Explore hosting",
    tag: "GET STARTED",
    gradient: "from-blue-500 to-cyan-400",
    glow: "bg-blue-500/20",
  },
  {
    icon: Globe2,
    number: "02",
    title: "WordPress Hosting",
    description:
      "Hosting options for websites built with the WordPress platform.",
    href: "/hosting/wordpress",
    label: "Explore WordPress",
    tag: "FOR WORDPRESS",
    gradient: "from-violet-500 to-fuchsia-400",
    glow: "bg-violet-500/20",
  },
  {
    icon: Zap,
    number: "03",
    title: "Reseller Hosting",
    description:
      "Hosting plans for people who want to manage hosting accounts for clients.",
    href: "/hosting/reseller",
    label: "Explore reseller plans",
    tag: "GROW YOUR BUSINESS",
    gradient: "from-orange-500 to-amber-400",
    glow: "bg-orange-500/20",
  },
  {
    icon: Code2,
    number: "04",
    title: "Web Development",
    description:
      "Explore website development and digital solutions for your next project.",
    href: "/services",
    label: "Explore services",
    tag: "BUILD SOMETHING",
    gradient: "from-emerald-500 to-teal-400",
    glow: "bg-emerald-500/20",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Explore your options",
    description:
      "Compare hosting products and find an option that matches your project.",
    color: "text-blue-300",
    bg: "bg-blue-500/15",
    border: "hover:border-blue-400/40",
  },
  {
    icon: Rocket,
    number: "02",
    title: "Plan your next step",
    description:
      "Discover hosting, domains and development services in one place.",
    color: "text-violet-300",
    bg: "bg-violet-500/15",
    border: "hover:border-violet-400/40",
  },
  {
    icon: Headphones,
    number: "03",
    title: "Get in touch",
    description:
      "Have a question? Visit the contact page to find the available support channels.",
    color: "text-emerald-300",
    bg: "bg-emerald-500/15",
    border: "hover:border-emerald-400/40",
  },
];

const journeySteps = [
  {
    icon: Server,
    title: "Choose hosting",
    detail: "Explore hosting plans",
    href: "/hosting/shared",
    color: "text-blue-300",
    bg: "bg-blue-500/15",
  },
  {
    icon: Globe2,
    title: "Find your domain",
    detail: "Discover domain options",
    href: "/domains",
    color: "text-violet-300",
    bg: "bg-violet-500/15",
  },
  {
    icon: Code2,
    title: "Build your website",
    detail: "Explore development services",
    href: "/services",
    color: "text-cyan-300",
    bg: "bg-cyan-500/15",
  },
];

export default function HomePage() {
  return (
    <main id="main-content">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#080D2B] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_20%,rgba(37,99,235,0.65),transparent_45%),radial-gradient(ellipse_at_90%_15%,rgba(124,58,237,0.60),transparent_42%),radial-gradient(ellipse_at_55%_85%,rgba(6,182,212,0.30),transparent_48%),radial-gradient(ellipse_at_80%_75%,rgba(219,39,119,0.20),transparent_42%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#101C50]/50 via-transparent to-[#160B38]/60" />
        <div className="pointer-events-none absolute -left-32 top-1/4 size-80 rounded-full bg-blue-500/30 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 top-1/3 size-80 rounded-full bg-violet-500/30 blur-[100px]" />

        <div className="container-shell relative grid min-h-[650px] items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200">
              <Sparkles size={16} className="text-cyan-300" />
              Hosting · Domains · Digital Services
            </div>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
              Build your online presence with{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                confidence.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl">
              Explore hosting plans, domain services and digital solutions
              designed to help you take your next project online.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/hosting/shared"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 font-bold text-white shadow-xl shadow-blue-600/25 transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/30"
              >
                Explore hosting
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/domains"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/[0.08] px-7 font-semibold text-white transition hover:border-cyan-300/60 hover:bg-white/15"
              >
                Find a domain
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 text-sm text-slate-200">
              {["Hosting options", "Domain services", "Digital solutions"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 size={17} className="text-cyan-400" />
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* PROJECT PANEL */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-blue-500/40 via-violet-500/30 to-cyan-400/35 blur-2xl" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-gradient-to-br from-[#1C2B58]/95 via-[#172044]/95 to-[#171638]/95 p-5 shadow-2xl shadow-black/40 sm:p-8">
              <div className="absolute -right-16 -top-16 size-48 rounded-full bg-violet-500/20 blur-3xl" />

              <div className="relative flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                  <p className="text-sm font-semibold tracking-wider text-cyan-300">
                    YOUR NEXT PROJECT
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight">
                    Start with the right tools
                  </h2>
                </div>
                <div className="flex size-14 items-center justify-center rounded-2xl border border-blue-300/20 bg-gradient-to-br from-blue-500/30 to-violet-500/30 text-cyan-200">
                  <Globe2 size={27} />
                </div>
              </div>

              <div className="relative mt-6 space-y-4">
                {journeySteps.map((item, index) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.12]"
                  >
                    <div
                      className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
                    >
                      <item.icon size={22} />
                    </div>
                    <div>
                      <p className="font-bold text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-300">
                        {item.detail}
                      </p>
                    </div>
                    <span className="ml-auto text-sm font-bold text-slate-400 transition group-hover:text-cyan-300">
                      0{index + 1}
                    </span>
                  </Link>
                ))}
              </div>

              <Link
                href="/contact"
                className="group relative mt-6 flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-fuchsia-600 px-5 py-4 font-bold text-white shadow-lg shadow-blue-950/40 transition hover:brightness-110"
              >
                Talk to the team
                <ArrowRight
                  size={19}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <p className="relative mt-4 text-center text-xs font-medium tracking-[0.2em] text-slate-300">
                YOUR IDEA. YOUR NEXT STEP.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      </section>

      {/* PRODUCTS SECTION */}
      <section className="relative isolate overflow-hidden bg-[#0D1733] py-24 text-white">
        <div className="pointer-events-none absolute -right-32 top-10 size-96 rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 size-96 rounded-full bg-violet-600/15 blur-[120px]" />

        <div className="container-shell relative">
          <div className="section-heading">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Explore our products
            </p>
            <h2 className="text-white">
              Everything you need to get started online
            </h2>
            <p className="text-slate-300">
              Discover hosting and digital services for different website
              needs, from a first project to a growing online business.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#172444] p-6 transition duration-300 hover:-translate-y-2 hover:border-white/25 hover:bg-[#1C2D52] hover:shadow-2xl hover:shadow-blue-950/40"
              >
                <div
                  className={`absolute -right-12 -top-12 size-40 rounded-full ${product.glow} blur-3xl transition duration-300 group-hover:scale-150`}
                />

                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${product.gradient}`}
                />

                <div className="relative flex items-center justify-between">
                  <div
                    className={`flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient} text-white shadow-lg`}
                  >
                    <product.icon size={25} />
                  </div>
                  <span className="text-xs font-bold tracking-widest text-slate-400">
                    {product.number}
                  </span>
                </div>

                <p className="relative mt-7 text-[10px] font-extrabold tracking-[0.16em] text-cyan-300">
                  {product.tag}
                </p>

                <h3 className="relative mt-2 text-xl font-bold tracking-tight text-white">
                  {product.title}
                </h3>

                <p className="relative mt-3 flex-1 text-sm leading-7 text-slate-300">
                  {product.description}
                </p>

                <Link
                  href={product.href}
                  className="relative mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition-all group-hover:gap-3 group-hover:text-white"
                >
                  {product.label}
                  <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/offers"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10 hover:text-cyan-200"
            >
              View available offers
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="relative isolate overflow-hidden bg-[#07152B] py-24 text-white">
        <div className="pointer-events-none absolute -left-32 top-20 size-96 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full bg-violet-600/15 blur-[120px]" />

        <div className="container-shell relative">
          <div className="section-heading">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              A simpler way forward
            </p>
            <h2 className="text-white">
              Find the right direction for your online journey
            </h2>
            <p className="text-slate-300">
              Explore your options and get the information you need to make
              your next move.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#142746] to-[#101D38] p-8 transition duration-300 hover:-translate-y-2 ${benefit.border} hover:shadow-2xl hover:shadow-black/20`}
              >
                <span className="absolute right-7 top-7 text-sm font-bold text-white/30">
                  {benefit.number}
                </span>

                <div
                  className={`flex size-14 items-center justify-center rounded-2xl ${benefit.bg} ${benefit.color} transition duration-300 group-hover:rotate-[-6deg] group-hover:scale-110`}
                >
                  <benefit.icon size={25} />
                </div>

                <h3 className="mt-7 text-xl font-bold tracking-tight text-white">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {benefit.description}
                </p>

                <div className="mt-7 h-1 w-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-all duration-300 group-hover:w-24" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ONLINE JOURNEY SECTION */}
      <section className="relative overflow-hidden bg-[#07152B] py-20">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1748C8] via-[#3436B9] to-[#642CC7] px-7 py-12 text-white shadow-2xl shadow-indigo-900/20 sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-36 size-96 rounded-full border-[55px] border-white/[0.07]" />
            <div className="pointer-events-none absolute -bottom-48 left-1/4 size-96 rounded-full bg-cyan-300/15 blur-[90px]" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-bold tracking-wider text-cyan-100">
                  <Layers3 size={15} />
                  YOUR ONLINE JOURNEY
                </div>

                <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                  From your first idea to your next big project.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-blue-100">
                  Explore your options, discover the available services and
                  take the next step towards building your online presence.
                </p>
              </div>

              <Link
                href="/services"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-white px-7 font-bold text-blue-800 shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-cyan-50"
              >
                Explore services
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative isolate overflow-hidden bg-[#050B20] py-20 text-white">
        <div className="pointer-events-none absolute -right-20 -top-40 size-96 rounded-full bg-blue-600/25 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 size-96 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="container-shell relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              LET&apos;S MAKE IT HAPPEN
            </p>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-slate-300">
              Explore the available services or get in touch with the team to
              discuss your requirements.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex min-h-14 shrink-0 items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-400 px-7 font-bold text-[#07152B] shadow-xl shadow-cyan-500/20 transition duration-300 hover:-translate-y-1 hover:from-cyan-300 hover:to-blue-300"
          >
            Contact us
            <ArrowRight
              size={19}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
