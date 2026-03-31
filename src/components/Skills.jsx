import { Braces, Database, Globe, ServerCog, Wrench } from "lucide-react";
import { skills } from "../data/portfolio";
import SectionWrapper from "./SectionWrapper";

const iconMap = {
  Backend: ServerCog,
  Database: Database,
  Frontend: Globe,
  "Tools & DevOps": Wrench
};

export default function Skills() {
  return (
    <SectionWrapper id="skills" title="Skills" subtitle="Backend-first expertise with full-stack delivery capability.">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((group) => {
          const Icon = iconMap[group.category] || Braces;

          return (
            <article key={group.category} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
              <div className="mb-4 flex items-center gap-3 text-slate-100">
                <Icon size={18} className="text-brand-300" />
                <h3 className="font-medium">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-800/80 px-3 py-1 text-xs font-medium tracking-wide text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
