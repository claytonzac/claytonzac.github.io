/**
 * Central content configuration.
 * Edit values here to update the whole portfolio.
 */

export const site = {
  name: "Clayton",
  role: "Desenvolvedor de Software | C# • .NET • TypeScript",
  githubUser: "claytonzac",
  email: "claytonroberto01@outlook.com",
  links: {
    linkedin: "https://www.linkedin.com/in/claytonzac/",
    github: "https://github.com/claytonzac",
    instagram: "https://www.instagram.com/claytuzac/",
  },
};

export const specialties = [
  "Desenvolvimento C# e .NET",
  "APIs e aplicações web",
  "TypeScript e JavaScript",
  "Cyber Security e AppSec",
  "Linux e redes",
  "Docker e infraestrutura",
  "Banco de Dados",
  "Automações",
  "Inteligência Artificial",
  "Git e GitHub",
  "Análise técnica",
  "Gestão de Projetos",
];

export const stats = [
  { value: 20, suffix: "+", label: "Projetos Desenvolvidos" },
  { value: 4, suffix: "", label: "Frentes Técnicas Principais" },
  { value: 3, suffix: "", label: "Ecossistemas de Desenvolvimento" },
  { value: 1, suffix: "", label: "Foco: Software Seguro" },
];

export const areas = [
  {
    icon: "code",
    title: "Desenvolvimento de Software",
    items: ["C#", ".NET", "ASP.NET", "APIs REST", "TypeScript", "JavaScript"],
  },
  {
    icon: "shield",
    title: "Cyber Security",
    items: ["AppSec", "Redes", "Hardening", "Pentest em Labs", "OWASP", "Investigação Digital"],
  },
  {
    icon: "server",
    title: "Infraestrutura & DevOps",
    items: ["Linux", "Docker", "Portainer", "Servidores", "Git", "GitHub Actions"],
  },
  {
    icon: "brain",
    title: "Automação & IA",
    items: ["Python", "APIs", "Webhooks", "LLMs", "Agentes", "Integrações"],
  },
  {
    icon: "kanban",
    title: "Engenharia & Projetos",
    items: ["Arquitetura", "Roadmap", "Documentação", "Processos", "Métricas", "Entrega"],
  },
  {
    icon: "megaphone",
    title: "Produto & Estratégia",
    items: ["Visão de negócio", "UX", "SEO técnico", "Comunicação", "Métricas", "Marketing"],
  },
] as const;

export const techStack = [
  "C#",
  ".NET",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Python",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Docker",
  "Linux",
  "Ubuntu",
  "MySQL",
  "SQL Server",
  "PostgreSQL",
  "Firebase",
  "Godot",
  "Arduino",
  "Figma",
  "Photoshop",
  "Illustrator",
  "VS Code",
  "Visual Studio",
];

export const projects = [
  {
    title: "Sistema de Gestão",
    description: "Aplicação modular em C# e .NET com persistência em SQL Server, regras de negócio e organização por responsabilidades.",
    tech: ["C#", ".NET", "SQL Server"],
    github: "#",
    demo: "#",
    accent: "gold" as const,
  },
  {
    title: "Portfólio em React + TypeScript",
    description: "Portfólio responsivo com Vite, Tailwind, animações e CI/CD para publicação automática no GitHub Pages.",
    tech: ["React", "TypeScript", "GitHub Actions"],
    github: "https://github.com/claytonzac/claytonzac.github.io",
    demo: "https://claytonzac.github.io/",
    accent: "violet" as const,
  },
  {
    title: "Automação de Processos",
    description: "Integrações e rotinas para reduzir trabalho manual, conectar serviços e padronizar fluxos por APIs e webhooks.",
    tech: ["Python", "APIs", "Webhooks"],
    github: "#",
    demo: "#",
    accent: "gold" as const,
  },
  {
    title: "Laboratório de Cyber Security",
    description: "Ambiente de estudos com Linux, redes, aplicações vulneráveis e análise prática de segurança em ambiente controlado.",
    tech: ["Linux", "Docker", "OWASP"],
    github: "#",
    demo: "#",
    accent: "violet" as const,
  },
  {
    title: "Dashboard Administrativo",
    description: "Interface web orientada a dados com React e TypeScript, componentes reutilizáveis e integração com banco de dados.",
    tech: ["TypeScript", "React", "PostgreSQL"],
    github: "#",
    demo: "#",
    accent: "gold" as const,
  },
  {
    title: "Infraestrutura em Docker",
    description: "Serviços conteinerizados em Linux com Portainer, segmentação por containers e organização de ambientes de desenvolvimento.",
    tech: ["Docker", "Linux", "Portainer"],
    github: "#",
    demo: "#",
    accent: "violet" as const,
  },
  {
    title: "Projeto Godot com C#",
    description: "Projeto de game development usado para aplicar orientação a objetos, lógica de gameplay e integração entre C# e Godot.",
    tech: ["Godot", "C#", "OOP"],
    github: "#",
    demo: "#",
    accent: "gold" as const,
  },
];

export const timeline = [
  {
    title: "Fundamentos de Programação",
    description: "Consolidação de lógica, orientação a objetos e desenvolvimento de aplicações com foco em C# e ecossistema .NET.",
  },
  {
    title: "Desenvolvimento Web",
    description: "Expansão para aplicações web, APIs, TypeScript, JavaScript e integração com bancos de dados.",
  },
  {
    title: "Linux & Infraestrutura",
    description: "Administração de ambientes Linux, Docker, serviços próprios e automação de deploy e desenvolvimento.",
  },
  {
    title: "Cyber Security",
    description: "Estudos práticos de redes, hardening, análise de aplicações e segurança ofensiva em laboratórios controlados.",
  },
  {
    title: "Automação & Inteligência Artificial",
    description: "Uso de APIs, scripts, LLMs e agentes para automatizar processos e ampliar capacidades de sistemas.",
  },
  {
    title: "Engenharia com Visão de Produto",
    description: "Integração entre desenvolvimento, segurança, infraestrutura e contexto de negócio para construir soluções mais completas.",
  },
];

export const strengths = [
  { icon: "brain", title: "Pensamento Analítico", text: "Investigo causas, dependências e riscos antes de propor uma solução." },
  { icon: "messages", title: "Comunicação Técnica", text: "Explico decisões, limitações e trade-offs de forma clara para públicos técnicos e não técnicos." },
  { icon: "compass", title: "Visão de Arquitetura", text: "Penso a aplicação como conjunto de código, dados, infraestrutura, segurança e operação." },
  { icon: "sparkles", title: "Automação", text: "Procuro transformar tarefas repetitivas em fluxos previsíveis, rastreáveis e reaproveitáveis." },
  { icon: "puzzle", title: "Resolução de Problemas", text: "Do gargalo à implementação, com foco em diagnóstico, teste e melhoria contínua." },
  { icon: "trending", title: "Aprendizado Contínuo", text: "Aprofundo desenvolvimento, Linux, redes e segurança por documentação, projetos e laboratórios." },
] as const;
