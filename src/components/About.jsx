import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="Backend developer focused on practical APIs, maintainable systems, and continuous learning."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-300">
          <p className="leading-relaxed">
            I am a backend-focused developer working across PHP and JavaScript ecosystems. My core stack includes Laravel, Node.js, and REST API
            development, with an emphasis on writing clear, dependable backend code.
          </p>
        </article>
        <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-slate-300">
          <p className="leading-relaxed">
            I enjoy solving problems around integrations, data flow, and performance optimization. I am currently deepening cloud and DevOps knowledge while
            contributing to open-source and real-world web projects.
          </p>
        </article>
      </div>
    </SectionWrapper>
  );
}
