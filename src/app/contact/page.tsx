
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Headphones,
  Mail,
  MessageCircle,
  Send,
  ShieldCheck,
  Ticket,
} from "lucide-react";

const contactOptions = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Best for sales questions and pre-sales guidance.",
    detail: "+91 95821 29099",
    action: "Chat on WhatsApp",
    href: "https://wa.me/919582129099",
    accent: "from-emerald-400/20 to-teal-500/10",
    iconColor: "text-emerald-300",
  },
  {
    icon: Mail,
    title: "Email support",
    description: "Send us a detailed question or general enquiry.",
    detail: "support@shrotihost.in",
    action: "Send an email",
    href: "mailto:support@shrotihost.in",
    accent: "from-blue-400/20 to-cyan-500/10",
    iconColor: "text-cyan-300",
  },
  {
    icon: Ticket,
    title: "Support ticket",
    description: "For issues relating to an existing hosting account.",
    detail: "Client portal",
    action: "Open a ticket",
    href: "https://portal.shrotihost.in",
    accent: "from-violet-400/20 to-purple-500/10",
    iconColor: "text-violet-300",
  },
];

const enquiryTypes = [
  "Sales enquiry",
  "Technical support",
  "Billing question",
  "Website migration",
  "Software development",
  "Reseller partnership",
  "Other",
];

