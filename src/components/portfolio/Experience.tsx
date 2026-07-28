import { motion } from "motion/react";
import { Briefcase, Server, Users, Code2 } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: Server, label: "DevOps Engineering" },
  { icon: Briefcase, label: "Project Management" },
  { icon: Code2, label: "Software Development" },
  { icon: Users, label: "Team Collaboration" },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I'm currently building.">
      <div className="relative pl-6 md:pl-10">
        <span className="absolute left-2 top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-[var(--yellow)] via-[var(--green)] to-transparent md:left-4" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <span className="absolute -left-[18px] top-6 grid h-6 w-6 place-items-center rounded-full bg-[var(--yellow)] ring-8 ring-background md:-left-[26px]">
            <span className="h-2 w-2 rounded-full bg-[var(--navy)]" />
          </span>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[var(--green)]">
                  Current
                </span>
                <h3 className="mt-1 text-2xl font-semibold text-foreground">
                  Zone01 Kisumu
                </h3>
                <p className="text-muted-foreground">Software Developer</p>
              </div>
              <span className="rounded-full bg-[var(--green)]/10 px-3 py-1 text-xs font-medium text-[var(--green)]">
                2024 — Present
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
              {items.map((it, i) => (
                <motion.div
                  key={it.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex flex-col items-start gap-2 rounded-2xl bg-white/5 p-4 transition-colors hover:bg-white/10"
                >
                  <it.icon size={20} className="text-foreground" />
                  <span className="text-sm font-medium text-foreground">
                    {it.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
