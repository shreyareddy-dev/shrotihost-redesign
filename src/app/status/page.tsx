
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
  },
  {
    icon: Server,
    name: "Server and infrastructure",
    description: "Server-related questions and infrastructure assistance.",
  },
  {
    icon: ShieldCheck,
    name: "Domains and account services",
    description: "Domain management, billing, and customer account access.",
  },
];

export default function StatusPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-indigo-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              <Activity size={16} />
              Service information
            </span>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Service status
              <span className="block text-blue-400">
                and support.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Find the right support channel for questions about
              hosting, domains, infrastructure, and your ShrotiHost
              account.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
              <Activity size={23} />
            </div>

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Live monitoring is not displayed here
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                This page does not currently provide a live monitoring
                feed or verified incident history. For the latest
                information about a specific service or account,
                please contact the support team directly.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800"
              >
                Contact support
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Service categories
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            What do you need help with?
          </h2>
          <p className="mt-4 leading-7 text-slate-600">
            Select the relevant area when contacting support so the
            team can better understand your issue.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.name}
                className="rounded-2xl border border-slate-200 p-7 transition hover:border-blue-200 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-lg font-semibold">
                  {service.name}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Bell size={26} />
            </div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Need an update?
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              If a website or service is unavailable, share the
              affected domain, a description of the issue, and any
              relevant error message with the support team.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://portal.shrotihost.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
              >
                Customer portal
                <ExternalLink size={17} />
              </a>

              <a
                href="mailto:support@shrotihost.in?subject=Service%20Status%20Enquiry"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                <Mail size={17} />
                Email support
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <CheckCircle2 size={17} className="text-blue-600" />
            For assistance, contact the official support team.
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            More contact options
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
