import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/permanent-hiring")({
  head: () => ({
    meta: [
      { title: "Permanent Hiring — Qbotik" },
      { name: "description", content: "Full-time recruitment for critical enterprise roles, backed by SLAs and AI-driven shortlists." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Permanent Hiring"
      title="Full-time talent, calibrated to your roadmap"
      description="From single hires to org-wide expansions, we combine market intelligence, structured interviews and AI shortlists to place the right people, faster."
      icon={Users}
      bullets={[
        "Dedicated pod aligned to your hiring managers",
        "Market comp benchmarks refreshed weekly",
        "Structured interviews and bias-audited scoring",
        "90-day replacement guarantee on every hire",
      ]}
      stats={[
        { value: 12000, suffix: "+", label: "Permanent placements per year" },
        { value: 94, suffix: "%", label: "12-month retention rate" },
        { value: 21, label: "Avg days to signed offer" },
      ]}
      offerings={[
        { title: "Volume hiring", desc: "50-500+ role campaigns with weekly SLA reporting." },
        { title: "Specialist roles", desc: "Niche technical and domain hires with deep sourcing." },
        { title: "Diversity hiring", desc: "Ring-fenced diverse pipelines and inclusive interview design." },
        { title: "Campus & early careers", desc: "Graduate programs across 30+ university markets." },
        { title: "Return-to-work", desc: "Curated programs to re-engage senior talent." },
        { title: "Talent mapping", desc: "Competitor and market maps for succession planning." },
      ]}
    />
  ),
});
