export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  metric: string;
  timeframe: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { k: string; v: string }[];
  quote: { q: string; a: string; r: string };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "global-fintech-gcc",
    client: "Global FinTech",
    industry: "Financial Services",
    metric: "220 hires",
    timeframe: "in 90 days",
    summary:
      "Scaled a European engineering GCC from zero to 220 engineers across 6 pods.",
    challenge:
      "A Tier-1 European FinTech needed to stand up a green-field engineering Global Capability Center in Warsaw within a single quarter to protect an aggressive product roadmap. Local competition for platform, data and payments talent was fierce and their internal TA function had never delivered at this velocity.",
    solution:
      "Qbotik deployed a dedicated 14-recruiter pod with embedded sourcers in three time zones, plugged our AI-augmented sourcing into their Greenhouse ATS, and ran a weekly calibration cadence with hiring managers. We pre-negotiated market bands, streamlined the interview loop from 7 to 4 stages, and ran employer-brand campaigns targeting senior platform talent.",
    results: [
      { k: "220", v: "engineers hired in 90 days" },
      { k: "4.1 days", v: "average time-to-shortlist" },
      { k: "92%", v: "offer acceptance rate" },
      { k: "-31%", v: "cost per hire vs prior baseline" },
    ],
    quote: {
      q: "Qbotik rebuilt our entire European tech org — 180 hires in a year with retention north of 94%.",
      a: "Isabelle Moreau",
      r: "CHRO, Global FinTech",
    },
  },
  {
    slug: "healthcare-rpo",
    client: "Healthcare Leader",
    industry: "Healthcare & Life Sciences",
    metric: "-42%",
    timeframe: "cost per hire",
    summary:
      "RPO transformation across 14 markets — reduced CPH while improving retention.",
    challenge:
      "A Fortune 100 healthcare group was running fragmented recruitment across 14 country operations with 27 different agency vendors, no unified reporting, and cost-per-hire trending the wrong way. Regulatory hiring in clinical and compliance roles was slipping SLA in five markets.",
    solution:
      "We consolidated the vendor stack into a single Qbotik-managed RPO with country pods, deployed a shared candidate CRM, and stood up a real-time executive dashboard for the CPO. Clinical and compliance hiring moved onto specialised pods with SLA-backed delivery guarantees.",
    results: [
      { k: "-42%", v: "cost per hire, year one" },
      { k: "+18pp", v: "12-month retention improvement" },
      { k: "14", v: "markets on a single operating cadence" },
      { k: "27 → 1", v: "vendor consolidation" },
    ],
    quote: {
      q: "One partner, one dashboard, one accountable team across 14 markets. Board loves it.",
      a: "Rakesh Iyer",
      r: "CPO, Healthcare Leader",
    },
  },
  {
    slug: "ai-saas-exec-search",
    client: "AI SaaS Unicorn",
    industry: "Technology & SaaS",
    metric: "18 exec hires",
    timeframe: "under 6 months",
    summary: "Built out the C-suite and VP bench ahead of Series D expansion.",
    challenge:
      "A late-stage AI SaaS company preparing to raise a $400M Series D needed to complete its executive bench — CFO, CRO, VP Engineering, VP Product and a slate of GMs — under strict confidentiality and inside two board cycles.",
    solution:
      "A senior Executive Search partner led a confidential mandate with a bespoke research team, mapped the global operator market for AI-native leadership, and ran parallel processes for six roles simultaneously. Every finalist went through a structured leadership assessment and back-channel referencing.",
    results: [
      { k: "18", v: "executive hires closed" },
      { k: "5.5 months", v: "from kickoff to full bench" },
      { k: "100%", v: "confidential process — zero market leaks" },
      { k: "Series D", v: "closed on schedule" },
    ],
    quote: {
      q: "Their AI-augmented sourcing gave us calibrated shortlists in hours. It's genuinely a different tier of vendor.",
      a: "David Chen",
      r: "VP Talent, AI SaaS Unicorn",
    },
  },
];

export interface Insight {
  slug: string;
  tag: string;
  image: string;
  title: string;
  summary: string;
  readTime: string;
  publishedAt: string;
  sections: { heading: string; body: string }[];
}

