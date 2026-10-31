
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Globe2,
  Server,
  Code2,
  Building2,
} from "lucide-react";

const navigation = [
  {
    label: "Hosting",
    icon: Server,
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
    label: "Domains",
    icon: Globe2,
    links: [{ label: "Find a Domain", href: "/domains" }],
  },
  {
    label: "Services",
    icon: Code2,
    links: [
      { label: "Web Development", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    label: "Company",
    icon: Building2,
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Status", href: "/status" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveMenu(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080D20]/95 shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-5 px-6 sm:px-8 lg:px-12">
        {/* Brand */}
        <Link
          href="/"
          className="group shrink-0 text-2xl font-extrabold tracking-tight text-white"
          aria-label="ShrotiHost home"
          onClick={closeMobileMenu}
        >
          Shroti<span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">Host</span>
          <span className="ml-1 align-top text-[10px] font-semibold text-slate-500">
            .in
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-xl px-3 py-6 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className="text-slate-500 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    aria-hidden="true"
                  />
                </button>

                <div className="invisible absolute left-0 top-full min-w-64 translate-y-3 rounded-2xl border border-white/10 bg-[#111A32] p-2 opacity-0 shadow-2xl shadow-black/40 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="flex items-center gap-2 border-b border-white/10 px-3 py-3">
                    <Icon size={16} className="text-cyan-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                      {item.label}
                    </span>
                  </div>

                  <div className="mt-1">
                    {item.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="group/link flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-blue-500/10 hover:text-cyan-300"
                      >
                        {link.label}
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 transition group-hover/link:translate-x-0.5 group-hover/link:opacity-100"
                        />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/domains"
            className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-white"
          >
            Search domains
          </Link>

          <Link
            href="/hosting/shared"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-indigo-500"
          >
            Get started
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-200 transition hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white lg:hidden"
          aria-label={
            mobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => {
            setMobileOpen((open) => !open);
            setActiveMenu(null);
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#0B1228] px-5 py-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto max-w-7xl space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.label;

              return (
                <div
                  key={item.label}
                  className="border-b border-white/[0.07] py-2"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left font-semibold text-slate-200 transition hover:bg-white/[0.05] hover:text-white"
                    aria-expanded={isActive}
                    onClick={() =>
                      setActiveMenu((current) =>
                        current === item.label ? null : item.label
                      )
                    }
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={18} className="text-cyan-400" />
                      {item.label}
                    </span>

                    <ChevronDown
                      size={17}
                      className={`text-slate-500 transition-transform ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isActive && (
                    <div className="space-y-1 pb-3 pl-9">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={closeMobileMenu}
                          className="block rounded-lg px-3 py-3 text-sm font-medium text-slate-400 transition hover:bg-blue-500/10 hover:text-cyan-300"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="flex flex-col gap-3 pt-4">
              <Link
                href="/domains"
                onClick={closeMobileMenu}
                className="flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/[0.08]"
              >
                Search domains
              </Link>

              <Link
                href="/hosting/shared"
                onClick={closeMobileMenu}
                className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:from-blue-500 hover:to-indigo-500"
              >
                Get started
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
