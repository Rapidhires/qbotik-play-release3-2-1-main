import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { INSIGHTS } from "@/lib/content";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights — Qbotik" },
      {
        name: "description",
        content:
          "Reports, playbooks and case studies on enterprise hiring, GCCs and AI-augmented talent strategy from Qbotik.",
      },
      { property: "og:title", content: "Insights — Qbotik" },
      {
        property: "og:description",
        content:
          "Research and playbooks for enterprise talent leaders.",
      },
    ],
  }),
  component: InsightsIndex,
});

function InsightsIndex() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main>
        <section className="pt-32 pb-16 bg-hero-gradient">
          <div className="container-page">
            <Reveal>
              <nav className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Link to="/" className="hover:text-primary">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-secondary font-medium">Insights</span>
              </nav>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.05] max-w-3xl">
                Research, reports and hiring playbooks
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
                Signals from thousands of enterprise engagements — distilled
                into practical guides for CHROs, TA leaders and CFOs.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20">
          <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INSIGHTS.map((p, i) => (
              <Reveal key={p.slug} delay={i}>
                <Link
                  to="/insights/$slug"
                  params={{ slug: p.slug }}
                  className="group block h-full rounded-2xl border border-border bg-white overflow-hidden hover:shadow-elevated transition-all"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary via-accent to-secondary relative overflow-hidden">
                    <span className="absolute top-4 left-4 rounded-full bg-white/90 text-xs font-semibold text-secondary px-3 py-1">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs text-muted-foreground">{p.publishedAt} · {p.readTime}</p>
                    <h2 className="mt-2 font-display font-bold text-lg text-secondary group-hover:text-primary transition-colors">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read insight <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
