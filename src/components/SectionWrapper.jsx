import { motion } from "framer-motion";

const viewportSettings = { once: true, amount: 0.2 };

export default function SectionWrapper({ id, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportSettings}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="mb-8 flex flex-col gap-3 sm:mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-300">{title}</p>
          {subtitle ? (
            <h2 className="max-w-3xl text-2xl font-semibold text-slate-100 sm:text-3xl">{subtitle}</h2>
          ) : null}
        </div>
        {children}
      </motion.div>
    </section>
  );
}
