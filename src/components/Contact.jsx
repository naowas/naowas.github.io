import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail } from "lucide-react";
import { contact } from "../data/portfolio";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Open to backend engineering opportunities, API platform work, and meaningful collaboration."
    >
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8">
        <p className="mb-6 text-slate-300">For project discussions or hiring opportunities, feel free to reach out.</p>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-5 py-3 text-sm font-medium text-white shadow-glow"
          >
            <Mail size={16} />
            {contact.email}
          </a>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-white/30"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied" : "Copy Email"}
          </button>
        </div>

        <div className="mt-6 flex items-center gap-4 text-slate-300">
          <a href={contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
            <Github size={16} /> GitHub
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
