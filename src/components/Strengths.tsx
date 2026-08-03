import { motion } from "framer-motion";
import { Brain, Compass, MessagesSquare, Puzzle, Sparkles, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { strengths } from "@/config/content";

const icons = {
  brain: Brain,
  messages: MessagesSquare,
  compass: Compass,
  sparkles: Sparkles,
  puzzle: Puzzle,
  trending: TrendingUp,
};

const Strengths = () => (
  <section className="section-padding">
    <div className="container">
      <SectionHeading eyebrow="Diferenciais" title="O que sustenta a entrega técnica" />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {strengths.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
              whileHover={{ y: -5 }}
              className="flex items-start gap-4 rounded-2xl border border-border/80 bg-card/60 p-6 transition-colors hover:border-accent/60"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/20 text-primary">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <div>
                <h3 className="text-base font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Strengths;
