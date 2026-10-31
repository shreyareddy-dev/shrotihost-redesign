
import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  Bell,
  CheckCircle2,
  ExternalLink,
  Globe,
  Mail,
  Server,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Service Status | ShrotiHost",
  description:
    "Find service-status information and support channels for ShrotiHost customers.",
};

const services = [
  {
    icon: Globe,
    name: "Website and hosting services",
    description: "Shared, WordPress, reseller, and other hosting plans.",
    color: "blue",
  },
  {
    icon: Server,
    name: "Server and infrastructure",
    description: "Server-related questions and infrastructure assistance.",
    color: "violet",
  },
  {
    icon: ShieldCheck,
    name: "Domains and account services",
    description: "Domain management, billing, and customer account access.",
    color: "cyan",
  },
];

export default function StatusPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b18] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#080e20]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              <Activity size={16} />
              Service information
            </span>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Service status
              <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
                and support.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Find the right support channel for questions about hosting,
              domains, infrastructure, and your ShrotiHost account.
            </p>
          </div>
        </div>
      </section>

      {/* Monitoring notice */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="rounded-2xl border border-amber-400/25 bg-gradient-to-br from-amber-500/10 to-orange-500/5 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-amber-300">
              <Activity size={23} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-white">
                Live monitoring is not displayed here
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                This page does not currently provide a live monitoring feed
                or verified incident history. For the latest information
                about a specific service or account, please contact the
                support team directly.
              </p>

              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-300 transition hover:text-amber-200"
              >
                Contact support
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Service categories
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What do you need help with?
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Select the relevant area when contacting support so the team can
            better understand your issue.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            const iconStyle =
              service.color === "blue"
                ? "bg-blue-500/15 text-blue-300"
                : service.color === "violet"
                  ? "bg-violet-500/15 text-violet-300"
                  : "bg-cyan-500/15 text-cyan-300";

            return (
              <div
                key={service.name}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-[#121d36] to-[#0d1428] p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-950/30"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${iconStyle}`}
                >
                  <Icon size={24} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {service.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Support update */}
      <section className="border-y border-white/10 bg-[#0b1224]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/15 text-blue-300">
              <Bell size={26} />
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Need an update?
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              If a website or service is unavailable, share the affected
              domain, a description of the issue, and any relevant error
              message with the support team.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://portal.shrotihost.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-1 hover:shadow-blue-500/20"
              >
                Customer portal
                <ExternalLink size={17} />
              </a>

              <a
                href="mailto:support@shrotihost.in?subject=Service%20Status%20Enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                <Mail size={17} />
                Email support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom information */}
      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <CheckCircle2 size={17} className="text-cyan-400" />
            For assistance, contact the official support team.
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-cyan-300"
          >
            More contact options
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
