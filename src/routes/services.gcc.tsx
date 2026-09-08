import { createFileRoute } from "@tanstack/react-router";
import { Building2 } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/gcc")({
  head: () => ({
    meta: [
      { title: "Global Capability Centers — Qbotik" },
      { name: "description", content: "Design, build, staff and operate Global Capability Centers across India, LATAM and EMEA." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Global Capability Centers"
      title="Design and staff GCCs that actually deliver"
      description="From location strategy to entity setup to steady-state operations — a single accountable partner for your global capability build-out."
      icon={Building2}
      bullets={[
        "Location and TCO analysis across 20+ hubs",
        "Entity setup, real estate and workspace",
        "Leadership hiring and org design",
        "Steady-state hiring and workforce planning",
      ]}
      stats={[
        { value: 28, label: "GCCs stood up to date" },
        { value: 3800, suffix: "+", label: "Engineers hired in GCCs" },
        { value: 12, label: "Countries of GCC delivery" },
      ]}
      offerings={[
        { title: "Location strategy", desc: "TCO, talent supply and risk analysis by hub." },
        { title: "Entity & compliance", desc: "Setup, banking, regulatory and payroll." },
        { title: "Leadership hiring", desc: "Center head, functional VPs and directors." },
        { title: "Engineering pods", desc: "Product, platform, data and AI teams." },
        { title: "Enabling functions", desc: "Finance, HR, procurement shared services." },
        { title: "Center operations", desc: "Ongoing hiring, comms and workforce planning." },
      ]}
    />
  ),
});
