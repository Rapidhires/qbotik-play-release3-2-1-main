import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  stats: { value: number; suffix?: string; label: string }[];
  offerings: { title: string; desc: string }[];
}

export function ServicePage(p: ServicePageProps) {
  const Icon = p.icon;
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28 bg-hero-gradient">
          <div className="container-page">
            <Reveal>
              <nav className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Link to="/" className="hover:text-primary">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <span>Services</span>
                <ChevronRight className="h-3 w-3" />
                <span className="text-secondary font-medium">{p.title}</span>
              </nav>
            </Reveal>
            <div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr_1fr] items-center">
              <div>
                <Reveal>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5">
                    {p.eyebrow}
                  </div>
                </Reveal>
                <Reveal delay={1}>
                  <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.05]">
                    {p.title}
                  </h1>
                </Reveal>
                <Reveal delay={2}>
                  <p className="mt-5 max-w-xl text-lg text-muted-foreground">{p.description}</p>
                </Reveal>
                <Reveal delay={3}>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button size="lg" asChild className="rounded-full font-semibold shadow-elevated">
                      <Link to="/" hash="contact">Talk to a specialist <ArrowRight className="ml-1 h-4 w-4" /></Link>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="rounded-full font-semibold">
                      <Link to="/" hash="success">See case studies</Link>
                    </Button>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={2}>
                <div className="glass-card rounded-3xl p-8 shadow-elevated">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <ul className="mt-6 space-y-3">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span className="text-foreground/80">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white border-y border-border">
          <div className="container-page grid gap-8 sm:grid-cols-3">
            {p.stats.map((s, i) => (
              <Reveal key={s.label} delay={i}>
                <div>
                  <p className="font-display text-4xl sm:text-5xl font-extrabold text-gradient">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Offerings */}
        <section className="py-24 lg:py-32">
          <div className="container-page">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we deliver</p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-secondary">
                  A calibrated engagement model, tuned to your operating cadence
                </h2>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {p.offerings.map((o, i) => (
                <Reveal key={o.title} delay={i}>
                  <div className="h-full rounded-2xl border border-border bg-white p-6 hover:-translate-y-1 hover:shadow-elevated hover:border-primary/30 transition-all">
                    <h3 className="font-display font-bold text-secondary">{o.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24">
          <div className="container-page">
            <div className="rounded-[2rem] bg-secondary text-secondary-foreground p-10 sm:p-14 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 100% 0%, rgba(77,163,255,0.5), transparent 50%)",
                }}
              />
              <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold">
                    Ready to talk {p.title.toLowerCase()}?
                  </h3>
                  <p className="mt-2 text-white/70">Book a working session with a senior partner.</p>
                </div>
                <Button size="lg" asChild className="rounded-full font-semibold bg-white text-secondary hover:bg-accent hover:text-secondary">
                  <Link to="/" hash="contact">Get started <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
