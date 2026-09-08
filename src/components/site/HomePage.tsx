import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  Users,
  Briefcase,
  Search,
  Repeat,
  Building2,
  Cpu,
  Code2,
  ShieldCheck,
  Globe2,
  BrainCircuit,
  LineChart,
  MessagesSquare,
  CheckCircle2,
  
  Calculator,
  MapPin,
  Rocket,
  ChevronRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";


/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10 bg-hero-gradient animate-gradient" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(15,98,254,0.15) 1px, transparent 0)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
      />

      <div className="container-page grid gap-14 lg:grid-cols-[1.15fr_1fr] items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 backdrop-blur px-3 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              AI-augmented talent, delivered globally
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-secondary">
              Build the workforce that <span className="text-gradient">outpaces tomorrow</span>.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Qbotik is the enterprise talent partner powering Fortune 500 hiring across
              permanent, contract, executive and RPO — augmented by our AI recruitment platform
              and delivered from 40+ countries.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full font-semibold shadow-elevated group">
                <a href="#contact">
                  Talk to a talent expert
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full font-semibold border-secondary/20 hover:bg-secondary hover:text-secondary-foreground"
              >
                <a href="#services">Explore our services</a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={4}>
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { k: 270, s: "+", label: "Enterprise clients" },
                { k: 42, s: "", label: "Countries served" },
                { k: 12, s: "K+", label: "Placements / year" },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-extrabold text-secondary">
                    <Counter value={s.k} suffix={s.s} />
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-3xl p-6 shadow-elevated"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Live pipeline</p>
                  <p className="font-display text-lg font-bold text-secondary">
                    Senior AI Engineers · EMEA
                  </p>
                </div>
                <span className="rounded-full bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1">
                  Active
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { name: "Amelia R.", role: "ML Platform Lead", fit: 96, tag: "Interview" },
                  { name: "Kenji T.", role: "LLM Systems", fit: 92, tag: "Offer" },
                  { name: "Priya S.", role: "AI Research Eng.", fit: 89, tag: "Screen" },
                  { name: "Marco V.", role: "MLOps Architect", fit: 87, tag: "Interview" },
                ].map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.12 }}
                    className="flex items-center justify-between rounded-xl border border-border bg-white/70 p-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-white text-xs font-bold">
                        {c.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-secondary">{c.name}</p>
                        <p className="text-xs text-muted-foreground">{c.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <p className="text-[10px] uppercase text-muted-foreground">Fit</p>
                        <p className="text-sm font-bold text-primary">{c.fit}%</p>
                      </div>
                      <span className="hidden sm:inline-flex rounded-full bg-accent/15 text-secondary text-[10px] font-semibold px-2 py-0.5">
                        {c.tag}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between rounded-xl bg-secondary p-4 text-secondary-foreground">
                <div className="flex items-center gap-2">
                  <BrainCircuit className="h-5 w-5 text-accent" />
                  <div>
                    <p className="text-xs opacity-80">AI shortlist ready</p>
                    <p className="text-sm font-semibold">14 candidates · 4.2 days avg TTS</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4" />
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-5 -right-4 lg:-top-6 lg:-right-8 hidden sm:block glass-card rounded-2xl p-4 shadow-elevated animate-float-slow ring-1 ring-[color:var(--brand-red)]/30"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--brand-red)]/10 text-[color:var(--brand-red)]">
                  <LineChart className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Time to hire</p>
                  <p className="font-display text-lg font-bold text-secondary">-38%</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- TRUSTED CLIENTS ---------------- */
function TrustedClients() {
  const logos = [
    "Vantage", "Northwind", "Helix", "Orbital", "Meridian", "Lattice",
    "Cadence", "Sonora", "Byteforge", "Kepler", "Aurora", "Novatek",
  ];
  return (
    <section className="py-16 border-y border-border bg-white">
      <div className="container-page">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by leading enterprises worldwide
        </p>
        <div className="mt-8 relative overflow-hidden">
          <div className="flex gap-14 animate-marquee w-max">
            {[...logos, ...logos].map((l, i) => (
              <span
                key={i}
                className="font-display text-2xl font-extrabold tracking-tight text-muted-foreground/70 hover:text-secondary transition-colors whitespace-nowrap"
              >
                {l}
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const SERVICES = [
  { icon: Users, title: "Permanent Hiring", desc: "Full-time hiring for critical roles with rigorous screening and cultural fit.", to: "/services/permanent-hiring" },
  { icon: Briefcase, title: "Contract Staffing", desc: "Flexible on-demand talent — deploy in days, scale in weeks.", to: "/services/contract-staffing" },
  { icon: Search, title: "Executive Search", desc: "Confidential leadership search for C-suite and VP-level roles.", to: "/services/executive-search" },
  { icon: Repeat, title: "RPO", desc: "Fully-managed recruitment functions with dedicated pods and SLAs.", to: "/services/rpo" },
  { icon: Building2, title: "Global Capability Centers", desc: "Design, build and staff GCCs across India, LATAM and EMEA.", to: "/services/gcc" },
  { icon: Cpu, title: "AI Talent", desc: "ML engineers, LLM researchers, MLOps and applied scientists.", to: "/services/ai-talent" },
  { icon: Code2, title: "Technology Recruitment", desc: "Cloud, data, security and product engineering talent at scale.", to: "/services/technology" },
];

function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary">
              An end-to-end talent operating system for the enterprise
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From high-volume contract deployment to confidential executive search — one partner,
              one platform, one accountable delivery team.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i}>
              <Link
                to={s.to}
                className="group block h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-secondary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Learn more
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INDUSTRIES ---------------- */
function Industries() {
  const items = [
    "Financial Services", "Healthcare & Life Sciences", "Technology & SaaS",
    "Manufacturing", "Retail & E-commerce", "Energy & Utilities",
    "Telecom & Media", "Public Sector",
  ];
  return (
    <section id="industries" className="py-24 lg:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(77,163,255,0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="container-page relative">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] items-center">
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Industries</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                Deep expertise across the sectors shaping the global economy
              </h2>
              <p className="mt-4 text-white/70 text-lg">
                Every industry pod is led by domain veterans with proven track records placing
                thousands of senior professionals across regulated and high-growth markets.
              </p>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="grid grid-cols-2 gap-3">
              {items.map((i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-5 hover:bg-white/10 hover:border-accent/40 transition-colors"
                >
                  <p className="font-display font-bold text-sm sm:text-base">{i}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CHOOSE US ---------------- */
function WhyChooseUs() {
  const reasons = [
    { icon: ShieldCheck, k: "SLA-backed", t: "Guaranteed delivery", d: "Every engagement carries measurable SLAs on time-to-shortlist, offer acceptance and quality of hire." },
    { icon: Globe2, k: "40+ countries", t: "Global delivery footprint", d: "Follow-the-sun sourcing pods across India, LATAM, EMEA and APAC — round the clock." },
    { icon: BrainCircuit, k: "AI-augmented", t: "Proprietary AI stack", d: "Our AI ranks 40M+ profiles across 200+ signals for calibrated shortlists in hours." },
    { icon: LineChart, k: "Data-driven", t: "Live executive reporting", d: "Real-time dashboards on funnel health, market compensation and diversity outcomes." },
  ];
  return (
    <section id="why" className="py-24 lg:py-32">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Qbotik</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary">
              The talent partner CHROs measure themselves against
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={i}>
              <div className="h-full rounded-2xl border border-border bg-white p-6 hover:shadow-elevated transition-shadow">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                  <r.icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-primary">{r.k}</p>
                <h3 className="mt-1 font-display text-lg font-bold text-secondary">{r.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* AI Platform section removed */


/* ---------------- GLOBAL DELIVERY MAP ---------------- */
function GlobalDelivery() {
  const hubs = [
    { name: "New York", x: 27, y: 40, size: 14 },
    { name: "London", x: 47, y: 34, size: 14 },
    { name: "Berlin", x: 51, y: 34, size: 10 },
    { name: "Dubai", x: 60, y: 47, size: 10 },
    { name: "Bengaluru", x: 68, y: 55, size: 16 },
    { name: "Singapore", x: 75, y: 60, size: 12 },
    { name: "Tokyo", x: 84, y: 42, size: 12 },
    { name: "São Paulo", x: 33, y: 68, size: 10 },
    { name: "Sydney", x: 85, y: 74, size: 10 },
  ];
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Global Delivery</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary">
              Follow-the-sun sourcing from 12 delivery hubs
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Local recruiters, native languages, in-region compliance — synchronized on a single
              global operating cadence.
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-14 relative aspect-[16/9] rounded-3xl border border-border bg-gradient-to-b from-background to-white overflow-hidden">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full opacity-40">
              <defs>
                <pattern id="dots" x="0" y="0" width="1.5" height="1.5" patternUnits="userSpaceOnUse">
                  <circle cx="0.4" cy="0.4" r="0.25" fill="#4DA3FF" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#dots)" />
            </svg>

            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {hubs.slice(1).map((h, i) => {
                const from = hubs[0];
                return (
                  <motion.path
                    key={i}
                    d={`M ${from.x} ${from.y} Q ${(from.x + h.x) / 2} ${Math.min(from.y, h.y) - 10}, ${h.x} ${h.y}`}
                    stroke="#0F62FE"
                    strokeWidth="0.15"
                    fill="none"
                    strokeDasharray="1 1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ duration: 1.5, delay: i * 0.1 }}
                  />
                );
              })}
            </svg>

            {hubs.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ delay: 0.3 + i * 0.08, type: "spring" }}
                className="absolute"
                style={{ left: `${h.x}%`, top: `${h.y}%`, transform: "translate(-50%, -50%)" }}
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full bg-primary/40 animate-ping"
                    style={{ width: h.size, height: h.size }}
                  />
                  <div
                    className="relative rounded-full bg-primary ring-4 ring-primary/20"
                    style={{ width: h.size, height: h.size }}
                  />
                  <span className="absolute left-1/2 top-full mt-1.5 -translate-x-1/2 text-[10px] sm:text-xs font-semibold text-secondary whitespace-nowrap">
                    {h.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- PROCESS ---------------- */
function Process() {
  const steps = [
    { n: "01", t: "Discover", d: "Kickoff, calibration and intake with hiring managers." },
    { n: "02", t: "Source", d: "AI-ranked shortlist blended with recruiter-led headhunting." },
    { n: "03", t: "Screen", d: "Structured interviews, technical assessments, bias audits." },
    { n: "04", t: "Present", d: "Curated shortlists with fit-scoring and market intel." },
    { n: "05", t: "Close", d: "Offer negotiation, references, onboarding and 90-day check-ins." },
  ];
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Process</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary">
              A rigorous, five-stage recruitment cadence
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-5 relative">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i}>
              <div className="h-full rounded-2xl bg-white border border-border p-6 hover:border-primary/30 hover:shadow-elevated transition-all">
                <p className="font-display text-3xl font-extrabold text-gradient">{s.n}</p>
                <h3 className="mt-4 font-display font-bold text-secondary">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SUCCESS STORIES ---------------- */
function SuccessStories() {
  const stories = [
    {
      slug: "global-fintech-gcc",
      client: "Global FinTech",
      metric: "220 hires",
      timeframe: "in 90 days",
      d: "Scaled a European engineering GCC from zero to 220 engineers across 6 pods.",
    },
    {
      slug: "healthcare-rpo",
      client: "Healthcare Leader",
      metric: "-42%",
      timeframe: "cost per hire",
      d: "RPO transformation across 14 markets — reduced CPH while improving retention.",
    },
    {
      slug: "ai-saas-exec-search",
      client: "AI SaaS Unicorn",
      metric: "18 exec hires",
      timeframe: "under 6 months",
      d: "Built out the C-suite and VP bench ahead of Series D expansion.",
    },
  ];
  return (
    <section id="success" className="py-24 lg:py-32">
      <div className="container-page">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Success Stories</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary">
                Outcomes our clients bring to their board
              </h2>
            </div>
            <Button asChild variant="outline" className="rounded-full font-semibold">
              <Link to="/case-studies">View all case studies</Link>
            </Button>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.client} delay={i}>
              <Card className="h-full rounded-2xl p-7 border-border hover:shadow-elevated transition-shadow bg-white gap-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {s.client}
                </p>
                <p className="mt-6 font-display text-5xl font-extrabold text-secondary">
                  {s.metric}
                </p>
                <p className="text-sm font-medium text-muted-foreground">{s.timeframe}</p>
                <p className="mt-6 text-sm text-foreground/80 leading-relaxed">{s.d}</p>
                <Link to="/case-studies/$slug" params={{ slug: s.slug }} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-all">
                  Read the story <ArrowRight className="h-4 w-4" />
                </Link>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INSIGHTS ---------------- */
function Insights() {
  const posts = [
    {
      slug: "2026-global-talent-outlook",
      tag: "Report",
      image: "/insights/research-signals.png",
      t: "The 2026 Global Talent Outlook",
      d: "Signals from 12,000 hires across 42 markets — where salaries, skills and supply are moving.",
    },
    {
      slug: "ai-native-gcc-playbook",
      tag: "Playbook",
      image: "/insights/hiring-playbook.png",
      t: "Building an AI-native GCC from day one",
      d: "A 90-day blueprint for scaling engineering capability centers with AI at the core.",
    },
    {
      slug: "meridian-rpo-case-study",
      tag: "Case Study",
      image: "/insights/talent-report.png",
      t: "How Meridian cut time-to-hire by 47%",
      d: "Inside the RPO transformation that reshaped a 14-country hiring engine.",
    },
  ];
  return (
    <section id="insights" className="py-24 lg:py-32">
      <div className="container-page">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Insights</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary">
                Research, reports and hiring playbooks
              </h2>
            </div>
            <Link to="/insights" className="text-sm font-semibold text-primary inline-flex items-center gap-1">
              Visit the newsroom <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.t} delay={i}>
              <Link to="/insights/$slug" params={{ slug: p.slug }} className="group block h-full rounded-2xl border border-border bg-white overflow-hidden hover:shadow-elevated transition-all">
                <div className="aspect-[16/10] bg-secondary relative overflow-hidden">
                  <img
                    src={p.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/55 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 text-xs font-semibold text-secondary px-3 py-1">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-bold text-lg text-secondary group-hover:text-primary transition-colors">
                    {p.t}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read insight <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-secondary p-10 sm:p-16 text-primary-foreground">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 15% 100%, rgba(77,163,255,0.5), transparent 50%), radial-gradient(circle at 85% 0%, rgba(255,255,255,0.2), transparent 50%)",
              }}
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1.5 text-xs font-medium">
                  <Rocket className="h-3.5 w-3.5" /> Ready when you are
                </div>
                <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                  Let's build the team that ships your next chapter.
                </h2>
                <p className="mt-4 text-white/80 text-lg max-w-lg">
                  Book a 30-minute working session with a senior talent partner. Walk away with a
                  hiring plan, market benchmarks and a proposed pod within a week.
                </p>
                <div className="mt-8 flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <MessagesSquare className="h-4 w-4" /> Response within 24h
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> Delivery in 42 countries
                  </div>
                  <div className="flex items-center gap-2">
                    <Calculator className="h-4 w-4" /> Custom pricing model
                  </div>
                </div>
              </div>

              <form className="rounded-2xl bg-white text-foreground p-6 shadow-elevated">
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="fn">First name</Label>
                      <Input id="fn" className="mt-1.5" placeholder="Jane" />
                    </div>
                    <div>
                      <Label htmlFor="ln">Last name</Label>
                      <Input id="ln" className="mt-1.5" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Work email</Label>
                    <Input id="email" type="email" className="mt-1.5" placeholder="jane@company.com" />
                  </div>
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" className="mt-1.5" placeholder="Acme Corp" />
                  </div>
                  <Button asChild size="lg" className="rounded-full font-semibold mt-2">
                    <a href="mailto:hello@qbotik.com?subject=Request%20a%20call%20%E2%80%94%20Qbotik">
                      Request a call <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                  <p className="text-[11px] text-muted-foreground text-center">
                    By submitting you agree to Qbotik's privacy policy.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- MAIN ---------------- */
export function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedClients />
      <Services />
      <Industries />
      <WhyChooseUs />
      {/* AI Platform section removed */}
      <GlobalDelivery />
      <Process />
      <SuccessStories />
      
      <Insights />
      <FinalCTA />
    </main>
  );
}
