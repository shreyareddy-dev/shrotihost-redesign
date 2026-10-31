
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Users,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Keep learning",
    description:
      "Stay curious, explore new ideas, and keep improving your technical and creative skills.",
  },
  {
    icon: Rocket,
    title: "Build with purpose",
    description:
      "Focus on creating useful digital experiences and dependable solutions for customers.",
  },
  {
    icon: HeartHandshake,
    title: "Work together",
    description:
      "Value collaboration, clear communication, and a supportive working environment.",
  },
];

const areas = [
  "Web development",
  "Hosting infrastructure",
  "Technical support",
  "Digital solutions",
];

export default function CareersPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b18] text-white">
      {/* Hero */}
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(37,99,235,0.25),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(124,58,237,0.20),transparent_50%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center sm:py-32">
          <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/15 text-blue-300 shadow-lg shadow-blue-950/30">
            <BriefcaseBusiness size={30} />
          </div>

          <span className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            Careers at ShrotiHost
          </span>

          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Build something
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              meaningful with us.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Interested in web technologies, hosting infrastructure, and
            building better digital experiences? We would love to hear from
            people who are passionate about technology and learning.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:-translate-y-1 hover:shadow-blue-500/20"
            >
              Get in touch <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-blue-400/50 hover:bg-white/10"
            >
              About ShrotiHost
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              Grow with technology
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Bring your ideas.
              <span className="block text-blue-400">
                Make an impact.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Technology keeps moving forward, and so should we. We value
              people who enjoy solving problems, exploring new approaches,
              and contributing to better digital experiences.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              Explore the areas of work connected to ShrotiHost and reach out
              through our contact page to express your interest.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950/80 via-[#111a35] to-violet-950/60 p-8 sm:p-10">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />

            <div className="relative">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
                <Users size={28} />
              </div>

              <h3 className="text-2xl font-bold">
                Where you can contribute
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Areas connected to our products and services include:
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {areas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-slate-200"
                  >
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-white/10 bg-[#0b1224]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-violet-400">
              What matters
            </span>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              The values behind great work
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              A strong team grows through curiosity, responsibility, and
              collaboration.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-br from-[#121d36] to-[#0d1428] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-950/30"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      index === 0
                        ? "bg-blue-500/15 text-blue-300"
                        : index === 1
                          ? "bg-violet-500/15 text-violet-300"
                          : "bg-cyan-500/15 text-cyan-300"
                    }`}
                  >
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-white">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#111d3a] via-[#11152e] to-[#21133c] p-8 text-center shadow-2xl shadow-blue-950/20 sm:p-14">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/15 text-violet-300">
            <Code2 size={30} />
          </div>

          <h2 className="mt-7 text-3xl font-bold sm:text-4xl">
            Interested in joining us?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            There are no specific vacancies listed on this careers page at
            the moment. If you are interested in opportunities with
            ShrotiHost, please reach out through our contact page.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
          >
            Contact ShrotiHost <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
