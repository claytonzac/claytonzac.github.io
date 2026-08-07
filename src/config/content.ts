/**
 * Central content configuration.
 * Edit values here to update the whole portfolio.
 */

export const site = {
  name: "Clayton",
  role: "Diretor de Marketing e Desenvolvedor",
  githubUser: "claytonzac",
  email: "claytonroberto01@outlook.com",
  links: {
    linkedin: "https://www.linkedin.com/in/claytonzac/",
    github: "https://github.com/claytonzac",
    instagram: "https://www.instagram.com/claytuzac/",
  },
};

export const specialties = [
  "Marketing Digital",
  "Desenvolvimento C#",
  "Desenvolvimento Web",
  "Automações",
  "Inteligência Artificial",
  "Docker",
  "Linux",
  "Servidores",
  "Banco de Dados",
  "UX/UI",
  "Gestão de Projetos",
  "Cyber Security",
];

export const stats = [
  { value: 20, suffix: "+", label: "Projetos Desenvolvidos" },
  { value: 100, suffix: "%", label: "Aprendizado Contínuo" },
  { value: 24, suffix: "+", label: "Tecnologias Dominadas" },
  { value: 6, suffix: "", label: "Áreas de Atuação" },
];

export const areas = [
  {
    icon: "megaphone",
    title: "Marketing",
    items: ["Branding", "Estratégia", "SEO", "Copywriting", "Funil", "Automação"],
  },
  {
    icon: "code",
    title: "Desenvolvimento",
    items: ["C#", ".NET", "ASP.NET", "APIs", "JavaScript", "HTML & CSS"],
  },
  {
    icon: "server",
    title: "Infraestrutura",
    items: ["Linux", "Docker", "Portainer", "Servidores", "Git", "GitHub"],
  },
  {
    icon: "brain",
    title: "Inteligência Artificial",
    items: ["IA aplicada", "Automações", "Agentes Inteligentes", "LLMs", "Integrações"],
  },
  {
    icon: "shield",
    title: "Cyber Security",
    items: ["Segurança", "Pentest", "Redes", "Investigação Digital", "Hardening"],
  },
  {
    icon: "kanban",
    title: "Gestão de Projetos",
    items: ["Escopo", "Roadmap", "Métricas", "Times", "Processos", "Entrega"],
  },
] as const;

export const techStack = [
  "C#",
  ".NET",
  "JavaScript",
  "TypeScript",
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
  "Node.js",
  "Python",
];

export const projects = [
  {
    title: "Sistema de Gestão",
    description: "ERP modular em C# com controle de estoque, financeiro e relatórios gerenciais.",
    tech: ["C#", ".NET", "SQL Server"],
    github: "#",
    demo: "#",
    accent: "gold" as const,
  },
  {
    title: "Landing Pages de Alta Conversão",
    description: "Páginas rápidas e otimizadas para SEO, integradas a funis de marketing.",
    tech: ["React", "Tailwind", "SEO"],
    github: "#",
    demo: "#",
    accent: "violet" as const,
  },
  {
    title: "Automação Empresarial",
    description: "Rotinas que eliminam tarefas manuais e integram sistemas via APIs.",
    tech: ["Python", "APIs", "Webhooks"],
    github: "#",
    demo: "#",
    accent: "gold" as const,
  },
  {
    title: "IA para Empresas",
    description: "Agentes inteligentes com LLMs para atendimento, vendas e análise de dados.",
    tech: ["LLMs", "Node.js", "Vector DB"],
    github: "#",
    demo: "#",
    accent: "violet" as const,
  },
  {
    title: "Dashboard Administrativo",
    description: "Painel de indicadores em tempo real com visualizações e permissões por perfil.",
    tech: ["TypeScript", "React", "PostgreSQL"],
    github: "#",
    demo: "#",
    accent: "gold" as const,
  },
  {
    title: "Infraestrutura em Docker",
    description: "Ambientes conteinerizados com Portainer, proxy reverso e deploy automatizado.",
    tech: ["Docker", "Linux", "Portainer"],
    github: "#",
    demo: "#",
    accent: "violet" as const,
  },
  {
    title: "Projeto Godot",
    description: "Jogo 2D com inventário, inimigos e progressão de fases desenvolvido em C#.",
    tech: ["Godot", "C#", "Game Design"],
    github: "#",
    demo: "#",
    accent: "gold" as const,
  },
];

export const timeline = [
  {
    title: "Marketing",
    description: "Início na estratégia de marca, performance e comunicação orientada a dados.",
  },
  {
    title: "Programação",
    description: "Migração para o desenvolvimento de software com C#, .NET e aplicações web.",
  },
  {
    title: "Infraestrutura",
    description: "Servidores Linux, Docker e ambientes de deploy próprios para os projetos.",
  },
  {
    title: "Inteligência Artificial",
    description: "Automações inteligentes e agentes com LLMs aplicados a processos reais.",
  },
  {
    title: "Cyber Security",
    description: "Segurança de redes, hardening e investigação digital como camada essencial.",
  },
  {
    title: "Gestão Estratégica",
    description: "Liderança de projetos conectando tecnologia, negócio e resultado.",
  },
];

export const strengths = [
  { icon: "brain", title: "Pensamento Analítico", text: "Diagnóstico de problemas complexos com base em dados." },
  { icon: "messages", title: "Comunicação", text: "Tradução entre o técnico e o estratégico com clareza." },
  { icon: "compass", title: "Liderança", text: "Direção de times e projetos com foco em entrega." },
  { icon: "sparkles", title: "Criatividade", text: "Soluções originais que unem design e engenharia." },
  { icon: "puzzle", title: "Resolução de Problemas", text: "Do gargalho ao processo automatizado." },
  { icon: "trending", title: "Aprendizado Contínuo", text: "Estudo constante de novas stacks e tendências." },
] as const;
