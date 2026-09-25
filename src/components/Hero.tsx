import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import heroArt from "@/assets/hero-illustration.png";

const Hero = () => {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 md:px-10">
      <div className="absolute inset-0 -z-10 bg-gradient-hero" aria-hidden />
      <div className="absolute inset-0 -z-10 grid-lines opacity-40" aria-hidden />

      <div className="container grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Desenvolvedor de Software · Cyber Security
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Código. <span className="text-gradient">Segurança.</span>
            <br />
            Infraestrutura.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Desenvolvo aplicações e automações com foco em C#, .NET e TypeScript, integrando Linux,
            infraestrutura e segurança desde a concepção até o deploy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => go("projetos")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              Ver Projetos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => go("contato")}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              Contato
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute inset-8 -z-10 rounded-full bg-accent/30 blur-3xl animate-pulse-glow" aria-hidden />
          <img
            src={heroArt}
            alt="Ilustração abstrata com código, infraestrutura, automação e segurança"
            width={1024}
            height={1024}
            className="w-full animate-float drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
