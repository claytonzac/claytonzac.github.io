import Reveal from "@/components/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ eyebrow, title, description, align = "center" }: SectionHeadingProps) => (
  <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
      {eyebrow}
    </span>
    <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>}
  </Reveal>
);

export default SectionHeading;
