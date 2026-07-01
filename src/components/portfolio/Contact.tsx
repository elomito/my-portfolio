import { motion } from "motion/react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const links = [
  { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export function Contact() {
  return (
    <Section id="contact" className="pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] p-10 md:p-16"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="animate-float-slow pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--yellow)]/25 blur-3xl" />
        <div className="animate-float-slower pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--green)]/25 blur-3xl" />

        <div className="relative max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            Contact
          </span>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl">
            Let's build something together.
          </h2>
          <p className="mt-4 text-lg text-white/70">
            I'm always open to discussing opportunities, collaborations, or
            interesting projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--navy)] transition-transform hover:scale-105"
              >
                <l.icon size={16} />
                {l.label}
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:rotate-45"
                />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
