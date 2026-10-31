
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  HeartHandshake,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Shroti Host",
  description:
    "Discover Shroti Host — an Indian hosting and software development company helping students, developers, startups and businesses build online.",
};

const hostingServices = [
  {
    number: "01",
    title: "Shared Hosting",
    description:
      "A straightforward starting point for personal websites, blogs and growing businesses.",
    href: "/hosting/shared",
  },
  {
    number: "02",
    title: "WordPress Hosting",
    description:
      "Hosting tuned for WordPress and WooCommerce websites.",
    href: "/hosting/wordpress",
  },
  {
    number: "03",
    title: "Unlimited Hosting",
    description:
      "Unmetered storage and bandwidth, subject to the fair-use policy.",
    href: "/hosting/unlimited",
  },
  {
    number: "04",
    title: "Reseller Hosting",
    description:
      "White-label hosting accounts for agencies and entrepreneurs.",
    href: "/hosting/reseller",
  },
];

const developmentServices = [
  "Web development",
  "App development",
  "E-commerce development",
  "SaaS development",
  "Custom software",
];

const principles = [
  {
    icon: HeartHandshake,
    title: "Customer first",
    description:
      "Every decision should make hosting and building online easier for our customers.",
    color: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Transparency",
    description:
      "Clear pricing, straightforward policies and honest communication.",
    color: "violet",
  },
  {
    icon: Zap,
    title: "Performance",
    description:
      "Infrastructure and tools designed to help websites run smoothly.",
    color: "cyan",
  },
  {
    icon: Sparkles,
    title: "Accessible by design",
    description:
      "Approachable for beginners, with options that can grow alongside experienced developers.",
    color: "pink",
  },
];

const milestones = [
  {
    year: "2023",
    label: "The beginning",
    title: "Shroti Host was founded",
    description:
      "Started with a simple idea: hosting should not be complicated or overpriced.",
    status: "Started",
  },
  {
    year: "2023–2025",
    label: "Growing together",
    title: "Building with customers",
    description:
      "Serving students, freelancers and small businesses as they bring their ideas online.",
    status: "Growth",
  },
  {
    year: "2026",
    label: "More infrastructure",
    title: "VPS hosting",
    description:
      "Expanding the hosting range with Linux servers and full root access.",
    status: "Launched",
  },
  {
    year: "2026",
    label: "The next chapter",
    title: "Platform rebuild",
    description:
      "A refreshed website experience designed to make discovering and choosing services easier.",
    status: "In progress",
  },
];

