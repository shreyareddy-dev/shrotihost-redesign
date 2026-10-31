
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Code2,
  Globe,
  Layers3,
  MonitorSmartphone,
  ShoppingCart,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio | ShrotiHost",
  description:
    "Explore the types of websites and digital solutions ShrotiHost can help businesses build.",
};

const projectTypes = [
  {
    number: "01",
    icon: Globe,
    category: "Web Development",
    title: "Business websites",
    description:
      "Professional websites that introduce a business, communicate its services, and make it easier for customers to get in touch.",
    tags: ["Responsive design", "Business presence", "Contact flows"],
    accent: "from-blue-500 to-cyan-400",
    glow: "bg-blue-500/10",
    iconColor: "text-blue-300",
    border: "hover:border-blue-400/40",
  },
  {
    number: "02",
    icon: ShoppingCart,
    category: "E-commerce",
    title: "Online stores",
    description:
      "Digital storefronts designed to present products, organize catalogues, and support a convenient shopping experience.",
    tags: ["Product catalogues", "Storefronts", "User experience"],
    accent: "from-violet-500 to-fuchsia-400",
    glow: "bg-violet-500/10",
    iconColor: "text-violet-300",
    border: "hover:border-violet-400/40",
  },
  {
    number: "03",
    icon: Layers3,
    category: "SaaS Development",
    title: "Web applications",
    description:
      "Browser-based applications built around business workflows, user needs, and practical product requirements.",
    tags: ["Web applications", "Dashboards", "Integrations"],
    accent: "from-cyan-500 to-teal-400",
    glow: "bg-cyan-500/10",
    iconColor: "text-cyan-300",
    border: "hover:border-cyan-400/40",
  },
  {
    number: "04",
    icon: MonitorSmartphone,
    category: "Application Development",
    title: "Application experiences",
    description:
      "Application interfaces designed to make digital products accessible across devices and screen sizes.",
    tags: ["Mobile-friendly", "Interfaces", "Responsive layouts"],
    accent: "from-orange-500 to-amber-400",
    glow: "bg-orange-500/10",
    iconColor: "text-orange-300",
    border: "hover:border-orange-400/40",
  },
  {
    number: "05",
    icon: Code2,
    category: "Backend Development",
    title: "Backend systems",
    description:
      "Server-side functionality, APIs, and integrations that help applications communicate and handle information.",
    tags: ["REST APIs", "Integrations", "Data handling"],
    accent: "from-emerald-500 to-green-400",
    glow: "bg-emerald-500/10",
    iconColor: "text-emerald-300",
    border: "hover:border-emerald-400/40",
  },
  {
    number: "06",
    icon: Blocks,
    category: "Custom Software",
    title: "Business solutions",
    description:
      "Purpose-built software experiences shaped around specific operational requirements and business processes.",
    tags: ["Custom workflows", "Automation", "Software solutions"],
    accent: "from-pink-500 to-rose-400",
    glow: "bg-pink-500/10",
    iconColor: "text-pink-300",
    border: "hover:border-pink-400/40",
  },
];

