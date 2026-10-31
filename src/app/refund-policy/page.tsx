
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
  },
  {
    icon: XCircle,
    title: "Non-refundable services",
    description:
      "Domain registrations, setup fees, renewals, and VPS plans are not refundable under the published guarantee.",
  },
  {
    icon: CreditCard,
    title: "Payment verification",
    description:
      "Refund requests may be reviewed against the original order and payment details before a decision is made.",
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
    <main className="bg-white text-slate-900">
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              <ShieldCheck size={16} />
              Billing and refunds
            </span>

            <h1 className="mt-7 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Refund Policy
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              We want you to understand the refund conditions before
              purchasing a service. Review the guarantee, exclusions,
              and process below.
            </p>

            <p className="mt-6 text-sm text-slate-400">
              Last updated: August 2026
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {refundDetails.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 p-7"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={24} />
                </div>
                <h2 className="mt-6 text-lg font-bold">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              How to request a refund
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A straightforward request process
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              If your purchase is eligible, contact the support team
              with the information needed to identify and review your
              order.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <span className="text-sm font-bold text-blue-600">
                  {step.number}
                </span>
                <h3 className="mt-5 text-lg font-bold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Important information
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Before submitting a request
            </h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-semibold">
                  First purchase eligibility
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  The published guarantee applies to a first web
                  hosting purchase. Check the specific service terms
                  and order confirmation for the guarantee applicable
                  to your plan.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Domain registrations
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Domain registrations are excluded from the money-back
                  guarantee. Registry-related costs and completed
                  registrations cannot be treated as refundable
                  hosting charges.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Cancellation and renewal
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  You can request cancellation through the customer
                  portal. Cancelling a service does not automatically
                  make an already-paid renewal or billing period
                  refundable.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Service misuse
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Services suspended or terminated for serious
                  violations of the Terms of Service or Acceptable Use
                  Policy may not qualify for a refund.
                </p>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-2xl border border-blue-100 bg-blue-50 p-7 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-blue-600">
              <Info size={24} />
            </div>

            <h2 className="mt-6 text-xl font-bold">
              Need help with a refund?
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700">
              Contact ShrotiHost support with your invoice or order
              details. The team can help clarify the conditions that
              apply to your purchase.
            </p>

            <a
              href="https://portal.shrotihost.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Open customer portal
              <ArrowRight size={17} />
            </a>

            <a
              href="mailto:support@shrotihost.in?subject=Refund%20Request"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 font-semibold text-slate-800 transition hover:bg-slate-100"
            >
              <Headphones size={17} />
              Email support
            </a>
          </aside>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12">
          <h2 className="text-2xl font-bold">Related policies</h2>
          <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
            <Link
              href="/terms"
              className="text-blue-600 hover:text-blue-700"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-blue-600 hover:text-blue-700"
            >
              Privacy Policy
            </Link>
            <Link
              href="/acceptable-use"
              className="text-blue-600 hover:text-blue-700"
            >
              Acceptable Use Policy
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
