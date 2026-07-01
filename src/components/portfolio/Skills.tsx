import { motion } from "motion/react";
import { Section } from "./Section";
import { skillCategories } from "@/data/portfolio";

const accents: Record<string, string> = {
  green: "var(--green)",
  yellow: "var(--yellow)",
  navy: "var(--navy)",
};

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I reach for.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]"
          >
            <div className="flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: accents[cat.accent] }}
              />
              <h3 className="text-lg font-semibold text-foreground">{cat.title}</h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {cat.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
