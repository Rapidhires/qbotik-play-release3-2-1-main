import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/executive-search")({
  head: () => ({
    meta: [
      { title: "Executive Search — Qbotik" },
      { name: "description", content: "Confidential C-suite and VP search for enterprise and growth-stage companies." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Executive Search"
      title="Discreet leadership search that lands"
      description="Retained search led by senior partners — for CEO, CFO, CTO, CHRO and VP-level appointments across regulated and high-growth markets."
      icon={Search}
      bullets={[
        "Partner-led with dedicated research analyst pod",
        "Bespoke long-lists benchmarked to your competitors",
        "Confidential outreach and structured assessments",
        "Onboarding and 12-month integration support",
      ]}
      stats={[
        { value: 340, suffix: "+", label: "Executive appointments per year" },
        { value: 96, suffix: "%", label: "First-shortlist success" },
        { value: 32, label: "Countries of active search" },
      ]}
      offerings={[
        { title: "Board & C-suite", desc: "Chair, NED, CEO and CxO appointments." },
        { title: "Functional leadership", desc: "VP of Engineering, Product, Sales, Marketing." },
        { title: "PE & VC portfolio", desc: "Value-creation hires for portfolio companies." },
        { title: "Succession planning", desc: "Confidential mapping of succession pipelines." },
        { title: "Board effectiveness", desc: "Board reviews, refresh strategy and diversity." },
        { title: "Interim executives", desc: "Rapid deployment of proven interim leaders." },
      ]}
    />
  ),
});
