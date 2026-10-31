
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  CreditCard,
  Headphones,
  Info,
  ShieldCheck,
  XCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Refund Policy | ShrotiHost",
  description:
    "Understand ShrotiHost's money-back guarantee, refund exclusions, and cancellation process.",
};

const refundDetails = [
  {
    icon: CalendarDays,
    title: "7-day money-back guarantee",
    description:
      "A first web hosting purchase is covered by a 7-day money-back guarantee, subject to the applicable service terms.",
    accent: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-cyan-300",
  },
  {
    icon: XCircle,
    title: "Non-refundable services",
    description:
      "Domain registrations, setup fees, renewals, and VPS plans are not refundable under the published guarantee.",
    accent: "from-violet-500/20 to-fuchsia-500/10",
    iconColor: "text-violet-300",
  },
  {
    icon: CreditCard,
    title: "Payment verification",
    description:
      "Refund requests may be reviewed against the original order and payment details before a decision is made.",
    accent: "from-emerald-500/20 to-teal-500/10",
    iconColor: "text-emerald-300",
  },
];

const steps = [
  {
    number: "01",
    title: "Contact support",
    description:
      "Raise a support ticket through the customer portal or email support@shrotihost.in.",
  },
  {
    number: "02",
    title: "Share your order details",
    description:
      "Provide your registered email address, invoice or order number, and the reason for requesting a refund.",
  },
  {
    number: "03",
    title: "Wait for review",
    description:
      "The support team will review your request against the applicable guarantee and service conditions.",
  },
  {
    number: "04",
    title: "Refund decision",
    description:
      "If approved, the refund is handled through the applicable payment process. Processing time may depend on the payment provider.",
  },
];

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b18] text-white">
      {/* Hero */}
      <section className="relative isolate border-b border-white/10 bg-[#080e20]">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-32 -top-40 h-[440px] w-[440px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute -bottom-40 left-0 h-[350px] w-[350px] rounded-full bg-violet-600/15 blur-[110px]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(148,163,184,0.12)_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200">
              <ShieldCheck size={16} />
              Billing and refunds
            </span>

            <h1 className="mt-7 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Refund{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We want you to understand the refund conditions before
              purchasing a service. Review the guarantee, exclusions,
              and process below.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Last updated: August 2026
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Customer information
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Refund highlights */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            At a glance
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Understand the refund conditions
          </h2>
          <p className="mt-4 leading-7 text-slate-400">
            Here are the key points to review before submitting a
            refund request.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {refundDetails.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-gradient-to-br from-[#14203a] to-[#0d1529] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-xl hover:shadow-blue-950/30"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${item.accent}`}
                >
                  <Icon size={25} className={item.iconColor} />
                </div>

                <h2 className="mt-6 text-xl font-bold text-white">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Refund process */}
      <section className="border-y border-white/10 bg-[#0a1021]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              How to request a refund
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A straightforward request process
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              If your purchase is eligible, contact the support team
              with the information needed to identify and review your
              order.
            </p>
          </div>

          <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#14203a] to-[#0d1529] p-7 transition duration-300 hover:border-cyan-400/30"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-cyan-400">
                    STEP {step.number}
                  </span>
                  {index !== steps.length - 1 && (
                    <ArrowRight
                      size={18}
                      className="text-slate-600 lg:hidden"
                    />
                  )}
                </div>

                <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />

                <h3 className="mt-6 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Important information */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Important information
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Before submitting a request
            </h2>

            <div className="mt-9 space-y-7">
              <div className="border-l-2 border-blue-500/70 pl-5">
                <h3 className="font-semibold text-white">
                  First purchase eligibility
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  The published guarantee applies to a first web
                  hosting purchase. Check the specific service terms
                  and order confirmation for the guarantee applicable
                  to your plan.
                </p>
              </div>

              <div className="border-l-2 border-violet-500/70 pl-5">
                <h3 className="font-semibold text-white">
                  Domain registrations
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Domain registrations are excluded from the money-back
                  guarantee. Registry-related costs and completed
                  registrations cannot be treated as refundable
                  hosting charges.
                </p>
              </div>

              <div className="border-l-2 border-cyan-500/70 pl-5">
                <h3 className="font-semibold text-white">
                  Cancellation and renewal
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  You can request cancellation through the customer
                  portal. Cancelling a service does not automatically
                  make an already-paid renewal or billing period
                  refundable.
                </p>
              </div>

              <div className="border-l-2 border-pink-500/70 pl-5">
                <h3 className="font-semibold text-white">
                  Service misuse
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Services suspended or terminated for serious
                  violations of the Terms of Service or Acceptable Use
                  Policy may not qualify for a refund.
                </p>
              </div>
            </div>
          </div>

          {/* Support card */}
          <aside className="relative h-fit overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#14264a] via-[#111c38] to-[#17112f] p-8 sm:p-9">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-400/10 text-cyan-300">
                <Info size={26} />
              </div>

              <h2 className="mt-7 text-2xl font-bold text-white">
                Need help with a refund?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Contact ShrotiHost support with your invoice or order
                details. The team can help clarify the conditions that
                apply to your purchase.
              </p>

              <a
                href="https://portal.shrotihost.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-4 font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:from-blue-500 hover:to-violet-500"
              >
                Open customer portal
                <ArrowRight size={17} />
              </a>

              <a
                href="mailto:support@shrotihost.in?subject=Refund%20Request"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-4 font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                <Headphones size={17} />
                Email support
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Related policies */}
      <section className="border-t border-white/10 bg-[#0a1021]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">
                Related policies
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Explore other ShrotiHost policies for more information.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm font-semibold">
              <Link
                href="/terms"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-slate-300 transition hover:border-blue-400/40 hover:text-cyan-300"
              >
                Terms and Conditions
              </Link>

              <Link
                href="/privacy"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-slate-300 transition hover:border-blue-400/40 hover:text-cyan-300"
              >
                Privacy Policy
              </Link>

              <Link
                href="/acceptable-use"
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-slate-300 transition hover:border-blue-400/40 hover:text-cyan-300"
              >
                Acceptable Use Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
