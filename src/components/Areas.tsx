import { motion } from "framer-motion";
import { Brain, Code2, KanbanSquare, Megaphone, Server, Shield } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { areas } from "@/config/content";

const icons = {
  megaphone: Megaphone,
  code: Code2,
  server: Server,
  brain: Brain,
  shield: Shield,
  kanban: KanbanSquare,
};

const Areas = () => (
  <section id="areas" className="section-padding">
    <div className="container">
      <SectionHeading
        eyebrow="Áreas de atuação"
        title="Seis frentes, um mesmo objetivo"
        description="Cada área se conecta às outras para entregar soluções completas — da estratégia ao servidor em produção."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {areas.map((area, i) => {
          const Icon = icons[area.icon];
          return (
            <motion.article
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group glass-card bg-gradient-card p-7 transition-colors hover:border-primary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-secondary text-primary transition-colors group-hover:border-primary/50 group-hover:bg-primary/10">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{area.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border/80 bg-background/60 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);

export default Areas;
