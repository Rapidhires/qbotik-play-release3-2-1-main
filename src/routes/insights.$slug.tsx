import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { INSIGHTS } from "@/lib/content";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const post = INSIGHTS.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Insight not found — Qbotik" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.post;
    return {
      meta: [
        { title: `${p.title} — Qbotik Insights` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — Qbotik Insights` },
        { property: "og:description", content: p.summary },
      ],
    };
  },
  component: InsightDetail,
});

function InsightDetail() {
  const { post } = Route.useLoaderData();
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
                <Link to="/insights" className="hover:text-primary">Insights</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-secondary font-medium">{post.tag}</span>
              </nav>
            </Reveal>
            <Reveal delay={1}>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5">
                {post.tag}
              </div>
              <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.05] max-w-3xl">
                {post.title}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{post.summary}</p>
              <p className="mt-4 text-xs text-muted-foreground">
                {post.publishedAt} · {post.readTime}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20">
          <div className="container-page max-w-3xl">
            <div className="space-y-10">
              {post.sections.map((s: { heading: string; body: string }, i: number) => (
                <Reveal key={s.heading} delay={i}>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-secondary">
                      {s.heading}
                    </h2>
                    <p className="mt-3 text-foreground/80 leading-relaxed">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-16 rounded-2xl border border-border bg-white p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display font-bold text-secondary">Want the full briefing?</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Talk to a Qbotik partner about applying this to your hiring plan.
                  </p>
                </div>
                <Button asChild className="rounded-full font-semibold">
                  <Link to="/" hash="contact">Talk to sales <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </Reveal>

            <div className="mt-14 flex items-center justify-between">
              <Link to="/insights" className="text-sm font-semibold text-primary inline-flex items-center gap-1.5">
                <ChevronRight className="h-4 w-4 rotate-180" /> Back to insights
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
