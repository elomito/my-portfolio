import { motion } from "motion/react";
import about from "@/assets/about.jpg";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="A developer who cares about the details.">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="space-y-5 text-lg leading-relaxed text-muted-foreground"
        >
          <p>
            I enjoy solving problems, improving development workflows, and helping
            teams deliver projects successfully.
          </p>
          <p>
            My experience includes DevOps engineering, project management, and
            working with collaborative development teams. I'm always looking for
            opportunities to learn, contribute, and work on meaningful projects.
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {["Problem-solving", "Team player", "Curious", "Reliable"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/5 px-3 py-1 text-sm text-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--yellow)]/20 to-[var(--green)]/20 blur-2xl" />
          <img
            src={about}
            alt="Illustration"
            width={1024}
            height={768}
            loading="lazy"
            className="relative w-full rounded-3xl shadow-[var(--shadow-lift)]"
          />
        </motion.div>
      </div>
    </Section>
  );
}
