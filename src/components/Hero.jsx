import { motion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-20 sm:pt-24 lg:pt-28">
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:20px_20px] opacity-40" />
      <div className="absolute left-1/2 top-0 -z-10 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-brand-gradient opacity-20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-300">Backend-focused engineer</p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl lg:text-6xl">
          Naowas Morshed Eimon
          <span className="mt-3 block bg-brand-gradient bg-clip-text text-2xl text-transparent sm:text-3xl lg:text-4xl">
            Backend Developer | Problem Solver | Open Source Enthusiast
          </span>
        </h1>
        <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Building backend-focused applications with Laravel and Node.js, while continuously learning cloud architecture and modern DevOps practices.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-3 text-sm font-medium text-white shadow-glow transition hover:scale-[1.01]"
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a
            href="https://github.com/naowas"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-white/35"
          >
            GitHub <Github size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-slate-100 transition hover:border-white/35"
          >
            Contact <Mail size={16} />
          </a>
        </div>

        <div className="terminal-card max-w-2xl rounded-2xl border border-white/10 bg-slate-900/70 p-5">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <p className="font-mono text-sm leading-relaxed text-slate-300">
            <span className="text-brand-300">$</span> profile --name "naowas" --stack "php,laravel,node,mysql,mongodb" --location "dhaka"
            <br />
            <span className="text-emerald-300">status:</span> learning, building, and shipping practical backend tools.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