const processSteps = [
  {
    number: "01",
    title: "Choose your channel",
    description:
      "Select WhatsApp, email or a support ticket depending on your enquiry.",
  },
  {
    number: "02",
    title: "Tell us what you need",
    description:
      "Share the relevant details so the team can understand your request.",
  },
  {
    number: "03",
    title: "Get connected",
    description:
      "Your enquiry reaches the appropriate support or sales channel.",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enquiry, setEnquiry] = useState("Sales enquiry");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="w-full max-w-full overflow-x-clip bg-[#071126] text-white">

      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden bg-[#050B20] text-white">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full bg-blue-600/25 blur-[120px]" />
          <div className="absolute -bottom-48 left-0 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="container-shell relative z-10 min-w-0 py-16 sm:py-20 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-blue-200">
              <Headphones size={15} className="shrink-0" />
              We&apos;re here to help
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              Talk to a real person.
              <span className="mt-2 block break-words bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">
                Let&apos;s figure it out.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl break-words text-base leading-8 text-slate-300 sm:text-xl">
              Tell us what you need. Whether it&apos;s choosing a hosting
              plan, fixing a technical issue or discussing a software
              project, we&apos;ll point you in the right direction.
            </p>

            <div className="mt-9 flex max-w-full flex-wrap gap-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 sm:px-4">
                <MessageCircle size={15} className="shrink-0 text-cyan-300" />
                WhatsApp support
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 sm:px-4">
                <Mail size={15} className="shrink-0 text-cyan-300" />
                Email enquiries
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 sm:px-4">
                <Ticket size={15} className="shrink-0 text-cyan-300" />
                Support tickets
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="container-shell min-w-0 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Get in touch
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Choose the right way to reach us.
          </h2>

          <p className="mt-5 break-words leading-7 text-slate-300 sm:leading-8">
            Different questions are best handled through different
            channels. Start with the option that fits your needs.
          </p>
        </div>

        <div className="mt-10 grid min-w-0 grid-cols-1 gap-5 md:grid-cols-3">
          {contactOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article
                key={option.title}
                className="group min-w-0 max-w-full rounded-2xl border border-white/10 bg-gradient-to-br from-[#172747] to-[#101B34] p-5 shadow-xl shadow-black/10 transition duration-300 hover:border-cyan-300/30 hover:shadow-cyan-900/20 sm:p-7 sm:hover:-translate-y-1"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${option.accent} ${option.iconColor}`}>
                  <Icon size={25} />
                </div>

                <h3 className="mt-6 break-words text-xl font-bold text-white">
                  {option.title}
                </h3>

                <p className="mt-3 min-h-0 break-words text-sm leading-7 text-slate-300 sm:min-h-14">
                  {option.description}
                </p>

                <p className="mt-5 break-all text-sm font-semibold text-white">
                  {option.detail}
                </p>

                <a
                  href={option.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex max-w-full items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-cyan-200"
                >
                  <span className="break-words">{option.action}</span>
                  <ArrowUpRight size={16} className="shrink-0" />
                </a>
              </article>
            );
          })}
        </div>
      </section>

      {/* ENQUIRY FORM */}
      <section className="w-full min-w-0 overflow-hidden border-y border-white/5 bg-[#0B1730]">
        <div className="container-shell min-w-0 py-16 sm:py-20 lg:py-24">
          <div className="grid min-w-0 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12">

            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                Send an enquiry
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                What can we help you with?
              </h2>

              <p className="mt-5 break-words leading-7 text-slate-300 sm:leading-8">
                Share a few details about your requirement. Choose
                the relevant category and describe what you need.
              </p>

              <div className="mt-9 space-y-6">
                <div className="flex min-w-0 gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 text-blue-300">
                    <ShieldCheck size={21} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-white">
                      Your enquiry matters
                    </h3>

                    <p className="mt-1 break-words text-sm leading-6 text-slate-300">
                      Share only the information needed to understand
                      your request. Never send passwords or payment details.
                    </p>
                  </div>
                </div>

                <div className="flex min-w-0 gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                    <Clock3 size={21} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-white">
                      Choose the right channel
                    </h3>

                    <p className="mt-1 break-words text-sm leading-6 text-slate-300">
                      For an existing service issue, a support ticket
                      is the best way to share account-specific details.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM CARD */}
            <div className="w-full min-w-0 max-w-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#172747] to-[#101B34] p-5 shadow-2xl shadow-black/20 sm:p-8 lg:p-9">

              {submitted ? (
                <div className="py-8 text-center sm:py-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-300">
                    <CheckCircle2 size={32} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-white">
                    Demo form validated
                  </h3>

                  <p className="mx-auto mt-4 max-w-md break-words leading-7 text-slate-300">
                    Your details passed the form validation, but this
                    demonstration form does not send or store enquiries.
                    Please contact Shroti Host directly using WhatsApp
                    or email.
                  </p>

                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <a
                      href="https://wa.me/919582129099"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-500"
                    >
                      <MessageCircle size={18} />
                      WhatsApp us
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-slate-200 transition hover:bg-white/10"
                    >
                      Back to form
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <h3 className="text-2xl font-bold text-white">
                      Tell us about your enquiry
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      All fields are required for this demonstration.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="min-w-0 space-y-5 sm:space-y-6"
                  >
                    <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                      <div className="min-w-0">
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-semibold text-slate-200"
                        >
                          Your name
                        </label>

                        <input
                          id="name"
                          type="text"
                          required
                          minLength={2}
                          autoComplete="name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          placeholder="Enter your name"
                          className="block w-full min-w-0 max-w-full rounded-xl border border-white/10 bg-[#09152B] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                        />
                      </div>

                      <div className="min-w-0">
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-semibold text-slate-200"
                        >
                          Email address
                        </label>

                        <input
                          id="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={email}
                          onChange={(event) => setEmail(event.target.value)}
                          placeholder="you@example.com"
                          className="block w-full min-w-0 max-w-full rounded-xl border border-white/10 bg-[#09152B] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                        />
                      </div>
                    </div>

                    <div className="min-w-0">
                      <label
                        htmlFor="enquiry"
                        className="mb-2 block text-sm font-semibold text-slate-200"
                      >
                        What is this about?
                      </label>

                      <select
                        id="enquiry"
                        required
                        value={enquiry}
                        onChange={(event) => setEnquiry(event.target.value)}
                        className="block w-full min-w-0 max-w-full rounded-xl border border-white/10 bg-[#09152B] px-4 py-3.5 text-base text-white outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                      >
                        {enquiryTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="min-w-0">
                      <label
                        htmlFor="subject"
                        className="mb-2 block text-sm font-semibold text-slate-200"
                      >
                        Subject
                      </label>

                      <input
                        id="subject"
                        type="text"
                        required
                        minLength={3}
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                        placeholder="A short title for your enquiry"
                        className="block w-full min-w-0 max-w-full rounded-xl border border-white/10 bg-[#09152B] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                      />
                    </div>

                    <div className="min-w-0">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-semibold text-slate-200"
                      >
                        Your message
                      </label>

                      <textarea
                        id="message"
                        required
                        minLength={10}
                        rows={5}
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Tell us a little more about what you need..."
                        className="block w-full min-w-0 max-w-full resize-y rounded-xl border border-white/10 bg-[#09152B] px-4 py-3.5 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:from-blue-500 hover:to-indigo-500"
                    >
                      Validate enquiry
                      <Send size={17} />
                    </button>

                    <p className="break-words text-xs leading-6 text-slate-400">
                      Demonstration only: submitting this form does not
                      transmit your information to Shroti Host.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-shell min-w-0 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            Simple communication
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three steps to get started.
          </h2>
        </div>

        <div className="mt-10 grid min-w-0 grid-cols-1 gap-9 md:grid-cols-3 md:gap-8">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="min-w-0 rounded-2xl border border-white/10 bg-gradient-to-br from-[#142442] to-[#0D1931] p-5 sm:p-6"
            >
              <span className="text-sm font-extrabold tracking-widest text-cyan-400">
                STEP {step.number}
              </span>

              <h3 className="mt-4 break-words text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-3 break-words leading-7 text-slate-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-shell min-w-0 pb-16 sm:pb-20">
        <div className="relative w-full min-w-0 overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-700 via-indigo-800 to-[#10102D] px-5 py-12 text-center text-white shadow-2xl shadow-blue-950/30 sm:px-14 sm:py-20">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Have a project in mind?
            </h2>

            <p className="mx-auto mt-5 max-w-xl break-words leading-7 text-blue-100 sm:leading-8">
              From hosting a website to building a complete software
              product, start a conversation with the team.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold !text-blue-800 transition hover:bg-blue-50"
              >
                Explore services
                <ArrowRight size={18} />
              </Link>

              <a
                href="https://wa.me/919582129099"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Chat on WhatsApp
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
