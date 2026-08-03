import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { stats } from "@/config/content";

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 48;
    const id = setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 3);
      setDisplay(Math.round(value * progress));
      if (frame >= total) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl font-semibold tracking-tight text-primary md:text-5xl">
      {display}
      {suffix}
    </span>
  );
};

const Stats = () => (
  <section className="border-y border-border/70 bg-surface/60 px-6 py-16 md:px-10">
    <div className="container grid grid-cols-2 gap-10 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="text-center">
          <Counter value={s.value} suffix={s.suffix} />
          <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
