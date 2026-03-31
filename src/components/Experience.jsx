import SectionWrapper from "./SectionWrapper";
import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="Delivering scalable business logic and integrations for real-world platforms."
    >
      <div className="relative ml-1 border-l border-white/10 pl-6">
        {experiences.map((item) => (
          <article key={item.period + item.role} className="relative mb-10 last:mb-0">
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border border-brand-300/60 bg-slate-950" />
            <p className="mb-1 font-mono text-xs tracking-wider text-brand-300">{item.period}</p>
            <h3 className="text-lg font-semibold text-slate-100">{item.role}</h3>
            <p className="mb-3 text-sm text-slate-400">{item.company}</p>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-300">
              {item.points.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
