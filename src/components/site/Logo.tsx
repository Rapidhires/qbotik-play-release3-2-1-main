import { cn } from "@/lib/utils";

export type LogoVariant =
  | "light"                       // full color on light backgrounds
  | "dark"                        // full color on dark backgrounds
  | "monochrome"                  // single-color on light/monochrome backgrounds
  | "monochrome-dark"             // single-color on dark backgrounds
  | "print"                       // high-contrast black for print
  | "print-dark"                  // high-contrast white for print on dark
  | "stacked-light"               // icon + wordmark, full color
  | "stacked-dark"                // icon + wordmark, full color on dark
  | "stacked-monochrome"          // icon + wordmark, single-color light
  | "stacked-monochrome-dark"     // icon + wordmark, single-color dark
  | "stacked-print"               // icon + wordmark, black print
  | "stacked-print-dark";         // icon + wordmark, white print

interface LogoProps {
  className?: string;
  variant?: LogoVariant;
}

const palette: Record<
  string,
  { ring: string; tail: string; dot: string; text: string }
> = {
  light: {
    ring: "var(--primary)",
    tail: "var(--brand-red)",
    dot: "var(--primary)",
    text: "var(--primary)",
  },
  dark: {
    ring: "white",
    tail: "var(--brand-red)",
    dot: "white",
    text: "white",
  },
  monochrome: {
    ring: "currentColor",
    tail: "currentColor",
    dot: "currentColor",
    text: "currentColor",
  },
  "monochrome-dark": {
    ring: "currentColor",
    tail: "currentColor",
    dot: "currentColor",
    text: "currentColor",
  },
  print: {
    ring: "black",
    tail: "black",
    dot: "black",
    text: "black",
  },
  "print-dark": {
    ring: "white",
    tail: "white",
    dot: "white",
    text: "white",
  },
};

function QIcon({
  colors,
  size = 40,
}: {
  colors: { ring: string; tail: string; dot: string };
  size?: number;
}) {
  const half = size / 2;
  const ringRadius = size * 0.375;
  const stroke = size * 0.125;
  const dotRadius = size * 0.1;
  const tailStart = size * 0.675;
  const tailEnd = size * 0.85;

  return (
    <g>
      <circle
        cx={half}
        cy={half}
        r={ringRadius}
        stroke={colors.ring}
        strokeWidth={stroke}
        fill="none"
      />
      <path
        d={`M${tailStart} ${tailStart} L${tailEnd} ${tailEnd}`}
        stroke={colors.tail}
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      <circle cx={half} cy={half} r={dotRadius} fill={colors.dot} />
    </g>
  );
}

export function Logo({ className, variant = "light" }: LogoProps) {
  const isStacked = variant.startsWith("stacked-");
  const baseVariant = isStacked ? variant.replace("stacked-", "") : variant;
  const colors = palette[baseVariant] ?? palette.light;

  if (isStacked) {
    return (
      <svg
        viewBox="0 0 120 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("shrink-0", className)}
        role="img"
        aria-label="Qbotik"
      >
        <title>Qbotik</title>
        <g transform="translate(42, 2) scale(0.9)">
          <QIcon colors={colors} size={40} />
        </g>
        <text
          x="60"
          y="58"
          textAnchor="middle"
          fill={colors.text}
          fontFamily="Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif"
          fontSize="22"
          fontWeight="700"
          letterSpacing="-0.02em"
        >
          Qbotik
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="Qbotik"
    >
      <title>Qbotik</title>
      <QIcon colors={colors} size={40} />
    </svg>
  );
}
