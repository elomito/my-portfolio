import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[var(--yellow)] via-[var(--green)] to-[var(--yellow)]"
    />
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-[var(--navy)] text-white shadow-[var(--shadow-lift)] transition-transform hover:scale-110"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function Loader() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!gone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[var(--navy-deep)]"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[var(--yellow)] text-2xl font-bold text-white">
              ⌘
            </span>
            <div className="h-[2px] w-32 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="h-full w-1/2 bg-[var(--yellow)]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
