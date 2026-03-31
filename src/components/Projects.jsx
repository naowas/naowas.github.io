import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data/portfolio";
import SectionWrapper from "./SectionWrapper";

const filters = ["All", "Backend", "Fullstack"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  return (
    <SectionWrapper id="projects" title="Projects" subtitle="Private projects and integrations built for real businesses.">
      <div className="mb-7 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-4 py-2 text-xs font-medium tracking-wide transition ${
              activeFilter === filter
                ? "bg-brand-gradient text-white shadow-glow"
                : "border border-white/10 bg-slate-900/60 text-slate-300 hover:border-white/20"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        {filteredProjects.map((project) => (
          <article key={project.title} className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-slate-100">{project.title}</h3>
              <span className="rounded-full border border-brand-300/30 bg-brand-500/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-300">
                {project.type}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-slate-300">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-4 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-200 transition hover:text-white"
                >
                  <Github size={15} />
                  GitHub
                </a>
              )}
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-200 transition hover:text-white"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
