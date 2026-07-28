import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative scroll-mt-16 py-12 md:py-20 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="mb-14 flex flex-col items-start gap-3"
          >
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--yellow)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--green)]" />
                {eyebrow}
              </span>
            )}
            {title && (
              <h2 className="text-4xl font-semibold text-foreground md:text-5xl">
                {title}
              </h2>
            )}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-2 block h-[3px] w-16 origin-left rounded-full bg-[var(--yellow)]"
            />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
