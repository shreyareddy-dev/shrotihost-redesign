
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Server,
  TrendingUp,
  Globe2,
  Code2,
  Clock3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Shroti Host",
  description:
    "Read practical guides on web hosting, domains, website development, server infrastructure and building online businesses.",
};

const articles = [
  {
    category: "Website Development",
    title: "The Website Launch Checklist: Before, During, and After",
    description:
      "A practical checklist covering infrastructure, development, testing, security and the first month after launching a website.",
    date: "19 Aug 2026",
    read: "7 min read",
    href: "https://shrotihost.in/blog/website-development-checklist",
    featured: true,
    icon: BookOpen,
    accent: "from-blue-500 to-cyan-400",
    iconColor: "text-cyan-300",
  },
  {
    category: "Hosting Guides",
    title: "How to choose web hosting: a no-nonsense buyer's guide",
    description:
      "Understand the important things to compare before choosing a hosting provider, from storage and support to renewal prices.",
    date: "19 Aug 2026",
    read: "6 min read",
    href: "https://shrotihost.in/blog/how-to-choose-web-hosting",
    featured: false,
    icon: Server,
    accent: "from-violet-500 to-fuchsia-400",
    iconColor: "text-violet-300",
  },
  {
    category: "Hosting Guides",
    title: "How to Host a Website in India: The Complete 2026 Guide",
    description:
      "Learn how domains, hosting and DNS work together to bring a website online.",
    date: "10 Aug 2026",
    read: "9 min read",
    href: "https://shrotihost.in/blog/how-to-host-a-website-in-india",
    featured: false,
    icon: Globe2,
    accent: "from-cyan-400 to-teal-400",
    iconColor: "text-cyan-300",
  },
  {
    category: "Technology",
    title: "What Is NVMe Hosting and Why It Makes Your Site Faster",
    description:
      "Explore the difference between HDD, SATA SSD and NVMe storage, and why it matters for modern websites.",
    date: "3 Aug 2026",
    read: "7 min read",
    href: "https://shrotihost.in/blog/what-is-nvme-hosting",
    featured: false,
    icon: TrendingUp,
    accent: "from-orange-400 to-amber-400",
    iconColor: "text-orange-300",
  },
  {
    category: "Business",
    title: "How Much Does Website Hosting Cost in India? Real Numbers",
    description:
      "Understand real hosting costs, domain registration, renewals and the expenses that can affect your website budget.",
    date: "19 Aug 2026",
    read: "7 min read",
    href: "https://shrotihost.in/blog/website-hosting-cost-in-india",
    featured: false,
    icon: Code2,
    accent: "from-pink-500 to-rose-400",
    iconColor: "text-pink-300",
  },
];

const categories = [
  "All articles",
  "Hosting Guides",
  "Website Development",
  "Technology",
  "Business",
];

