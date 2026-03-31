import { Github, Star } from "lucide-react";
import { openSource } from "../data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function OpenSource() {
  return (
    <SectionWrapper
      id="open-source"
      title="Open Source"
      subtitle="Practical packages and tools focused on backend reliability and developer velocity."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {openSource.map((repo) => (
          <article key={repo.name} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="mb-4 flex items-start justify-between gap-3">
              <h3 className="font-mono text-sm text-slate-100">{repo.name}</h3>
              <span className="inline-flex items-center gap-1 text-xs text-amber-300">
                <Star size={13} />
                {repo.stars}
              </span>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-slate-300">{repo.highlight}</p>
            <p className="mb-5 text-xs text-slate-400">{repo.usage}</p>
            <a
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-200 transition hover:text-white"
            >
              <Github size={14} />
              View Repository
            </a>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
