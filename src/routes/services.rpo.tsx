import { createFileRoute } from "@tanstack/react-router";
import { Repeat } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/rpo")({
  head: () => ({
    meta: [
      { title: "Recruitment Process Outsourcing (RPO) — Qbotik" },
      { name: "description", content: "End-to-end RPO with dedicated pods, technology and SLA-backed outcomes." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="RPO"
      title="Your recruitment function, engineered end-to-end"
      description="Full, project or hybrid RPO — we operate as an extension of your talent team, backed by AI-augmented sourcing and measurable SLAs."
      icon={Repeat}
      bullets={[
        "Dedicated pods embedded in your ATS and rituals",
        "AI-augmented sourcing included with every engagement",
        "Executive dashboards on funnel, cost and quality",
        "Flex-up models for hiring surges and slow-downs",
      ]}
      stats={[
        { value: 60, suffix: "+", label: "Live RPO programs globally" },
        { value: 42, suffix: "%", label: "Avg reduction in cost-per-hire" },
        { value: 3, suffix: "x", label: "Faster time-to-shortlist" },
      ]}
      offerings={[
        { title: "Full RPO", desc: "Own the entire hiring function across a region." },
        { title: "Project RPO", desc: "Bounded programs for launches or transformations." },
        { title: "Hybrid RPO", desc: "Blend internal TA with our specialist pods." },
        { title: "Sourcing-as-a-Service", desc: "Top-of-funnel outsourced to our sourcers." },
        { title: "Employer branding", desc: "EVP, careers site and content programs." },
        { title: "TA analytics", desc: "Insights, dashboards and market benchmarks." },
      ]}
    />
  ),
});
