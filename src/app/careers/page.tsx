
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  HeartHandshake,
  Lightbulb,
  Mail,
  Rocket,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | ShrotiHost",
  description:
    "Explore career opportunities and connect with ShrotiHost about working together.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Keep learning",
    description:
      "Stay curious, explore new technologies, and keep improving how things are built.",
  },
  {
    icon: Rocket,
    title: "Build with purpose",
    description:
      "Focus on practical solutions that solve real problems for customers and businesses.",
  },
  {
    icon: HeartHandshake,
    title: "Work collaboratively",
    description:
      "Share ideas, communicate clearly, and approach challenges with a team mindset.",
  },
];

const areas = [
  {
    icon: Code2,
    title: "Engineering",
    description:
      "Web development, backend systems, infrastructure, and software engineering.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Customer experience",
    description:
      "Customer support, technical assistance, and helping users get more from their services.",
  },
  {
    icon: Users,
    title: "Business and operations",
    description:
      "Business development, operations, content, and other business functions.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-950">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              <BriefcaseBusiness size={16} />
              Careers at ShrotiHost
            </span>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Build what&apos;s next.
              <span className="mt-2 block text-blue-400">
                Grow with us.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We believe good technology starts with curious people.
              If you enjoy solving problems, learning new things, and
              building useful digital experiences, we would love to
              hear from you.
            </p>

            <a
              href="mailto:support@shrotihost.in?subject=Career%20Enquiry"
              className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Get in touch
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our approach
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            What matters when we work together
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            We value thoughtful problem-solving, a willingness to learn,
            and a commitment to delivering useful work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-xl font-semibold">
                  {value.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Areas of work
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Where you could contribute
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              These are areas relevant to the business, not a list of
              currently advertised vacancies.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {areas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7"
                >
                  <Icon size={25} className="text-blue-600" />
                  <h3 className="mt-5 text-lg font-semibold">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="rounded-3xl bg-slate-950 px-7 py-12 text-center sm:px-12 sm:py-16">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400">
            <Mail size={27} />
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Interested in working with us?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Send us a short introduction, your area of interest, and
            your resume or portfolio. You can enquire about potential
            opportunities directly by email.
          </p>

          <a
            href="mailto:support@shrotihost.in?subject=Career%20Enquiry"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
          >
            <Mail size={18} />
            Email ShrotiHost
            <ArrowRight size={18} />
          </a>

          <p className="mt-5 text-sm text-slate-400">
            Sending an enquiry does not guarantee an interview or
            employment opportunity.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row sm:px-8 lg:px-12">
          <p className="text-sm text-slate-500">
            Have a question about ShrotiHost?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Contact our team
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
