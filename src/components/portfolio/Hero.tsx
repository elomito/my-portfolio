import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Mail } from "lucide-react";
import profile from "@/assets/profile.jpg";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 80]);
  const y2 = useTransform(scrollY, [0, 500], [0, -60]);
  const imgY = useTransform(scrollY, [0, 500], [0, 40]);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden pt-32 pb-24"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Floating shapes */}
      <motion.div
        style={{ y: y1 }}
        className="animate-float-slow pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[var(--yellow)]/20 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="animate-float-slower pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-[var(--green)]/20 blur-3xl"
      />

      {/* Particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + (i % 5),
              repeat: Infinity,
              delay: i * 0.15,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
            Available for collaboration
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6 text-5xl font-semibold leading-[1.05] text-white md:text-6xl lg:text-7xl"
          >
            Building reliable{" "}
            <span className="relative inline-block">
              <span className="relative z-10">software</span>
              <span className="absolute inset-x-0 bottom-2 -z-0 h-3 rounded-sm bg-[var(--yellow)]/70" />
            </span>{" "}
            and infrastructure.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
          >
            I'm an entry-level software developer currently working at Zone01 Kisumu.
            My primary focus is DevOps Engineering, while also contributing through
            project management. I enjoy building dependable systems, collaborating
            with developers, and continuously improving my skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => go("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--yellow)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
            <button
              onClick={() => go("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              <Mail size={16} />
              Contact Me
            </button>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6"
          >
            {[
              { k: "Focus", v: "DevOps" },
              { k: "Based", v: "Kisumu" },
              { k: "Open to", v: "Collab" },
            ].map((s) => (
              <div key={s.k}>
                <dt className="text-xs uppercase tracking-widest text-white/50">
                  {s.k}
                </dt>
                <dd className="mt-1 text-sm font-medium text-white">{s.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--yellow)]/40 via-transparent to-[var(--green)]/30 blur-2xl" />
          <div className="glass-dark relative overflow-hidden rounded-[2rem] p-3">
            <img
              src={profile}
              alt="Portrait"
              width={768}
              height={896}
              className="h-auto w-full rounded-[1.5rem] object-cover"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 text-sm shadow-lg"
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--green)]/15 text-[var(--green)]">
                ●
              </span>
              <div className="text-left">
                <div className="text-xs text-muted-foreground">Currently at</div>
                <div className="font-semibold text-foreground">Zone01 Kisumu</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated divider */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="h-[2px] w-2/3 origin-left bg-gradient-to-r from-transparent via-[var(--yellow)]/60 to-transparent"
        />
      </div>
    </section>
  );
}
