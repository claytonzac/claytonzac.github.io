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
          title="Tecnologia com visão de negócio"
          description="Atuo na fronteira entre estratégia e engenharia — onde uma decisão de marketing vira arquitetura de software."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Minha trajetória começou no <strong className="text-foreground">marketing</strong>, entendendo pessoas,
              mercado e o que realmente move uma decisão de compra. Com o tempo, percebi que as melhores respostas para
              os problemas que encontrava não estavam em campanhas, mas em <strong className="text-foreground">sistemas</strong>.
            </p>
            <p>
              Passei a desenvolver software, montar infraestrutura própria em Linux e Docker, automatizar processos com
              inteligência artificial e tratar segurança como parte do projeto — não como detalhe final. Hoje conduzo
              iniciativas que unem produto, dados e operação.
            </p>
            <p>
              O resultado é um perfil multidisciplinar: consigo desenhar a estratégia, construir a solução, colocá-la em
              produção e medir o impacto. É essa ponte entre{" "}
              <strong className="text-foreground">tecnologia e negócio</strong> que entrego em cada projeto.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card h-full bg-gradient-card p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Cargo</p>
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
