import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { name: "Permanent Hiring", to: "/services/permanent-hiring" },
  { name: "Contract Staffing", to: "/services/contract-staffing" },
  { name: "Executive Search", to: "/services/executive-search" },
  { name: "RPO", to: "/services/rpo" },
  { name: "Global Capability Centers", to: "/services/gcc" },
  { name: "AI Talent", to: "/services/ai-talent" },
  { name: "Technology Recruitment", to: "/services/technology" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-border shadow-[0_1px_0_rgba(15,98,254,0.04)]"
          : "bg-transparent",
      )}
    >
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 h-16 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2 group">
          <Logo className="h-9 w-9 shrink-0" variant="light" />
          <span className="truncate font-display font-extrabold text-lg tracking-tight text-secondary">
            Qbotik
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-sm font-medium text-foreground/80">
          <a href="/#industries" className="px-3 py-2 hover:text-primary transition-colors">Industries</a>
          <a href="/#success" className="px-3 py-2 hover:text-primary transition-colors">Case Studies</a>
          <a href="/#insights" className="px-3 py-2 hover:text-primary transition-colors">Insights</a>
          <Link to="/careers" className="px-3 py-2 hover:text-primary transition-colors">Careers</Link>

          <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen} modal={false}>
            <DropdownMenuTrigger
              className={cn(
                "ml-1 flex items-center gap-1 rounded-md px-3 py-2 outline-none transition-colors",
                "hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                servicesOpen && "text-primary",
              )}
            >
              Services
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  servicesOpen && "rotate-180",
                )}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              sideOffset={10}
              collisionPadding={16}
              avoidCollisions
              className="z-[70] w-[min(18rem,calc(100vw-2rem))] rounded-xl border border-border bg-popover p-2 shadow-[0_24px_48px_-12px_rgba(15,23,42,0.28)] ring-1 ring-black/5"
            >
              {services.map((s) => (
                <DropdownMenuItem key={s.to} asChild className="rounded-lg">
                  <Link
                    to={s.to}
                    className="block w-full cursor-pointer px-3 py-2 text-sm text-popover-foreground focus:bg-primary/5 focus:text-primary"
                  >
                    {s.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <a
            href="/#contact"
            className="text-sm font-medium text-foreground/80 hover:text-primary px-3 py-2 transition-colors"
          >
            Sign in
          </a>
          <Button asChild size="sm" className="rounded-full font-semibold shadow-elevated">
            <a href="/#contact">Talk to sales</a>
          </Button>
        </div>

        <button
          className="lg:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain border-t border-border bg-white/95 backdrop-blur-lg">
          <div className="container-page py-4 flex flex-col gap-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3 pt-2">
              Services
            </div>
            {services.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm hover:bg-primary/5 hover:text-primary"
              >
                {s.name}
              </Link>
            ))}
            <div className="h-px bg-border my-2" />
            <a href="/#industries" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-sm hover:bg-primary/5">Industries</a>
            <a href="/#success" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-sm hover:bg-primary/5">Case Studies</a>
            <a href="/#insights" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-sm hover:bg-primary/5">Insights</a>
            <Link to="/careers" onClick={() => setOpen(false)} className="px-3 py-2.5 rounded-lg text-sm hover:bg-primary/5">Careers</Link>
            <Button asChild className="mt-2 rounded-full font-semibold">
              <a href="/#contact" onClick={() => setOpen(false)}>Talk to sales</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
