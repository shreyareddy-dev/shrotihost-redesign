
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const extensions = [
  {
    name: ".com",
    description: "A widely recognised choice for businesses and brands.",
    category: "Global",
  },
  {
    name: ".in",
    description: "A familiar domain extension for Indian websites.",
    category: "India",
  },
  {
    name: ".net",
    description: "A classic option for technology and network projects.",
    category: "Global",
  },
  {
    name: ".org",
    description: "Often used by organisations and communities.",
    category: "Global",
  },
  {
    name: ".co.in",
    description: "An India-focused option for companies and businesses.",
    category: "India",
  },
  {
    name: ".online",
    description: "A flexible extension for your online presence.",
    category: "New domain",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Domain protection",
    description:
      "Understand the registration and renewal options available for your domain.",
  },
  {
    icon: Zap,
    title: "Easy management",
    description:
      "Manage your domain and hosting services from the relevant account portal.",
  },
  {
    icon: LockKeyhole,
    title: "DNS control",
    description:
      "Configure domain records to connect your domain with websites and services.",
  },
];

function isValidDomain(value: string) {
  const domain = value.trim().toLowerCase();

  if (domain.length > 253 || domain.length === 0) {
    return false;
  }

  const domainPattern =
    /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,63}$/;

  return domainPattern.test(domain);
}

