import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { CASE_STUDIES } from "@/lib/content";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const story = CASE_STUDIES.find((s) => s.slug === params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Case study not found — Qbotik" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const s = loaderData.story;
    return {
      meta: [
        { title: `${s.client} — Qbotik Case Study` },
        { name: "description", content: s.summary },
        { property: "og:title", content: `${s.client} — Qbotik Case Study` },
        { property: "og:description", content: s.summary },
      ],
    };
  },
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const { story } = Route.useLoaderData();
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
                <Link to="/case-studies" className="hover:text-primary">Case Studies</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-secondary font-medium">{story.client}</span>
              </nav>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {story.industry}
              </p>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.05] max-w-3xl">
                {story.client}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
                {story.summary}
              </p>
            </Reveal>
            <Reveal delay={2}>
              <div className="mt-10 flex flex-wrap gap-6">
                <div>
                  <p className="font-display text-4xl font-extrabold text-gradient">
                    {story.metric}
                  </p>
                  <p className="text-sm text-muted-foreground">{story.timeframe}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-20">
          <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div className="space-y-10">
              <Reveal>
                <div>
                  <h2 className="font-display text-2xl font-bold text-secondary">The challenge</h2>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{story.challenge}</p>
                </div>
              </Reveal>
              <Reveal>
                <div>
                  <h2 className="font-display text-2xl font-bold text-secondary">What Qbotik did</h2>
                  <p className="mt-3 text-foreground/80 leading-relaxed">{story.solution}</p>
                </div>
              </Reveal>
              <Reveal>
                <figure className="rounded-2xl border border-border bg-white p-7">
                  <blockquote className="font-display text-xl text-secondary leading-snug">
                    "{story.quote.q}"
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-muted-foreground">
                    <span className="font-semibold text-secondary">{story.quote.a}</span> — {story.quote.r}
                  </figcaption>
                </figure>
              </Reveal>
            </div>
            <Reveal delay={1}>
              <div className="rounded-2xl border border-border bg-white p-7 h-fit sticky top-24">
                <h3 className="font-display font-bold text-secondary">Results</h3>
                <ul className="mt-5 space-y-5">
                  {story.results.map((r: { k: string; v: string }) => (
                    <li key={r.k}>
                      <p className="font-display text-3xl font-extrabold text-primary">{r.k}</p>
                      <p className="text-sm text-muted-foreground">{r.v}</p>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-8 w-full rounded-full font-semibold">
                  <Link to="/" hash="contact">Talk to a specialist <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="pb-24">
          <div className="container-page">
            <Reveal>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h3 className="font-display text-xl font-bold text-secondary">More case studies</h3>
                <Button asChild variant="outline" className="rounded-full font-semibold">
                  <Link to="/case-studies">View all</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
