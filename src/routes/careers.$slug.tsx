import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronRight, MapPin, Briefcase, CheckCircle2, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { getJob } from "@/lib/careers";

export const Route = createFileRoute("/careers/$slug")({
  loader: ({ params }) => {
    const job = getJob(params.slug);
    if (!job) throw notFound();
    return { job };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Role unavailable — Qbotik Careers" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { job } = loaderData;
    return {
      meta: [
        { title: `${job.title} — Careers at Qbotik` },
        { name: "description", content: job.summary },
        { property: "og:title", content: `${job.title} — Careers at Qbotik` },
        { property: "og:description", content: job.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: JobDetail,
});

function JobDetail() {
  const { job } = Route.useLoaderData();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-dvh bg-background">
      <SiteNav />
      <main>
        <section className="pt-32 pb-14 bg-hero-gradient">
          <div className="container-page">
            <Reveal>
              <nav className="text-xs text-muted-foreground flex flex-wrap items-center gap-1.5">
                <Link to="/" className="hover:text-primary">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <Link to="/careers" className="hover:text-primary">Careers</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-secondary font-medium">{job.title}</span>
              </nav>
            </Reveal>
            <Reveal delay={1}>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs font-semibold">
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-primary">{job.team}</span>
                <span className="rounded-full bg-muted px-2.5 py-1 text-muted-foreground">{job.type}</span>
              </div>
              <h1 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary leading-[1.08]">
                {job.title}
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><MapPin className="h-4 w-4" />{job.location}</span>
                <span className="inline-flex items-center gap-1.5"><Briefcase className="h-4 w-4" />{job.level}</span>
                <span>{job.salary}</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container-page grid gap-12 lg:grid-cols-[1.4fr_1fr] items-start">
            <div className="min-w-0">
              <p className="text-lg text-muted-foreground">{job.summary}</p>

              <h2 className="mt-10 font-display text-xl font-bold text-secondary">What you'll do</h2>
              <ul className="mt-4 space-y-3">
                {job.responsibilities.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 font-display text-xl font-bold text-secondary">What we're looking for</h2>
              <ul className="mt-4 space-y-3">
                {job.requirements.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <Button asChild variant="outline" className="rounded-full font-semibold">
                  <Link to="/careers"><ArrowLeft className="mr-1 h-4 w-4" /> All open roles</Link>
                </Button>
              </div>
            </div>

            <div id="apply" className="rounded-2xl border border-border bg-card p-6 shadow-soft lg:sticky lg:top-24">
              <h2 className="font-display text-lg font-bold text-secondary">Apply for this role</h2>
              {submitted ? (
                <div className="mt-6 rounded-xl bg-primary/5 p-5 text-sm" role="status" aria-live="polite">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-semibold text-secondary">Application received</p>
                  <p className="mt-1 text-muted-foreground">
                    Thanks for applying to {job.title}. Our talent team reviews every application
                    and will be in touch within five business days.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 rounded-full"
                    onClick={() => setSubmitted(false)}
                  >
                    Submit another application
                  </Button>
                </div>
              ) : (
                <form
                  className="mt-5 space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                    toast.success("Application submitted", {
                      description: `We've received your application for ${job.title}.`,
                    });
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="app-first">First name</Label>
                      <Input id="app-first" name="firstName" required className="mt-1.5" placeholder="Jane" />
                    </div>
                    <div>
                      <Label htmlFor="app-last">Last name</Label>
                      <Input id="app-last" name="lastName" required className="mt-1.5" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="app-email">Work email</Label>
                    <Input id="app-email" name="email" type="email" required className="mt-1.5" placeholder="jane@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="app-phone">Phone</Label>
                    <Input id="app-phone" name="phone" type="tel" className="mt-1.5" placeholder="+44 7700 900000" />
                  </div>
                  <div>
                    <Label htmlFor="app-linkedin">LinkedIn or portfolio</Label>
                    <Input id="app-linkedin" name="linkedin" className="mt-1.5" placeholder="linkedin.com/in/jane" />
                  </div>
                  <div>
                    <Label htmlFor="app-note">Why this role?</Label>
                    <Textarea id="app-note" name="note" rows={4} className="mt-1.5" placeholder="A few lines about your experience." />
                  </div>
                  <Button type="submit" className="w-full rounded-full font-semibold shadow-elevated">
                    Submit application
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    By applying you agree to Qbotik processing your details for recruitment purposes.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
