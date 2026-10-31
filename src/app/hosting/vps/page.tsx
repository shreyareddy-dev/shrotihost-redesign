
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Cpu,
  Database,
  HardDrive,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "VPS Hosting | Shroti Host",
  description:
    "Explore Shroti Host VPS plans with full root access, virtual CPU, RAM, storage and flexible operating system choices.",
};

const plans = [
  { name: "VPS Spark", price: "499", setup: "249", cpu: "1 vCPU", ram: "512 MB", storage: "5 GB", transfer: "500 GB", accent: "from-blue-500 to-cyan-400" },
  { name: "VPS Pulse", price: "899", setup: "449", cpu: "1 vCPU", ram: "1 GB", storage: "10 GB", transfer: "750 GB", accent: "from-violet-500 to-fuchsia-400" },
  { name: "VPS Core", price: "1,199", setup: "599", cpu: "2 vCPU", ram: "2 GB", storage: "20 GB", transfer: "1.5 TB", accent: "from-cyan-400 to-blue-500" },
  { name: "VPS Power", price: "2,199", setup: "1,099", cpu: "2 vCPU", ram: "4 GB", storage: "30 GB", transfer: "2 TB", accent: "from-orange-400 to-amber-400" },
  { name: "VPS Forge", price: "2,799", setup: "1,399", cpu: "4 vCPU", ram: "4 GB", storage: "30 GB", transfer: "3 TB", accent: "from-emerald-400 to-teal-400" },
  { name: "VPS Surge", price: "4,499", setup: "2,249", cpu: "4 vCPU", ram: "8 GB", storage: "60 GB", transfer: "4 TB", accent: "from-pink-500 to-rose-400" },
  { name: "VPS Titan", price: "5,499", setup: "2,749", cpu: "8 vCPU", ram: "8 GB", storage: "60 GB", transfer: "5 TB", accent: "from-indigo-400 to-violet-500" },
  { name: "VPS Apex", price: "8,999", setup: "4,499", cpu: "8 vCPU", ram: "16 GB", storage: "80 GB", transfer: "6 TB", accent: "from-sky-400 to-blue-500" },
  { name: "VPS Infinity", price: "17,499", setup: "8,749", cpu: "16 vCPU", ram: "32 GB", storage: "100 GB", transfer: "10 TB", accent: "from-amber-400 to-orange-500" },
];

const benefits = [
  {
    icon: LockKeyhole,
    title: "Full root access",
    text: "Get administrative control over your virtual server and configure your environment.",
    color: "text-blue-300",
    background: "bg-blue-500/15",
  },
  {
    icon: Cpu,
    title: "Dedicated allocations",
    text: "Choose a configuration based on the virtual CPU and RAM your workload needs.",
    color: "text-violet-300",
    background: "bg-violet-500/15",
  },
  {
    icon: HardDrive,
    title: "Server storage",
    text: "Choose from the published storage capacities for your applications and data.",
    color: "text-cyan-300",
    background: "bg-cyan-500/15",
  },
  {
    icon: Network,
    title: "1 Gbps network port",
    text: "Every listed VPS configuration includes a 1 Gbps network port.",
    color: "text-orange-300",
    background: "bg-orange-500/15",
  },
  {
    icon: ShieldCheck,
    title: "Weekly offsite backups",
    text: "Weekly offsite backup coverage is included with the published plans.",
    color: "text-emerald-300",
    background: "bg-emerald-500/15",
  },
  {
    icon: Terminal,
    title: "Operating system choice",
    text: "Choose your server location and operating system during the ordering process.",
    color: "text-pink-300",
    background: "bg-pink-500/15",
  },
];

const faqs = [
  {
    q: "What is VPS hosting?",
    a: "A Virtual Private Server provides an isolated virtual server environment with allocated CPU, memory and storage. You get more control over the server environment than with conventional shared hosting.",
  },
  {
    q: "Do I get full root access?",
    a: "Yes. Full root access is included with the advertised VPS configurations, allowing you to manage the server and install supported software.",
  },
  {
    q: "Can I choose the operating system?",
    a: "Yes. The ordering process lets you choose an operating system and server location. Available choices depend on the selected configuration and location.",
  },
  {
    q: "Are backups included?",
    a: "Weekly offsite backups are listed as an included feature. Review the backup and restore terms before deploying critical workloads.",
  },
  {
    q: "Is the setup fee included in the monthly price?",
    a: "No. The published plans show a separate one-time setup fee in addition to the monthly hosting price. Check the order summary before payment.",
  },
  {
    q: "Which VPS plan should I choose?",
    a: "Choose based on your application's CPU, memory, storage and transfer requirements. Small development projects may need fewer resources, while databases and production applications may need larger configurations.",
  },
  {
    q: "Is VPS hosting managed?",
    a: "The published VPS listing specifies full root access, but does not establish that complete server administration is included. Confirm management and support responsibilities with Shroti Host before ordering.",
  },
  {
    q: "Can I upgrade later?",
    a: "Contact Shroti Host support to confirm available upgrade paths, migration requirements and any price differences for your existing VPS.",
  },
];

