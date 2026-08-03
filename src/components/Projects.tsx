import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/config/content";

const Projects = () => (
  <section id="projetos" className="section-padding">
    <div className="container">
      <SectionHeading
        eyebrow="Projetos"
        title="Soluções construídas na prática"
        description="Uma seleção de sistemas, automações e experimentos — novos projetos são adicionados continuamente."
      />

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            whileHover={{ y: -8 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/70 shadow-elevated transition-colors hover:border-primary/40"
          >
            <div
              className={`relative h-40 overflow-hidden ${
                p.accent === "gold"
                  ? "bg-[linear-gradient(135deg,hsl(45_100%_64%/0.22),hsl(0_0%_11%))]"
                  : "bg-[linear-gradient(135deg,hsl(261_30%_42%/0.35),hsl(0_0%_11%))]"
              }`}
            >
              <div className="absolute inset-0 grid-lines opacity-30" aria-hidden />
              <span className="absolute bottom-4 left-5 text-2xl font-semibold text-foreground/25">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="rounded-md bg-secondary px-2.5 py-1 text-[11px] text-secondary-foreground">
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex gap-3">
                <a
                  href={p.github}
                  target={p.github.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-3 py-2.5 text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Github className="h-3.5 w-3.5" /> GitHub
                </a>
                <a
                  href={p.demo}
                  target={p.demo.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary/90 px-3 py-2.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
