import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { timeline } from "@/config/content";

const Timeline = () => (
  <section id="trajetoria" className="section-padding border-y border-border/70 bg-surface/40">
    <div className="container">
      <SectionHeading
        eyebrow="Evolução técnica"
        title="Do código à segurança"
        description="Uma trajetória construída por camadas: programação, web, infraestrutura, segurança e automação."
      />

      <ol className="relative mx-auto mt-16 max-w-3xl border-l border-border pl-8 md:pl-12">
        {timeline.map((item, i) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="relative pb-12 last:pb-0"
          >
            <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border border-primary/40 bg-background md:-left-[57px]">
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
            <p className="text-xs uppercase tracking-[0.2em] text-accent-foreground/70">Etapa {i + 1}</p>
            <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  </section>
);

export default Timeline;
