import { createFileRoute } from "@tanstack/react-router";
import { Code2 } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/technology")({
  head: () => ({
    meta: [
      { title: "Technology Recruitment — Qbotik" },
      { name: "description", content: "Cloud, data, security and product engineering recruitment at enterprise scale." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Technology Recruitment"
      title="The engineering bench that ships your roadmap"
      description="Enterprise-scale recruitment across cloud, platform, data, security and product engineering — permanent and contract, globally."
      icon={Code2}
      bullets={[
        "Domain-specialist recruiters, not generalists",
        "Deep coverage of AWS, Azure, GCP and Kubernetes talent",
        "Security-cleared talent for regulated markets",
        "Structured technical assessments included",
      ]}
      stats={[
        { value: 4200, suffix: "+", label: "Tech hires per year" },
        { value: 88, suffix: "%", label: "Offer acceptance rate" },
        { value: 18, label: "Avg days to shortlist" },
      ]}
      offerings={[
        { title: "Cloud & infrastructure", desc: "SRE, platform, DevOps and cloud architects." },
        { title: "Data engineering", desc: "Warehouses, streaming, analytics engineering." },
        { title: "Cybersecurity", desc: "AppSec, GRC, SecOps and cloud security." },
        { title: "Product engineering", desc: "Full-stack, mobile and frontend at scale." },
        { title: "Enterprise platforms", desc: "SAP, Salesforce, ServiceNow, Workday." },
        { title: "QA & SDET", desc: "Automation, performance and reliability testing." },
      ]}
    />
  ),
});
