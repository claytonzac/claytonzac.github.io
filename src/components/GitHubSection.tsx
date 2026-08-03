import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Github, GitFork, Star, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { site } from "@/config/content";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
}

interface Profile {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
  html_url: string;
  name: string | null;
  bio: string | null;
}

const api = async <T,>(path: string): Promise<T> => {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!res.ok) throw new Error(`GitHub API ${res.status}`);
  return res.json() as Promise<T>;
};

const GitHubSection = () => {
  const user = site.githubUser;

  const profile = useQuery({
    queryKey: ["gh-profile", user],
    queryFn: () => api<Profile>(`/users/${user}`),
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  const repos = useQuery({
    queryKey: ["gh-repos", user],
    queryFn: () => api<Repo[]>(`/users/${user}/repos?sort=updated&per_page=100`),
    staleTime: 1000 * 60 * 30,
    retry: 1,
  });

  const list = (repos.data ?? []).filter((r) => !r.fork);
  const featured = [...list].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 6);

  const languages = Object.entries(
    list.reduce<Record<string, number>>((acc, r) => {
      if (r.language) acc[r.language] = (acc[r.language] ?? 0) + 1;
      return acc;
    }, {}),
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8);

  const total = languages.reduce((sum, [, n]) => sum + n, 0) || 1;
  const failed = profile.isError && repos.isError;

  return (
    <section id="github" className="section-padding border-y border-border/70 bg-surface/40">
      <div className="container">
        <SectionHeading
          eyebrow="GitHub"
          title="Código aberto e atividade"
          description="Dados carregados em tempo real diretamente da API pública do GitHub."
        />

        {failed ? (
          <Reveal className="mt-14 text-center">
            <p className="text-sm text-muted-foreground">
              Não foi possível carregar os dados do GitHub agora.{" "}
              <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                Ver perfil no GitHub
              </a>
            </p>
          </Reveal>
        ) : (
          <>
            <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <Reveal>
                <div className="glass-card h-full bg-gradient-card p-8">
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 place-items-center rounded-xl bg-secondary text-primary">
                      <Github className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-lg font-semibold">@{user}</p>
                      <p className="text-sm text-muted-foreground">
                        {profile.data?.bio ?? "Desenvolvedor e estrategista digital"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                    {[
                      { icon: Github, value: profile.data?.public_repos, label: "Repositórios" },
                      { icon: Users, value: profile.data?.followers, label: "Seguidores" },
                      { icon: Star, value: list.reduce((s, r) => s + r.stargazers_count, 0), label: "Stars" },
                    ].map((m) => (
                      <div key={m.label} className="rounded-xl border border-border/80 bg-background/50 p-4">
                        <m.icon className="mx-auto h-4 w-4 text-accent-foreground/70" />
                        <p className="mt-2 text-xl font-semibold text-primary">{m.value ?? "—"}</p>
                        <p className="mt-1 text-[11px] text-muted-foreground">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={profile.data?.html_url ?? site.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
                  >
                    <Github className="h-4 w-4" /> Ver perfil completo
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="glass-card h-full bg-gradient-card p-8">
                  <h3 className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Linguagens mais usadas</h3>
                  <div className="mt-6 space-y-4">
                    {languages.length === 0 && (
                      <p className="text-sm text-muted-foreground">Carregando linguagens…</p>
                    )}
                    {languages.map(([lang, count], i) => (
                      <div key={lang}>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-secondary-foreground">{lang}</span>
                          <span className="text-muted-foreground">{Math.round((count / total) * 100)}%</span>
                        </div>
                        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(count / total) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.06 }}
                            className={i % 2 === 0 ? "h-full bg-primary" : "h-full bg-accent"}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {featured.length > 0 && (
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featured.map((repo, i) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
                    whileHover={{ y: -6 }}
                    className="rounded-2xl border border-border/80 bg-card/60 p-6 transition-colors hover:border-primary/40"
                  >
                    <p className="font-semibold text-primary">{repo.name}</p>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {repo.description ?? "Sem descrição."}
                    </p>
                    <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                      {repo.language && <span>{repo.language}</span>}
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3.5 w-3.5" /> {repo.stargazers_count}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="h-3.5 w-3.5" /> {repo.forks_count}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default GitHubSection;
