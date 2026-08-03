import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { techStack } from "@/config/content";

/** Slugs from simpleicons.org — brands without an available icon fall back to a monogram. */
const slugs: Record<string, string> = {
  ".NET": "dotnet",
  JavaScript: "javascript",
  TypeScript: "typescript",
  HTML: "html5",
  CSS: "css",
  Git: "git",
  GitHub: "github",
  Docker: "docker",
  Linux: "linux",
  Ubuntu: "ubuntu",
  MySQL: "mysql",
  PostgreSQL: "postgresql",
  Firebase: "firebase",
  Godot: "godotengine",
  Arduino: "arduino",
  Figma: "figma",
  "Node.js": "nodedotjs",
  Python: "python",
};

const monogram = (name: string) =>
  name
    .replace(/[^A-Za-z0-9# ]/g, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

const TechIcon = ({ name }: { name: string }) => {
  const slug = slugs[name];
  const [failed, setFailed] = useState(!slug);

  if (failed) {
    return (
      <span className="grid h-7 w-7 place-items-center rounded-md border border-border/80 text-[10px] font-semibold text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
        {monogram(name)}
      </span>
    );
  }

  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/9a9a9a`}
      alt=""
      aria-hidden
      loading="lazy"
      width={28}
      height={28}
      onError={() => setFailed(true)}
      className="h-7 w-7 opacity-70 transition-all duration-300 group-hover:opacity-100 group-hover:[filter:invert(78%)_sepia(63%)_saturate(1000%)_hue-rotate(347deg)_brightness(102%)_contrast(101%)]"
    />
  );
};

const TechStack = () => (
  <section id="stack" className="section-padding border-y border-border/70 bg-surface/40">
    <div className="container">
      <SectionHeading
        eyebrow="Stack tecnológica"
        title="Ferramentas do dia a dia"
        description="Da linguagem ao deploy, passando por design e banco de dados."
      />

      <div className="mt-16 grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-6">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: (i % 12) * 0.03 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border/80 bg-card/60 px-3 py-6 transition-colors hover:border-primary/50 hover:bg-primary/5"
          >
            <TechIcon name={tech} />
            <span className="text-center text-xs text-muted-foreground transition-colors group-hover:text-foreground">
              {tech}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
