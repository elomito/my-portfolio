import { Github, Linkedin, Mail } from "lucide-react";
import { navLinks } from "@/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-[var(--navy-deep)] text-white/70">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 text-white">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--yellow)] text-white font-bold">
              ⌘
            </span>
            <span className="text-sm font-semibold">Portfolio</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Entry-level software developer focused on DevOps engineering, project
            management, and shipping reliable systems.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Navigate
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="transition-colors hover:text-[var(--yellow)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Elsewhere
          </h4>
          <div className="mt-4 flex gap-2">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 transition-colors hover:bg-[var(--yellow)] hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/50 md:flex-row">
          <span>© {year} Portfolio. All rights reserved.</span>
          <span>Built with care in Kisumu.</span>
        </div>
      </div>
    </footer>
  );
}
