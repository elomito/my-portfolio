import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Selected work I'm proud of.">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
              <img
                src={p.image}
                alt={p.title}
                width={1024}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                {p.role}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[var(--green)]" />
                <span className="text-xs font-medium uppercase tracking-wider text-[var(--green)]">
                  {p.status}
                </span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="mt-5 flex items-center gap-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[var(--navy)] px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-105"
                >
                  View Project <ExternalLink size={12} />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-white/5"
                >
                  <Github size={12} /> GitHub
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
