import { Github, Linkedin, Mail } from "lucide-react";
import { navItems } from "../data/portfolio";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="font-mono text-sm font-semibold tracking-wide text-slate-100">
          Naowas.dev
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-sm text-slate-300 transition hover:text-white"
                aria-label={`Go to ${item.label}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 text-slate-300">
          <a href="https://github.com/naowas" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github size={18} className="transition hover:text-white" />
          </a>
          <a
            href="https://linkedin.com/in/naowas"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} className="transition hover:text-white" />
          </a>
          <a href="#contact" aria-label="Contact section">
            <Mail size={18} className="transition hover:text-white" />
          </a>
        </div>
      </nav>
    </header>
  );
}