const commitments = [
  "A 7-day money-back guarantee on a first web hosting purchase, subject to exclusions.",
  "Renewal prices match advertised prices.",
  "Applicable taxes are calculated at checkout.",
  "A published 99.9% uptime target, not a contractual service-credit SLA.",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b18] text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#080e20]">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute -bottom-48 left-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="container-shell section-spacing">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-blue-200">
              <Sparkles size={15} />
              A little about us
            </div>

            <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              Hosting and software,
              <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
                built in India.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Web hosting, domains and custom software for students,
              developers, startups and businesses — with honest pricing
              and support from the team behind the infrastructure.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/hosting/shared"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
              >
                Explore hosting
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Talk to our team
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-bold text-white">2023</p>
                <p className="mt-1 text-sm text-slate-400">Founded</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">India</p>
                <p className="mt-1 text-sm text-slate-400">
                  Based and serving customers
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-3xl font-bold text-white">One team</p>
                <p className="mt-1 text-sm text-slate-400">
                  Hosting and development
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="container-shell section-spacing">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              Who we are
            </p>
            <h2 className="section-heading mt-4 text-white">
              More than a place to host your website.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-400">
            <p>
              Shroti Host is an Indian web hosting and software development
              company founded in 2023 by Priyanshu Shroti. It operates as the
              trading brand of Shroti Enterprises, a micro enterprise
              registered under India&apos;s MSME Udyam scheme.
            </p>
            <p>
              We bring hosting, domains and software development together,
              helping customers move from an initial idea to a website or
              application that is ready for the world.
            </p>
            <p>
              Our approach is simple: make technology easier to access,
              keep pricing understandable and provide support through
              real communication.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold text-cyan-400 transition hover:text-cyan-300"
            >
              Get in touch
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* HOSTING SERVICES */}
      <section className="border-y border-white/10 bg-[#0b1224]">
        <div className="container-shell section-spacing">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              What we host
            </p>
            <h2 className="section-heading mt-4 text-white">
              Everything you need to get online.
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              From your first website to managing websites for multiple
              clients, explore hosting options designed for different needs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {hostingServices.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-[#14203a] to-[#0d1529] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-950/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-cyan-400">
                    {service.number}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="text-slate-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                  />
                </div>
                <h3 className="mt-8 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-400">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400">
                  Explore service
                  <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SOFTWARE DEVELOPMENT */}
      <section className="container-shell section-spacing">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              What we build
            </p>
            <h2 className="section-heading mt-4 text-white">
              Ideas deserve great execution.
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              Hosting is only one part of the journey. We also work on
              software and digital experiences that help businesses bring
              their ideas to life.
            </p>

            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Explore development services
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#14203b] to-[#11132c] p-8 text-white sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
              <Code2 size={28} />
            </div>
            <h3 className="mt-7 text-2xl font-bold">
              Development capabilities
            </h3>
            <div className="mt-7 space-y-4">
              {developmentServices.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 border-b border-white/10 pb-4 last:border-0"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-cyan-300"
                  />
                  <span className="text-slate-200">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-y border-white/10 bg-[#0b1224]">
        <div className="container-shell section-spacing">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
              What matters to us
            </p>
            <h2 className="section-heading mt-4 text-white">
              The principles behind our work.
            </h2>
            <p className="mt-5 leading-8 text-slate-400">
              Technology should work for people. These principles guide how
              we approach our services and customer experience.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((principle) => {
              const Icon = principle.icon;

              const iconStyle =
                principle.color === "blue"
                  ? "bg-blue-500/15 text-blue-300"
                  : principle.color === "violet"
                    ? "bg-violet-500/15 text-violet-300"
                    : principle.color === "cyan"
                      ? "bg-cyan-500/15 text-cyan-300"
                      : "bg-pink-500/15 text-pink-300";

              return (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#14203a] to-[#0e172c] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconStyle}`}
                  >
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-white">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="container-shell section-spacing">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
            Our journey
          </p>
          <h2 className="section-heading mt-4 text-white">
            Where we&apos;ve been. Where we&apos;re going.
          </h2>
          <p className="mt-5 leading-8 text-slate-400">
            A look at the milestones that have shaped Shroti Host and the
            work still ahead.
          </p>
        </div>

        <div className="relative mt-14 space-y-8 before:absolute before:bottom-8 before:left-[15px] before:top-4 before:w-px before:bg-white/15 sm:ml-3">
          {milestones.map((milestone) => (
            <div
              key={milestone.title}
              className="relative grid gap-4 pl-12 sm:grid-cols-[150px_1fr] sm:gap-8"
            >
              <span className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#070b18] bg-blue-500 shadow-sm shadow-blue-500/30">
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>

              <div>
                <p className="font-bold text-cyan-400">
                  {milestone.year}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {milestone.label}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#121d36] to-[#0d1529] p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-bold text-white">
                    {milestone.title}
                  </h3>
                  <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300">
                    {milestone.status}
                  </span>
                </div>
                <p className="mt-3 leading-7 text-slate-400">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="border-y border-white/10 bg-[#0b1224] text-white">
        <div className="container-shell section-spacing">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                Our commitments
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Clear expectations. No unnecessary surprises.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                We want customers to understand what they are purchasing.
                That means being clear about pricing, policies and service
                expectations.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-white"
              >
                Ask us a question
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="space-y-5">
              {commitments.map((item) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-cyan-300"
                  />
                  <p className="leading-7 text-slate-200">{item}</p>
                </div>
              ))}

              <p className="text-sm leading-6 text-slate-400">
                Refund exclusions include domains, setup fees, renewals
                and VPS plans. Please read the full policies before
                purchasing.
              </p>

              <div className="flex flex-wrap gap-5 text-sm font-semibold">
                <Link
                  href="/terms"
                  className="text-blue-300 transition hover:text-white"
                >
                  Terms and conditions
                </Link>
                <Link
                  href="/refund-policy"
                  className="text-blue-300 transition hover:text-white"
                >
                  Refund policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-shell section-spacing">
        <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-800 via-[#25206b] to-[#10102c] px-7 py-14 text-center text-white shadow-2xl shadow-blue-950/30 sm:px-14 sm:py-20">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <Rocket size={27} />
            </div>

            <h2 className="mt-7 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Ready to build something?
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-8 text-blue-100">
              Start with a domain, launch your website or talk to our team
              about your next software project.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/hosting/shared"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-blue-800 transition hover:bg-blue-50"
              >
                Explore hosting
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Contact us
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
