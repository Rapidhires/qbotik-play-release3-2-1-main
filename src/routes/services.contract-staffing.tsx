import { createFileRoute } from "@tanstack/react-router";
import { Briefcase } from "lucide-react";
import { ServicePage } from "@/components/site/ServicePage";

export const Route = createFileRoute("/services/contract-staffing")({
  head: () => ({
    meta: [
      { title: "Contract Staffing — Qbotik" },
      { name: "description", content: "Flexible contract and interim talent, deployed in days across 40+ countries." },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Contract Staffing"
      title="On-demand talent that ships with your teams"
      description="Deploy vetted contractors in days, not weeks. Fully compliant across 40+ countries with local payroll, benefits and IR35/AWR handling."
      icon={Briefcase}
      bullets={[
        "48-hour candidate submissions on most roles",
        "Global payroll and compliance handled",
        "Convert-to-perm option on every engagement",
        "Dedicated account manager and success ops",
      ]}
      stats={[
        { value: 6500, suffix: "+", label: "Contractors under management" },
        { value: 48, suffix: "h", label: "Median submission SLA" },
        { value: 42, label: "Countries of coverage" },
      ]}
      offerings={[
        { title: "IT & engineering", desc: "Cloud, data, security, product and platform contractors." },
        { title: "Change & transformation", desc: "PMO, business analysts and change leads." },
        { title: "Statement of work", desc: "Milestone-based delivery pods, not headcount." },
        { title: "Global payroll", desc: "Multi-country payroll & EOR services under one contract." },
        { title: "Contingent workforce", desc: "MSP-lite programs with tail-spend consolidation." },
        { title: "Interim leadership", desc: "Fractional CTO, CIO and CFO cover." },
      ]}
    />
  ),
});