const portalUrl = "https://portal.shrotihost.in/index.php/store/vps";

export default function VPSHostingPage() {
  return (
    <main className="overflow-hidden bg-[#080D22] text-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#05091b]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.28),transparent_45%),radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.16),transparent_45%),radial-gradient(ellipse_at_center,rgba(124,58,237,0.12),transparent_65%)]" />
        <div className="absolute -right-32 top-20 -z-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="container-shell grid gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              <Server size={16} />
              Virtual private servers
            </span>

            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-7xl">
              Your server.
              <span className="mt-2 block bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                Your rules.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Get full root access, flexible server configurations and
              dedicated virtual resources. Choose a VPS that fits your
              applications, development environment or production workload.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#plans" className="primary-button">
                Explore VPS plans <ArrowRight size={18} />
              </a>
              <a
                href="#features"
                className="secondary-button border-white/20 text-white hover:bg-white/10"
              >
                Explore features
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <Check size={16} className="text-cyan-300" /> Full root access
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-cyan-300" /> 1 Gbps port
              </span>
              <span className="flex items-center gap-2">
                <Check size={16} className="text-cyan-300" /> Weekly offsite backups
              </span>
            </div>
          </div>

          {/* Server illustration */}
          <div className="relative rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#111d42] via-[#101831] to-[#17113b] p-7 shadow-2xl shadow-blue-950/40 sm:p-8">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-slate-400">Virtual server overview</p>
                <h2 className="mt-1 text-xl font-semibold">Your own environment</h2>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                Illustration
              </span>
            </div>

            <div className="relative mt-6 rounded-2xl border border-white/10 bg-[#0a122b]/90 p-5">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-500/20 p-3 text-blue-300">
                  <Server size={25} />
                </div>
                <div>
                  <p className="font-semibold">Virtual private server</p>
                  <p className="text-xs text-slate-400">Independent server environment</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  ["CPU", "Allocated vCPU", "text-blue-300"],
                  ["Memory", "Allocated RAM", "text-violet-300"],
                  ["Storage", "Server disk", "text-cyan-300"],
                  ["Access", "Root", "text-emerald-300"],
                ].map(([label, value, color]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className={`text-xs ${color}`}>{label}</p>
                    <p className="mt-1 text-sm font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="relative mt-5 text-xs leading-5 text-slate-400">
              Conceptual illustration, not a live server dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="scroll-mt-24 py-20 lg:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              VPS hosting plans
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Find the right server size.
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Nine configurations, from entry-level virtual servers to
              larger environments for resource-intensive workloads.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              Monthly prices in INR · Setup fees are additional
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {plans.map((plan, index) => (
              <article
                key={plan.name}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  index === 2
                    ? "border-cyan-400/50 bg-gradient-to-b from-[#142c4d] to-[#101a36] shadow-xl shadow-blue-950/40"
                    : "border-white/10 bg-gradient-to-b from-[#111b36] to-[#0d152c] hover:border-blue-400/40 hover:shadow-blue-950/30"
                }`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${plan.accent}`} />

                {index === 2 && (
                  <span className="absolute right-5 top-5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    Popular choice
                  </span>
                )}

                <div className="mt-2">
                  <div className={`mb-4 h-10 w-10 rounded-xl bg-gradient-to-br ${plan.accent} p-[1px]`}>
                    <div className="flex h-full w-full items-center justify-center rounded-xl bg-[#111b36]">
                      <Server size={19} className="text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Virtual private server
                  </p>
                </div>

                <div className="mt-6 flex items-end gap-1">
                  <span className="text-2xl font-semibold text-slate-300">₹</span>
                  <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                  <span className="pb-1 text-sm text-slate-400">/month</span>
                </div>

                <p className="mt-2 text-xs text-slate-400">
                  One-time setup fee: ₹{plan.setup}
                </p>

                <div className="my-6 grid grid-cols-2 gap-4 border-y border-white/10 py-5">
                  <div>
                    <Cpu size={18} className="text-blue-300" />
                    <p className="mt-2 text-xs text-slate-400">Processor</p>
                    <p className="font-semibold">{plan.cpu}</p>
                  </div>
                  <div>
                    <Database size={18} className="text-violet-300" />
                    <p className="mt-2 text-xs text-slate-400">Memory</p>
                    <p className="font-semibold">{plan.ram}</p>
                  </div>
                  <div>
                    <HardDrive size={18} className="text-cyan-300" />
                    <p className="mt-2 text-xs text-slate-400">Storage</p>
                    <p className="font-semibold">{plan.storage}</p>
                  </div>
                  <div>
                    <Network size={18} className="text-emerald-300" />
                    <p className="mt-2 text-xs text-slate-400">Monthly transfer</p>
                    <p className="font-semibold">{plan.transfer}</p>
                  </div>
                </div>

                <ul className="mb-7 flex-1 space-y-3 text-sm text-slate-300">
                  {[
                    "1 Gbps network port",
                    "Weekly offsite backup",
                    "Full root access",
                    "Choose location and OS",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check size={16} className="mt-0.5 shrink-0 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={portalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    index === 2
                      ? "primary-button w-full"
                      : "secondary-button w-full border-white/15 text-white hover:border-blue-400/40 hover:bg-blue-500/10"
                  }
                >
                  Configure VPS <ArrowRight size={17} />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/[0.07] p-5 text-sm leading-7 text-amber-100">
            <strong className="text-amber-300">Before ordering:</strong>{" "}
            Monthly plan prices exclude the separately listed setup fee.
            Transfer allowances can vary by server location. Check the
            selected location, operating system, taxes and final order total
            in the client portal.
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="scroll-mt-24 border-y border-white/5 bg-[#0c1530] py-20 lg:py-24"
      >
        <div className="container-shell">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              VPS features
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Control your server environment.
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              The essentials for deploying and managing your own virtual
              server.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#15213e] to-[#101a32] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className={`w-fit rounded-xl p-3 ${item.background} ${item.color}`}>
                  <item.icon size={25} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Server administration */}
      <section className="py-20 lg:py-24">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Built for flexibility
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A server environment you control.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Deploy applications, configure server software and manage
              system-level settings using your root access. Select your
              preferred operating system and location during checkout.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Install and configure your own application stack.",
                "Manage services and server settings.",
                "Choose resources based on your workload.",
                "Connect remotely to administer your server.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check size={18} className="mt-1 shrink-0 text-emerald-400" />
                  <p className="text-sm leading-6 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-[#14234a] to-[#090f24] p-7 shadow-xl shadow-blue-950/30 sm:p-9">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative flex items-center gap-3">
              <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                <Terminal size={25} />
              </div>
              <div>
                <h3 className="font-semibold">Server administration</h3>
                <p className="text-sm text-slate-400">Illustrative terminal commands</p>
              </div>
            </div>

            <div className="relative mt-7 space-y-4 rounded-2xl border border-white/10 bg-[#050a18]/90 p-5 font-mono text-sm">
              <div className="flex gap-2 border-b border-white/10 pb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs text-slate-500">server-terminal</span>
              </div>
              <p className="text-slate-500"># Check processor information</p>
              <p className="text-emerald-300">$ lscpu</p>
              <p className="mt-4 text-slate-500"># View available memory</p>
              <p className="text-emerald-300">$ free -h</p>
              <p className="mt-4 text-slate-500"># Check disk usage</p>
              <p className="text-emerald-300">$ df -h</p>
            </div>

            <p className="relative mt-5 text-xs leading-5 text-slate-400">
              Example commands for Linux-based server administration.
              Actual commands depend on your installed operating system.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-white/5 bg-[#0c1530] py-20 lg:py-24">
        <div className="container-shell max-w-4xl">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Frequently asked questions
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              VPS hosting questions answered.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-100">
                  {faq.q}
                  <ChevronDown
                    size={19}
                    className="shrink-0 text-cyan-300 transition-transform group-open:rotate-180"
                  />
                </summary>
                <p className="mt-4 max-w-3xl pr-8 text-sm leading-7 text-slate-400">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-r from-[#123a83] via-[#273c9a] to-[#075c85] px-7 py-12 shadow-2xl shadow-blue-950/40 sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-violet-400/20 blur-3xl" />

            <div className="relative max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Ready for your own virtual server?
              </h2>
              <p className="mt-3 leading-7 text-blue-100">
                Compare configurations and select your location and operating
                system through the Shroti Host client portal.
              </p>
            </div>

            <div className="relative mt-7 flex flex-wrap gap-3 lg:mt-0">
              <a
                href={portalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-800 transition hover:bg-blue-50"
              >
                Configure VPS <ArrowRight size={17} />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
