import { site } from "@/config/content";

const Footer = () => (
  <footer className="border-t border-border/70 bg-surface/60 px-6 py-10 md:px-10">
    <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
      <p>
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </p>
      <p>Desenvolvimento · Cyber Security · Infraestrutura</p>
    </div>
  </footer>
);

export default Footer;
