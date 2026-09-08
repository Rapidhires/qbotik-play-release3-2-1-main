import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { CASE_STUDIES } from "@/lib/content";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — Qbotik" },
      {
        name: "description",
        content:
          "Enterprise hiring outcomes: RPO transformations, GCC build-outs and executive search wins delivered by Qbotik across 40+ countries.",
      },
      { property: "og:title", content: "Case Studies — Qbotik" },
      {
        property: "og:description",
        content:
          "How global enterprises rebuilt their hiring engines with Qbotik.",
      },
    ],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
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
                <span className="text-secondary font-medium">Case Studies</span>
              </nav>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.05] max-w-3xl">
                Outcomes our clients bring to their board
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
                A selection of enterprise engagements — from green-field GCCs to
                multi-country RPO transformations and confidential executive
                mandates.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20">
          <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((s, i) => (
              <Reveal key={s.slug} delay={i}>
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: s.slug }}
                  className="group block h-full rounded-2xl border border-border bg-white p-7 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated transition-all"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {s.industry}
                  </p>
                  <p className="mt-6 font-display text-5xl font-extrabold text-secondary">
                    {s.metric}
                  </p>
                  <p className="text-sm font-medium text-muted-foreground">
                    {s.timeframe}
                  </p>
                  <h2 className="mt-6 font-display text-lg font-bold text-secondary">
                    {s.client}
                  </h2>
                  <p className="mt-2 text-sm text-foreground/80 leading-relaxed">
                    {s.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Read the story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
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