export default function PortfolioPage() {
  return (
    <main className="overflow-hidden bg-[#070B1A] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#080D20]">
        <div className="absolute -right-40 -top-40 -z-10 h-[550px] w-[550px] rounded-full bg-blue-600/20 blur-[130px]" />
        <div className="absolute -bottom-48 left-[20%] -z-10 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute right-[35%] top-20 -z-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-12 lg:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              <Layers3 size={16} />
              Our portfolio
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            </span>

            <h1 className="mt-8 text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              Digital ideas,
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                built into experiences.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              From business websites to custom applications, explore
              the kinds of digital solutions ShrotiHost offers to help
              businesses establish and grow their online presence.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-1 hover:from-blue-500 hover:to-indigo-500"
              >
                Discuss a project
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                Explore services
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Web experiences
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-violet-400" />
                Custom applications
              </span>
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-pink-400" />
                Digital solutions
              </span>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-blue-600/20 via-violet-600/15 to-cyan-500/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#18264B] via-[#101A36] to-[#11132B] p-5 shadow-2xl shadow-black/40 sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-medium tracking-wider text-slate-400">
                  DIGITAL STUDIO
                </span>
              </div>

              <div className="py-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-blue-900/40">
                    <Sparkles size={23} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      Your next big idea
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Starts with a strong digital foundation
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                    <Globe size={24} className="text-blue-300" />
                    <p className="mt-5 text-sm font-semibold text-white">
                      Web design
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Build your presence
                    </p>
                  </div>

                  <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5">
                    <Layers3 size={24} className="text-violet-300" />
                    <p className="mt-5 text-sm font-semibold text-white">
                      Applications
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Create digital products
                    </p>
                  </div>

                  <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5">
                    <Code2 size={24} className="text-cyan-300" />
                    <p className="mt-5 text-sm font-semibold text-white">
                      Development
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Bring ideas to life
                    </p>
                  </div>

                  <div className="rounded-2xl border border-pink-400/20 bg-pink-500/10 p-5">
                    <Blocks size={24} className="text-pink-300" />
                    <p className="mt-5 text-sm font-semibold text-white">
                      Custom software
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Solve real workflows
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <span className="text-xs text-slate-400">
                  Concept to implementation
                </span>
                <span className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
                  <span className="h-2 w-2 rounded-full bg-cyan-400" />
                  Explore possibilities
                </span>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-white/10 bg-[#151F3C] px-5 py-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <Code2 size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Built around your needs
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Practical digital solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project categories */}
      <section className="relative bg-[#070B1A] px-6 py-24 sm:px-8 lg:px-12">
        <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-blue-600/5 blur-[110px]" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-violet-600/5 blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                What we work on
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Solutions across the
                <span className="block text-slate-400">
                  digital landscape.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-slate-400">
              Explore the different service areas and digital
              experiences ShrotiHost can help bring to life.
            </p>
          </div>

          <div className="mt-7 max-w-3xl rounded-xl border border-amber-400/20 bg-amber-400/[0.06] px-5 py-4 text-sm leading-6 text-amber-100/80">
            These categories describe our service areas. They are not
            presented as verified client case studies or completed
            project claims.
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.number}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-[#10182D] p-7 transition duration-300 hover:-translate-y-2 hover:bg-[#141F39] hover:shadow-2xl hover:shadow-black/30 ${project.border}`}
                >
                  <div
                    className={`absolute -right-16 -top-16 h-44 w-44 rounded-full ${project.glow} opacity-0 blur-3xl transition duration-500 group-hover:opacity-100`}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${project.accent} bg-opacity-10`}
                      >
                        <Icon size={25} className="text-white" />
                      </div>

                      <span className="font-mono text-sm font-semibold text-slate-600">
                        / {project.number}
                      </span>
                    </div>

                    <p
                      className={`mt-8 bg-gradient-to-r ${project.accent} bg-clip-text text-xs font-bold uppercase tracking-[0.17em] text-transparent`}
                    >
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-xl font-bold text-white transition group-hover:text-cyan-100">
                      {project.title}
                    </h3>

                    <p className="mt-4 min-h-[112px] text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition group-hover:border-white/15 group-hover:bg-white/[0.07]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                      <span className="text-xs font-medium text-slate-500">
                        Explore possibilities
                      </span>
                      <ArrowUpRight
                        size={18}
                        className={`transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${project.iconColor}`}
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project CTA */}
      <section className="relative overflow-hidden border-y border-white/10 bg-[#0C1530] px-6 py-24 sm:px-8 lg:px-12">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-600/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Have an idea?
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let&apos;s discuss what you want to build.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">
              Every project starts with understanding the problem.
              Tell us about your requirements and we can discuss a
              suitable approach.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:-translate-y-1 hover:from-blue-500 hover:to-violet-500"
            >
              Start a conversation
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#18264A] to-[#11182F] p-8 shadow-2xl sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-cyan-300">
                <Code2 size={27} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-white">
                From concept to implementation
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                Explore ShrotiHost&apos;s development services to learn
                more about the solutions available for your next
                project.
              </p>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                Explore services
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
