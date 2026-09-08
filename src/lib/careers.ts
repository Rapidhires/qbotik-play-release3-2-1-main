export interface Job {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: "Full-time" | "Contract" | "Internship";
  level: string;
  salary: string;
  posted: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

export const JOBS: Job[] = [
  {
    slug: "senior-technical-recruiter-london",
    title: "Senior Technical Recruiter",
    team: "Delivery",
    location: "London, UK (Hybrid)",
    type: "Full-time",
    level: "Senior",
    salary: "£62,000 – £78,000 + bonus",
    posted: "Posted 3 days ago",
    summary:
      "Own end-to-end hiring for platform, data and AI engineering mandates across our Tier-1 FinTech accounts.",
    responsibilities: [
      "Run full-cycle search for senior engineering roles across EMEA",
      "Partner with hiring managers on calibration, scorecards and market intel",
      "Keep pipeline health, SLA and offer-acceptance metrics on target",
    ],
    requirements: [
      "5+ years of in-house or agency technical recruitment",
      "Track record hiring senior backend, platform or ML engineers",
      "Comfort operating in a data-led, SLA-backed delivery model",
    ],
  },
  {
    slug: "rpo-account-director-emea",
    title: "RPO Account Director",
    team: "Client Solutions",
    location: "Amsterdam, NL (Hybrid)",
    type: "Full-time",
    level: "Director",
    salary: "€110,000 – €135,000 + bonus",
    posted: "Posted 1 week ago",
    summary:
      "Lead multi-market RPO programmes for enterprise clients, owning commercials, delivery and executive relationships.",
    responsibilities: [
      "Own P&L and SLA performance for a portfolio of enterprise RPO accounts",
      "Lead regional pod leads and quarterly business reviews with client executives",
      "Drive expansion into adjacent functions and markets",
    ],
    requirements: [
      "8+ years in RPO, MSP or enterprise talent consulting",
      "Experience running multi-country delivery teams",
      "Strong commercial and stakeholder management skills",
    ],
  },
  {
    slug: "ai-sourcing-engineer",
    title: "AI Sourcing Engineer",
    team: "Product & AI",
    location: "Remote (EU time zones)",
    type: "Full-time",
    level: "Mid–Senior",
    salary: "€85,000 – €105,000",
    posted: "Posted 2 weeks ago",
    summary:
      "Build the retrieval and ranking systems that power Qbotik's AI-augmented candidate shortlisting.",
    responsibilities: [
      "Design and ship candidate matching, ranking and enrichment pipelines",
      "Evaluate model quality with recruiters in the loop",
      "Integrate with client ATS platforms (Greenhouse, Workday, SuccessFactors)",
    ],
    requirements: [
      "Strong Python/TypeScript and production ML or search experience",
      "Hands-on with embeddings, vector search and LLM evaluation",
      "Pragmatic approach to shipping in a regulated data environment",
    ],
  },
  {
    slug: "gcc-site-lead-bengaluru",
    title: "GCC Site Lead",
    team: "Global Capability Centers",
    location: "Bengaluru, India (On-site)",
    type: "Full-time",
    level: "Senior Manager",
    salary: "₹48L – ₹62L",
    posted: "Posted 5 days ago",
    summary:
      "Stand up and scale a client capability center from charter to a 200-person engineering org.",
    responsibilities: [
      "Own site charter, hiring plan and operating cadence",
      "Build and coach pod leads across engineering and operations",
      "Report delivery, attrition and hiring health to the parent org",
    ],
    requirements: [
      "Experience launching or scaling a GCC / offshore delivery center",
      "Strong hiring and org-design fundamentals",
      "Excellent executive communication",
    ],
  },
  {
    slug: "talent-research-analyst",
    title: "Talent Research Analyst",
    team: "Executive Search",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    level: "Associate",
    salary: "$78,000 – $92,000",
    posted: "Posted 4 days ago",
    summary:
      "Map global operator markets and build calibrated longlists for confidential C-suite mandates.",
    responsibilities: [
      "Produce market maps, org charts and compensation benchmarks",
      "Support search partners on confidential executive mandates",
      "Maintain research quality standards and knowledge assets",
    ],
    requirements: [
      "2+ years in executive search research, consulting or market intelligence",
      "Exceptional written analysis and attention to detail",
      "Discretion handling confidential mandates",
    ],
  },
  {
    slug: "contract-delivery-coordinator",
    title: "Contract Delivery Coordinator",
    team: "Contract Staffing",
    location: "Warsaw, PL (Hybrid)",
    type: "Contract",
    level: "Mid",
    salary: "PLN 16,000 – 21,000 / month",
    posted: "Posted 1 day ago",
    summary:
      "Keep contractor onboarding, compliance and extensions running smoothly across 12 European markets.",
    responsibilities: [
      "Coordinate onboarding, right-to-work and compliance checks",
      "Manage timesheets, extensions and contractor experience",
      "Flag delivery risk early to account leads",
    ],
    requirements: [
      "Experience in contractor operations or workforce administration",
      "Comfort with multi-country compliance requirements",
      "Fluent English; a second European language is a plus",
    ],
  },
];

export function getJob(slug: string) {
  return JOBS.find((j) => j.slug === slug);
}
