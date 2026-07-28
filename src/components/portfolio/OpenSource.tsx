import { motion } from "motion/react";
import { Server, Kanban, Cog, Sparkles, ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { whatIDo } from "@/data/portfolio";
import collab from "@/assets/collab.jpg";

const iconMap = { Server, Kanban, Cog, Sparkles };

export function OpenSource() {
  return (
    <>
      <Section
        id="opensource"
        eyebrow="Open Source & Collaboration"
        title="Let's build something meaningful together."
      >
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="relative order-2 md:order-1"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--green)]/20 to-[var(--yellow)]/20 blur-2xl" />
            <img
              src={collab}
              alt="Collaboration illustration"
              width={1024}
              height={768}
              loading="lazy"
              className="relative w-full rounded-3xl shadow-[var(--shadow-lift)]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="order-1 space-y-5 text-lg leading-relaxed text-muted-foreground md:order-2"
          >
            <p>
              I'm actively looking for opportunities to collaborate on open-source
              projects and work with teams building meaningful software.
            </p>
            <p>
              I enjoy learning from experienced developers while contributing to
              projects that create real impact.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]"
            >
              Let's Collaborate
              <ArrowUpRight size={16} className="transition-transform group-hover:rotate-45" />
            </a>
          </motion.div>
        </div>
      </Section>

      <Section id="what-i-do" eyebrow="What I Do" title="Four ways I contribute.">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whatIDo.map((item, i) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-lift)]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--navy)] text-white transition-transform group-hover:rotate-6">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
