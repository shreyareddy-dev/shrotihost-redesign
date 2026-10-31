
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Globe2,
  Layers3,
  MonitorSmartphone,
  Rocket,
  ShoppingCart,
  Workflow,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Web Development",
    description:
      "Build responsive, user-friendly websites that communicate your brand and make it easy for visitors to engage with your business.",
    features: [
      "Responsive website development",
      "Business and portfolio websites",
      "Frontend and backend development",
      "Website maintenance",
    ],
  },
  {
    number: "02",
    icon: MonitorSmartphone,
    title: "App Development",
    description:
      "Create digital applications designed around your users, business requirements and product goals.",
    features: [
      "Application planning",
      "User interface development",
      "Backend and API integration",
      "Application improvements",
    ],
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "Develop online shopping experiences that help businesses showcase products and manage their digital storefronts.",
    features: [
      "Online store development",
      "Product catalogue integration",
      "Shopping cart experiences",
      "Payment integration",
    ],
  },
  {
    number: "04",
    icon: Layers3,
    title: "SaaS Development",
    description:
      "Turn a software idea into a web-based product with the features and architecture needed for its intended users.",
    features: [
      "SaaS product development",
      "User authentication",
      "Database and API development",
      "Third-party integrations",
    ],
  },
  {
    number: "05",
    icon: Code2,
    title: "Custom Software",
    description:
      "Build software around specific workflows, operational requirements and problems that off-the-shelf tools may not address.",
    features: [
      "Custom business applications",
      "Workflow automation",
      "API development",
      "System integration",
    ],
  },
  {
    number: "06",
    icon: Workflow,
    title: "Backend Development",
    description:
      "Develop the server-side components that support applications, manage data and connect different systems.",
    features: [
      "Backend application development",
      "REST API development",
      "Database integration",
      "Application architecture",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We start by understanding your idea, requirements and the problem you want to solve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the scope, technical approach and development priorities for the project.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Build the solution in stages, keeping the project requirements in focus.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Prepare the solution for handover and discuss the next steps for your project.",
  },
];

const technologies = [
  "Web applications",
  "Frontend development",
  "Backend systems",
  "Databases",
  "REST APIs",
  "Cloud infrastructure",
  "E-commerce platforms",
  "Third-party integrations",
];

export const metadata = {
  title: "Development Services | Shroti Host",
  description:
    "Explore web development, app development, e-commerce, SaaS and custom software development services from Shroti Host.",
};

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#071126] text-white">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#050B20] text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute -bottom-48 left-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="container-shell section-spacing">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-blue-200">
              <Sparkles size={15} />
              Development services
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              From ideas to
              <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
                digital products.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Explore development services for websites, applications,
              online stores and custom software. Start with an idea
              and discuss the solution your business needs.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400"
              >
                Explore services
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-7 py-4 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10"
              >
                Discuss your project
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-16 grid max-w-xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-lg font-bold text-white">Web</p>
                <p className="mt-1 text-sm text-slate-400">
                  Development
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-white">Applications</p>
                <p className="mt-1 text-sm text-slate-400">
                  Digital products
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="text-lg font-bold text-white">Software</p>
                <p className="mt-1 text-sm text-slate-400">
                  Custom solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section
        id="services"
        className="bg-[#0B1530] text-white"
      >
        <div className="container-shell section-spacing">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              What we offer
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Development services for your next project.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Explore different development capabilities and find
              a starting point for your requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.number}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-[#172747] to-[#101B34] p-7 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-cyan-900/20"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-cyan-400">
                      {service.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-cyan-300 transition group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white">
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 min-h-20 text-sm leading-7 text-slate-300">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-0.5 shrink-0 text-cyan-400"
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-cyan-200"
                  >
                    Discuss this service
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="bg-[#071126] text-white">
        <div className="container-shell section-spacing">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Beyond development
              </p>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Development and hosting in one ecosystem.
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                A digital product needs more than code. Hosting,
                databases, APIs and integrations all play a role
                in bringing an application online.
              </p>

              <Link
                href="/hosting/shared"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400"
              >
                Explore hosting
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#172747] to-[#101B34] p-8 shadow-2xl shadow-black/20 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300">
                <Database size={28} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-white">
                Technology areas
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                Technologies and components commonly involved
                in modern software projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-cyan-300/20 bg-cyan-400/[0.06] px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/10"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#0B1530] text-white">
        <div className="container-shell section-spacing">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              How we approach projects
            </p>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              A clear path from idea to delivery.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              Every project has different requirements. A structured
              approach helps clarify the work and the expected outcome.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#172747] to-[#101B34] p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/10 text-lg font-extrabold text-cyan-300">
                  {step.number}
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOSTING CONNECTION */}
      <section className="bg-[#071126] text-white">
        <div className="container-shell section-spacing">
          <div className="grid gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#172747] to-[#101B34] p-7 shadow-xl shadow-black/10 lg:grid-cols-[1fr_auto] lg:items-center sm:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Need a place to launch?
              </p>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Bring your website online with hosting.
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Explore hosting options for websites and applications.
                Choose a plan according to your project&apos;s requirements.
              </p>
            </div>

            <Link
              href="/hosting/shared"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400"
            >
              View hosting plans
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0B1530] px-4 py-16 sm:py-20">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-700 via-indigo-800 to-[#050B20] px-7 py-14 text-center text-white shadow-2xl shadow-blue-950/30 sm:px-14 sm:py-20">
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                <Rocket size={27} />
              </div>

              <h2 className="mt-7 text-3xl font-extrabold tracking-tight sm:text-5xl">
                Have an idea worth building?
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-8 text-blue-100">
                Tell us about your requirements and start a conversation
                about your next digital project.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold !text-blue-800 transition hover:bg-blue-50"
                >
                  Discuss your project
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  About Shroti Host
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