export default function BlogPage() {
  const featuredArticle = articles[0];
  const secondaryArticles = articles.slice(1, 3);
  const remainingArticles = articles.slice(3);

  return (
    <main className="overflow-hidden bg-[#080D22] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#05091b]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.30),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.16),transparent_45%),radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_65%)]" />
        <div className="absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="container-shell py-20 lg:py-28">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              <BookOpen size={16} />
              The Shroti Host journal
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Ideas to help you
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                build and grow online.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Practical guides, technical explainers and straightforward
              advice on hosting, domains, website development and growing
              your online presence.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#latest" className="primary-button">
                Read latest articles <ArrowRight size={18} />
              </a>
              <Link
                href="/contact"
                className="secondary-button border-white/20 text-white hover:bg-white/10"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          {/* Blog topic highlights */}
          <div className="mt-16 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {[
              {
                icon: Server,
                title: "Hosting knowledge",
                text: "Understand your infrastructure.",
                color: "text-blue-300",
                bg: "bg-blue-500/15",
              },
              {
                icon: TrendingUp,
                title: "Business insights",
                text: "Make informed online decisions.",
                color: "text-violet-300",
                bg: "bg-violet-500/15",
              },
              {
                icon: BookOpen,
                title: "Practical guides",
                text: "Learn through useful walkthroughs.",
                color: "text-cyan-300",
                bg: "bg-cyan-500/15",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className={`rounded-xl p-3 ${item.bg} ${item.color}`}>
                  <item.icon size={22} />
                </div>
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="mt-1 text-sm text-slate-400">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured articles */}
      <section id="latest" className="scroll-mt-24 py-20 lg:py-24">
        <div className="container-shell">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                From the blog
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Ideas worth exploring.
              </h2>
              <p className="mt-3 text-slate-400">
                Browse published articles from the Shroti Host team.
              </p>
            </div>

            <a
              href="https://shrotihost.in/blog"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Visit official blog <ArrowRight size={16} />
            </a>
          </div>

          {/* Category labels */}
          <div className="mt-9 flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <span
                key={category}
                className={`rounded-full border px-4 py-2 text-sm ${
                  index === 0
                    ? "border-blue-400/40 bg-blue-500/20 text-blue-200"
                    : "border-white/10 bg-white/[0.04] text-slate-400"
                }`}
              >
                {category}
              </span>
            ))}
          </div>

          <div className="mt-10 grid gap-7 lg:grid-cols-2">
            {/* Featured article */}
            <a
              href={featuredArticle.href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#142d64] via-[#101b3d] to-[#11132f] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-950/40 sm:p-9"
            >
              <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl transition group-hover:bg-blue-400/20" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-full border border-blue-300/20 bg-blue-400/15 px-3 py-1.5 text-xs font-semibold text-blue-200">
                    Featured article
                  </span>
                  <featuredArticle.icon size={27} className="text-cyan-300" />
                </div>

                <p className="mt-8 text-sm font-medium text-cyan-300">
                  {featuredArticle.category}
                </p>

                <h3 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                  {featuredArticle.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-300">
                  {featuredArticle.description}
                </p>
              </div>

              <div className="relative mt-9 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="flex items-center gap-3 text-sm text-slate-400">
                  <span>{featuredArticle.date}</span>
                  <span>·</span>
                  <span>{featuredArticle.read}</span>
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-700 transition group-hover:translate-x-1">
                  <ArrowRight size={19} />
                </span>
              </div>
            </a>

            {/* Secondary articles */}
            <div className="grid gap-5">
              {secondaryArticles.map((article) => (
                <a
                  key={article.title}
                  href={article.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-3xl border border-white/10 bg-gradient-to-br from-[#15213e] to-[#10172e] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-blue-950/20"
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-slate-300">
                      {article.category}
                    </span>
                    <article.icon size={21} className={article.iconColor} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-snug transition group-hover:text-cyan-300">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {article.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-2">
                      <Clock3 size={13} />
                      {article.date} · {article.read}
                    </span>
                    <span className="inline-flex items-center gap-1 font-semibold text-cyan-300">
                      Read article <ArrowRight size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More articles */}
      <section className="border-y border-white/5 bg-[#0c1530] py-20 lg:py-24">
        <div className="container-shell">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                More to read
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Explore the latest topics.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-400">
              More practical knowledge to help you make better decisions
              about your website and infrastructure.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {remainingArticles.map((article) => (
              <a
                key={article.title}
                href={article.href}
                target="_blank"
                rel="noreferrer"
                className="group flex flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-[#15213e] to-[#10182e] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-blue-950/20"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-slate-300">
                    {article.category}
                  </span>
                  <article.icon size={21} className={article.iconColor} />
                </div>

                <h3 className="mt-6 text-xl font-bold leading-snug transition group-hover:text-cyan-300">
                  {article.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                  {article.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-slate-500">
                  <span className="flex items-center gap-2">
                    <Clock3 size={13} />
                    {article.date} · {article.read}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-cyan-300">
                    Read more <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-700 via-indigo-700 to-cyan-700 px-7 py-12 text-white shadow-2xl shadow-blue-950/40 sm:px-12">
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                  Keep learning
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Your next project starts with a good idea.
                </h2>
                <p className="mt-4 leading-7 text-blue-50">
                  Explore hosting, register a domain or talk to our team
                  about building your next website or application.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/hosting/shared"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
                >
                  Explore hosting <ArrowRight size={17} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Start a project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
