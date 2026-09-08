import { createFileRoute } from "@tanstack/react-router";
import { Cpu } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/ai-talent")({
  head: () => ({
    meta: [
      { title: "AI Talent — Qbotik" },
      { name: "description", content: "Specialist recruitment for ML, LLM, MLOps and applied AI talent globally." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="AI Talent"
      title="The specialists shipping the frontier"
      description="A practice dedicated to placing machine learning, LLM, MLOps and applied science leaders — the people building the AI systems boards are asking about."
      icon={Cpu}
      bullets={[
        "Recruiters with ML/AI engineering backgrounds",
        "Access to top labs, PhDs and open-source authors",
        "Compensation intel refreshed weekly",
        "Deep evaluation partners for technical screens",
      ]}
      stats={[
        { value: 900, suffix: "+", label: "AI/ML placements in 24 months" },
        { value: 60, suffix: "%", label: "From passive/inbound pipelines" },
        { value: 14, label: "Days to first hire (median)" },
      ]}
      offerings={[
        { title: "LLM & applied research", desc: "Research scientists, applied AI engineers." },
        { title: "MLOps & platforms", desc: "Training infra, feature stores, serving." },
        { title: "AI product", desc: "AI-native PMs, designers and TPMs." },
        { title: "Data & ML engineering", desc: "Pipelines, quality and evaluation systems." },
        { title: "Safety & governance", desc: "AI risk, red-teaming and policy leads." },
        { title: "AI leadership", desc: "VP AI, Head of ML and Chief AI Officer." },
      ]}
    />
  ),
});
