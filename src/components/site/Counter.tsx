import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";

export function Counter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.6,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  const formatted = Number.isInteger(value)
    ? Math.round(display).toLocaleString()
    : display.toFixed(1);

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
