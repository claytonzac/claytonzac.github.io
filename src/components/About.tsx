import { BadgeCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { site, specialties } from "@/config/content";

const About = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Sobre mim"
          title="Software, infraestrutura e segurança"
          description="Meu foco está em construir soluções técnicas com base sólida em desenvolvimento, Linux e segurança de aplicações."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Minha principal atuação está no <strong className="text-foreground">desenvolvimento de software</strong>,
              especialmente com C#, .NET, TypeScript e aplicações web. Gosto de entender o problema antes de escolher a
              tecnologia e de transformar requisitos em soluções simples de manter.
            </p>
            <p>
              Também trabalho com <strong className="text-foreground">Linux, Docker, redes e automação</strong>, o que me
              permite enxergar além do código e considerar ambiente, deploy, integração e operação. Segurança faz parte
              desse processo desde o início, com estudos práticos de AppSec, hardening e laboratórios controlados.
            </p>
            <p>
              Minha experiência com marketing e gestão permanece como diferencial de produto: ajuda a conectar decisões
              técnicas com usuário, contexto de negócio e resultado sem tirar o foco da engenharia.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card h-full bg-gradient-card p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Perfil</p>
              <p className="mt-2 text-lg font-semibold text-primary">{site.role}</p>

              <div className="my-7 h-px w-full bg-border" />

              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Especialidades</p>
              <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                {specialties.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm text-secondary-foreground">
                    <BadgeCheck className="h-4 w-4 shrink-0 text-accent" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
