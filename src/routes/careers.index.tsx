import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronRight, MapPin, Briefcase, Search } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { JOBS } from "@/lib/careers";

export const Route = createFileRoute("/careers/")({
  head: () => ({
    meta: [
      { title: "Careers at Qbotik — Open Roles & Applications" },
      {
        name: "description",
        content:
          "Join Qbotik. Browse open roles in recruitment delivery, RPO, executive search, AI engineering and global capability centers, and apply in minutes.",
      },
      { property: "og:title", content: "Careers at Qbotik — Open Roles & Applications" },
      {
        property: "og:description",
        content: "Open roles across delivery, RPO, executive search and AI engineering.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CareersIndex,
});

const teams = ["All teams", ...Array.from(new Set(JOBS.map((j) => j.team)))];

function CareersIndex() {
  const [q, setQ] = useState("");
  const [team, setTeam] = useState("All teams");

  const filtered = JOBS.filter((j) => {
    const matchesTeam = team === "All teams" || j.team === team;
    const needle = q.trim().toLowerCase();
    const matchesQuery =
      !needle ||
      j.title.toLowerCase().includes(needle) ||
      j.location.toLowerCase().includes(needle) ||
      j.summary.toLowerCase().includes(needle);
    return matchesTeam && matchesQuery;
  });

  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <section className="pt-32 pb-16 bg-hero-gradient">
          <div className="container-page">
            <Reveal>
              <nav className="text-xs text-muted-foreground flex items-center gap-1.5">
                <Link to="/" className="hover:text-primary">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-secondary font-medium">Careers</span>
              </nav>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl font-extrabold text-secondary leading-[1.05]">
                Build the future of enterprise hiring
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
                We're a distributed team of recruiters, researchers and engineers delivering
                talent across 40+ countries. Find a role, apply in minutes, and hear back
                within five business days.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container-page">
            <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] items-center">
              <div className="relative min-w-0">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <label htmlFor="job-search" className="sr-only">Search open roles</label>
                <Input
                  id="job-search"
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search roles, locations or keywords"
                  className="pl-9"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {teams.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTeam(t)}
                    aria-pressed={team === t}
                    className={
                      "rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors " +
                      (team === t
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-card text-muted-foreground hover:text-primary")
                    }
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
              {filtered.length} open {filtered.length === 1 ? "role" : "roles"}
            </p>

            <ul className="mt-4 space-y-4">
              {filtered.map((job, i) => (
                <li key={job.slug}>
                  <Reveal delay={Math.min(i, 4)}>
                    <div className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-elevated">
                      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-primary">{job.team}</span>
                            <span className="rounded-full bg-muted px-2.5 py-1 text-muted-foreground">{job.type}</span>
                            <span className="text-muted-foreground font-normal">{job.posted}</span>
                          </div>
                          <h2 className="mt-3 font-display text-xl font-bold text-secondary">
                            <Link to="/careers/$slug" params={{ slug: job.slug }} className="hover:text-primary">
                              {job.title}
                            </Link>
                          </h2>
                          <p className="mt-2 text-sm text-muted-foreground">{job.summary}</p>
                          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{job.location}</span>
                            <span className="inline-flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" />{job.level}</span>
                            <span>{job.salary}</span>
                          </div>
                        </div>
                        <Button asChild size="sm" className="rounded-full font-semibold shrink-0">
                          <Link to="/careers/$slug" params={{ slug: job.slug }}>
                            View role <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            {filtered.length === 0 && (
              <div className="mt-6 rounded-2xl border border-dashed border-border p-10 text-center">
                <p className="text-sm text-muted-foreground">
                  No roles match that search. Try a different keyword or clear the filters.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 rounded-full"
                  onClick={() => {
                    setQ("");
                    setTeam("All teams");
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
