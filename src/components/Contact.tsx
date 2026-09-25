import { useState } from "react";
import { Github, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site } from "@/config/content";

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(100, "Nome muito longo."),
  email: z.string().trim().email("E-mail inválido.").max(255, "E-mail muito longo."),
  message: z.string().trim().min(10, "Escreva pelo menos 10 caracteres.").max(1000, "Mensagem muito longa."),
});

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: site.links.linkedin },
  { icon: Github, label: "GitHub", href: site.links.github },
  { icon: Instagram, label: "Instagram", href: site.links.instagram },
  { icon: Mail, label: "E-mail", href: `mailto:${site.email}` },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        next[String(issue.path[0])] = issue.message;
      });
      setErrors(next);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Contato pelo portfólio — ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n${parsed.data.name} — ${parsed.data.email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    toast.success("Abrindo seu cliente de e-mail…");
  };

  const field = "mt-2 w-full rounded-xl border border-border bg-background/70 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60";

  return (
    <section id="contato" className="section-padding border-t border-border/70">
      <div className="container">
        <SectionHeading
          eyebrow="Contato"
          title="Desenvolvimento, segurança ou automação"
          description="Se existe um problema técnico para resolver, uma aplicação para construir ou um ambiente para organizar, podemos conversar."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form onSubmit={submit} className="glass-card bg-gradient-card p-8" noValidate>
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Nome
                </label>
                <input
                  id="name"
                  className={field}
                  placeholder="Seu nome"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
              </div>

              <div className="mt-6">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={field}
                  placeholder="voce@empresa.com"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
              </div>

              <div className="mt-6">
                <label htmlFor="message" className="text-sm font-medium">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`${field} resize-none`}
                  placeholder="Descreva seu projeto, vaga ou desafio técnico"
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                <Send className="h-4 w-4" /> Enviar mensagem
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card h-full bg-gradient-card p-8">
              <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Redes e canais</h3>
              <div className="mt-6 grid gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-border/80 bg-background/50 px-5 py-4 transition-colors hover:border-primary/50"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary/10">
                      <s.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
              <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
                Prefere e-mail direto? Escreva para{" "}
                <a href={`mailto:${site.email}`} className="text-primary">
                  {site.email}
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
