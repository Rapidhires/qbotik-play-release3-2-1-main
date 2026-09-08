import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HomePage } from "@/components/site/HomePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qbotik — Enterprise Staffing & Talent Solutions" },
      {
        name: "description",
        content:
          "AI-augmented permanent hiring, contract staffing, executive search and RPO for global enterprises. Delivered from 40+ countries.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <HomePage />
      <SiteFooter />
    </div>
  );
}