export const INSIGHTS: Insight[] = [
  {
    slug: "2026-global-talent-outlook",
    tag: "Report",
    image: "/insights/research-signals.png",
    title: "The 2026 Global Talent Outlook",
    summary:
      "Signals from 12,000 hires across 42 markets — where salaries, skills and supply are moving.",
    readTime: "12 min read",
    publishedAt: "March 2026",
    sections: [
      {
        heading: "The macro picture",
        body: "Wage growth for senior technical talent decelerated to 4.8% year-on-year globally, with the sharpest cooling in North American Big Tech and the strongest expansion in the Gulf and Southeast Asia. Candidate mobility, however, ticked back up as AI-native roles pulled experienced operators out of stable seats.",
      },
      {
        heading: "Where salaries are moving",
        body: "AI research and platform engineering continue to command a 22–35% premium over adjacent software roles. Data engineering compensation has flattened after two years of double-digit growth, and cybersecurity leadership remains structurally undersupplied in EMEA.",
      },
      {
        heading: "Skills gaining momentum",
        body: "Applied ML, LLM systems engineering, agent orchestration, and evaluation infrastructure are the four skill clusters growing fastest in enterprise hiring plans for 2026. Traditional MLOps is bifurcating into a research infra track and a production reliability track.",
      },
      {
        heading: "What CHROs should do now",
        body: "Rebase compensation bands against a 12-month AI-adjusted benchmark, invest in internal mobility for high-signal engineers, and pre-build partnerships with capability centers before the next hiring wave rather than during it.",
      },
    ],
  },
  {
    slug: "ai-native-gcc-playbook",
    tag: "Playbook",
    image: "/insights/hiring-playbook.png",
    title: "Building an AI-native GCC from day one",
    summary:
      "A 90-day blueprint for scaling engineering capability centers with AI at the core.",
    readTime: "9 min read",
    publishedAt: "February 2026",
    sections: [
      {
        heading: "Days 1–15: charter and location",
        body: "Lock the operating charter with the executive sponsor: which product lines, which functions, and which SLAs the GCC will own. Location selection should optimise for a three-year talent supply curve, not headline cost per FTE.",
      },
      {
        heading: "Days 16–45: leadership and pods",
        body: "Hire the site leader and 3–4 pod leads first. Everything else compounds off that bench. Bring in an AI-augmented sourcing partner from week one to compress time-to-shortlist for the senior layer.",
      },
      {
        heading: "Days 46–75: production hiring at scale",
        body: "Move to parallel pod hiring with shared interview panels and calibrated scoring rubrics. This is where most GCCs fumble by letting each pod invent its own bar.",
      },
      {
        heading: "Days 76–90: operating cadence",
        body: "Stand up the weekly delivery review, the monthly attrition and hiring dashboard, and the quarterly business review with the parent org. If the cadence is not live at day 90, the GCC will drift.",
      },
    ],
  },
  {
    slug: "meridian-rpo-case-study",
    tag: "Case Study",
    image: "/insights/talent-report.png",
    title: "How Meridian cut time-to-hire by 47%",
    summary:
      "Inside the RPO transformation that reshaped a 14-country hiring engine.",
    readTime: "7 min read",
    publishedAt: "January 2026",
    sections: [
      {
        heading: "The starting point",
        body: "Meridian was hiring 3,200 roles a year across 14 markets with an average time-to-hire of 61 days and vendor spend split across 27 agencies. The CPO wanted a single partner, a single dashboard, and a measurable SLA.",
      },
      {
        heading: "What we changed",
        body: "Qbotik consolidated sourcing into one RPO pod per region, deployed a shared candidate CRM, and moved every requisition onto a common intake and calibration workflow. Interview loops were standardised and shortened.",
      },
      {
        heading: "Outcomes after 12 months",
        body: "Time-to-hire dropped to 32 days (-47%), cost per hire fell 34%, and 12-month retention improved by 18 percentage points. Executive reporting moved from monthly PDF decks to a live dashboard reviewed by the leadership team weekly.",
      },
    ],
  },
];
