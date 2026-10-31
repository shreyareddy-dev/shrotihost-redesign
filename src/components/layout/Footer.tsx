
import Link from "next/link";
import {
  ArrowUpRight,
  Globe2,
  Mail,
  Server,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const footerGroups = [
  {
    title: "Hosting",
    links: [
      { label: "Shared Hosting", href: "/hosting/shared" },
      { label: "WordPress Hosting", href: "/hosting/wordpress" },
      { label: "Unlimited Hosting", href: "/hosting/unlimited" },
      { label: "Reseller Hosting", href: "/hosting/reseller" },
      { label: "Master Reseller", href: "/hosting/master-reseller" },
      { label: "VPS Hosting", href: "/hosting/vps" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Domains", href: "/domains" },
      { label: "Web Development", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Offers", href: "/offers" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Status", href: "/status" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms and Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund Policy", href: "/refund-policy" },
      { label: "Acceptable Use", href: "/acceptable-use" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070B18] text-slate-300">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/[0.08] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 sm:px-8 lg:px-12">
        {/* Main footer */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_repeat(5,minmax(0,1fr))] lg:gap-8">
          {/* Brand column */}
          <div>
            <Link
              href="/"
              aria-label="ShrotiHost home"
              className="inline-flex items-center text-2xl font-extrabold tracking-tight text-white"
            >
              Shroti
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Host
              </span>
              <span className="ml-1 self-start text-[10px] font-semibold text-slate-500">
                .in
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
              Hosting, domains and digital services. Explore our
              products and services to find the right solution for
              your website.
            </p>

            <a
              href="mailto:support@shrotihost.in"
              className="group mt-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-blue-400/30 hover:bg-blue-500/10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
                <Mail size={17} />
              </span>
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                  Get in touch
                </span>
                <span className="mt-1 block text-sm font-medium text-slate-200 transition group-hover:text-cyan-300">
                  support@shrotihost.in
                </span>
              </span>
              <ArrowUpRight
                size={15}
                className="ml-1 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
              />
            </a>

            <div className="mt-7 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-400/[0.07] px-3 py-2 text-xs font-medium text-blue-200">
                <Server size={14} />
                Hosting
              </div>
              <div className="flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-400/[0.07] px-3 py-2 text-xs font-medium text-violet-200">
                <Globe2 size={14} />
                Domains
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-5 text-sm font-bold tracking-wide text-white">
                {group.title}
              </h2>

              <ul className="space-y-3.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-sm leading-5 text-slate-400 transition hover:text-cyan-300"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust / service strip */}
        <div className="mt-16 flex flex-col gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/[0.08] via-violet-500/[0.08] to-cyan-500/[0.08] px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-cyan-300">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Build your next digital experience
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Explore hosting and development solutions.
              </p>
            </div>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
          >
            Explore services
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ShrotiHost. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-2">
            <ShieldCheck size={14} className="text-emerald-400" />
            <span>Website redesign concept.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
