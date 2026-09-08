import { Link } from "@tanstack/react-router";
import { Linkedin } from "lucide-react";
import { Logo } from "@/components/site/Logo";

const columns = [
  {
    title: "Services",
    links: [
      { name: "Permanent Hiring", to: "/services/permanent-hiring" },
      { name: "Contract Staffing", to: "/services/contract-staffing" },
      { name: "Executive Search", to: "/services/executive-search" },
      { name: "RPO", to: "/services/rpo" },
      { name: "Global Capability Centers", to: "/services/gcc" },
      { name: "AI Talent", to: "/services/ai-talent" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/#why" },
      { name: "Careers", to: "/careers" },
      { name: "News", to: "/insights" },
      { name: "Case Studies", to: "/case-studies" },
      { name: "Contact", href: "/#contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(2,1fr)]">
          <div>
            <Logo className="h-14 w-auto" variant="stacked-monochrome-dark" />
            <p className="mt-4 text-sm text-white/70 max-w-sm">
              AI-augmented staffing and enterprise talent solutions across 40+ countries.
              Trusted by Fortune 500 leaders to build resilient teams.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/qbotik"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Qbotik on LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full bg-white/5 hover:bg-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white/90">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-white/70">
                {col.links.map((l) => (
                  <li key={l.name}>
                    {"to" in l ? (
                      <Link to={l.to} className="hover:text-accent transition-colors">
                        {l.name}
                      </Link>
                    ) : (
                      <a href={l.href} className="hover:text-accent transition-colors">
                        {l.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Qbotik Digital Private Limited. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