export default function DomainsPage() {
  const [domain, setDomain] = useState("");
  const [result, setResult] = useState("");

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanedDomain = domain.trim().toLowerCase();

    if (!isValidDomain(cleanedDomain)) {
      setResult("invalid");
      return;
    }

    setDomain(cleanedDomain);
    setResult("demo");
  }

  return (
    <main className="overflow-hidden bg-white text-slate-900">
      {/* HERO AND DOMAIN SEARCH */}
      <section className="relative isolate bg-slate-950 text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute -bottom-48 left-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="container-shell section-spacing">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-blue-200">
              <Globe2 size={15} />
              Your online identity starts here
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              Find a domain.
              <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
                Build your identity.
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Choose a domain name that represents your idea,
              business or next big project. Start by searching
              for the name you have in mind.
            </p>

            <form
              onSubmit={handleSearch}
              className="mx-auto mt-12 flex max-w-3xl flex-col gap-3 rounded-2xl border border-white/15 bg-white/[0.08] p-3 backdrop-blur sm:flex-row"
            >
              <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                <Search
                  size={22}
                  className="shrink-0 text-slate-400"
                />
                <input
                  type="text"
                  value={domain}
                  onChange={(event) => {
                    setDomain(event.target.value);
                    setResult("");
                  }}
                  placeholder="Enter your domain name (e.g. mybusiness.com)"
                  aria-label="Domain name"
                  className="min-w-0 flex-1 bg-transparent py-3 text-sm text-white outline-none placeholder:text-slate-400 sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-500"
              >
                Search domain
                <ArrowRight size={18} />
              </button>
            </form>

            {result === "invalid" && (
              <p role="alert" className="mx-auto mt-4 max-w-2xl text-sm font-medium text-rose-300">
                Please enter a valid domain name, such as example.com.
              </p>
            )}

            {result === "demo" && (
              <div
                role="status"
                className="mx-auto mt-5 max-w-2xl rounded-xl border border-amber-300/30 bg-amber-300/10 p-5 text-left"
              >
                <p className="font-semibold text-amber-200">
                  Domain format looks valid: {domain}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Live availability has not been checked. This website
                  demonstration is not connected to a domain registrar.
                  Contact Shroti Host to confirm availability and pricing.
                </p>
                <a
                  href={`mailto:support@shrotihost.in?subject=${encodeURIComponent(`Domain enquiry: ${domain}`)}&body=${encodeURIComponent(`Hello Shroti Host,\n\nI would like to enquire about registering ${domain}.\nPlease confirm its availability and pricing.\n\nThank you.`)}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:text-white"
                >
                  Enquire about this domain
                  <ArrowUpRight size={16} />
                </a>
              </div>
            )}

            <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-cyan-300" />
                Multiple extensions
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-cyan-300" />
                Domain management
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={15} className="text-cyan-300" />
                DNS configuration
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* EXTENSIONS */}
      <section className="container-shell section-spacing">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Explore extensions
          </p>
          <h2 className="section-heading mt-4">
            Find the right domain extension.
          </h2>
          <p className="mt-5 leading-8 text-slate-600">
            Different extensions suit different audiences and purposes.
            Explore some popular options before choosing your domain.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {extensions.map((extension) => (
            <button
              key={extension.name}
              type="button"
              onClick={() => {
                setDomain(`yourname${extension.name}`);
                setResult("");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="group rounded-2xl border border-slate-200 bg-white p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold tracking-tight text-slate-950">
                  {extension.name}
                </span>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  {extension.category}
                </span>
              </div>

              <p className="mt-5 min-h-14 text-sm leading-7 text-slate-600">
                {extension.description}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                Try this extension
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </button>
          ))}
        </div>

        <p className="mt-7 text-sm leading-6 text-slate-500">
          Extension cards are illustrative. Actual registration eligibility,
          availability and pricing depend on the registrar and applicable
          domain registry rules.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50">
        <div className="container-shell section-spacing">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Domain essentials
            </p>
            <h2 className="section-heading mt-4">
              More than just a domain name.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              A domain is the starting point of your online presence.
              Understand the essentials of managing it.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-7 text-xl font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOMAIN AND HOSTING */}
      <section className="container-shell section-spacing">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Start building
            </p>
            <h2 className="section-heading mt-4">
              Your domain. Your hosting. One website.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Once you have a domain name, the next step is connecting
              it to a hosting service. Choose a plan based on your
              website&apos;s needs.
            </p>

            <Link
              href="/hosting/shared"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore hosting plans
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-300">
              <Globe2 size={28} />
            </div>
            <h3 className="mt-7 text-2xl font-bold">
              From name to website
            </h3>

            <div className="mt-8 space-y-5">
              {[
                {
                  number: "01",
                  title: "Choose a domain",
                  description: "Find a name that represents your project.",
                },
                {
                  number: "02",
                  title: "Select hosting",
                  description: "Choose resources suitable for your website.",
                },
                {
                  number: "03",
                  title: "Connect and launch",
                  description: "Configure DNS and publish your website.",
                },
              ].map((step) => (
                <div key={step.number} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-cyan-300">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="font-bold">{step.title}</h4>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="container-shell section-spacing">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Frequently asked questions
            </p>
            <h2 className="section-heading mt-4">
              Domain questions, answered.
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {[
              {
                question: "What is a domain name?",
                answer:
                  "A domain name is the address people use to access your website, such as example.com.",
              },
              {
                question: "Can I register any domain name?",
                answer:
                  "A domain must meet the relevant registry requirements and must be available for registration. Some extensions also have eligibility restrictions.",
              },
              {
                question: "What happens after I register a domain?",
                answer:
                  "You can configure DNS records to point your domain to a hosting server, website or other online service.",
              },
              {
                question: "Can I transfer an existing domain?",
                answer:
                  "Domain transfers depend on the extension, registrar rules, domain status and applicable transfer requirements. Contact the team to confirm the process.",
              },
              {
                question: "Does this search show live availability?",
                answer:
                  "No. This redesigned page validates the format of a domain name only. It does not query a registrar or confirm availability.",
              },
            ].map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  {faq.question}
                  <span className="text-xl text-blue-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 pr-8 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-shell section-spacing">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 px-7 py-14 text-center text-white sm:px-14 sm:py-20">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
              <Sparkles size={27} />
            </div>

            <h2 className="mt-7 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Your next idea needs a name.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-blue-100">
              Find a domain, explore hosting and take the first
              step towards building something online.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold !text-blue-800 transition hover:bg-blue-50"
              >
                Contact our team
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/hosting/shared"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                View hosting plans
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
