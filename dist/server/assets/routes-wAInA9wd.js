import { useEffect, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowRight, ArrowUp, ArrowUpRight, Briefcase, Code2, Cog, ExternalLink, Github, Kanban, Linkedin, Mail, Menu, Server, Sparkles, Users, X } from "lucide-react";
//#region src/assets/project1.jpg
var project1_default = "/assets/project1-V71pScIY.jpg";
//#endregion
//#region src/assets/project2.jpg
var project2_default = "/assets/project2-CWRKxfZ6.jpg";
//#endregion
//#region src/assets/project3.jpg
var project3_default = "/assets/project3-CdjWlESh.jpg";
//#endregion
//#region src/data/portfolio.ts
var navLinks = [
	{
		id: "home",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "experience",
		label: "Experience"
	},
	{
		id: "projects",
		label: "Projects"
	},
	{
		id: "skills",
		label: "Skills"
	},
	{
		id: "opensource",
		label: "Open Source"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
var skillCategories = [
	{
		title: "DevOps",
		accent: "green",
		skills: [
			"Docker",
			"Linux",
			"Git",
			"CI/CD",
			"Nginx",
			"Bash"
		]
	},
	{
		title: "Development",
		accent: "yellow",
		skills: [
			"JavaScript",
			"React",
			"HTML",
			"CSS",
			"REST APIs"
		]
	},
	{
		title: "Project Management",
		accent: "navy",
		skills: [
			"Agile",
			"Scrum",
			"Sprint Planning",
			"Documentation",
			"Team Coordination"
		]
	}
];
var projects = [
	{
		title: "Team Coordination Platform",
		role: "Project Manager",
		status: "Completed",
		image: project1_default,
		description: "Led a cross-functional team to deliver a coordination platform on schedule, managing sprints, backlog, and stakeholder communication."
	},
	{
		title: "Agile Delivery Dashboard",
		role: "Project Manager",
		status: "Completed",
		image: project2_default,
		description: "Coordinated planning, retrospectives, and delivery for a dashboard product used by internal teams to track sprint velocity."
	},
	{
		title: "Cloud Infrastructure Pipeline",
		role: "DevOps Engineer",
		status: "Completed Deployment",
		image: project3_default,
		description: "Designed and shipped a containerized deployment pipeline with automated CI/CD, monitoring, and zero-downtime releases."
	}
];
var whatIDo = [
	{
		title: "DevOps Engineering",
		description: "Building reliable pipelines, containerized workflows, and infrastructure that ships confidently.",
		icon: "Server"
	},
	{
		title: "Project Management",
		description: "Coordinating teams, sprints, and delivery so meaningful work reaches users on time.",
		icon: "Kanban"
	},
	{
		title: "Infrastructure Automation",
		description: "Automating repetitive work with scripts, CI/CD, and infrastructure-as-code practices.",
		icon: "Cog"
	},
	{
		title: "Continuous Learning",
		description: "Staying curious, learning from mentors, and improving my craft with every project.",
		icon: "Sparkles"
	}
];
//#endregion
//#region src/hooks/use-scroll.ts
function useActiveSection(ids) {
	const [active, setActive] = useState(ids[0]);
	useEffect(() => {
		const observers = [];
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (!el) return;
			const obs = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) setActive(id);
			}, {
				rootMargin: "-40% 0px -55% 0px",
				threshold: 0
			});
			obs.observe(el);
			observers.push(obs);
		});
		return () => observers.forEach((o) => o.disconnect());
	}, [ids]);
	return active;
}
//#endregion
//#region src/components/portfolio/Navbar.tsx
function Navbar() {
	const active = useActiveSection(navLinks.map((n) => n.id));
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const go = (id) => {
		setOpen(false);
		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	};
	return /* @__PURE__ */ jsx(motion.header, {
		initial: {
			y: -30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: {
			duration: .6,
			delay: .2
		},
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-6xl px-6",
			children: [/* @__PURE__ */ jsxs("nav", {
				className: `flex items-center justify-between rounded-full px-5 py-3 transition-all ${scrolled ? "glass shadow-[var(--shadow-soft)]" : "bg-transparent"}`,
				children: [
					/* @__PURE__ */ jsxs("button", {
						onClick: () => go("home"),
						className: "flex items-center gap-2 text-sm font-semibold text-foreground",
						children: [/* @__PURE__ */ jsx("span", {
							className: "grid h-8 w-8 place-items-center rounded-lg bg-[var(--navy)] text-white",
							children: "⌘"
						}), /* @__PURE__ */ jsx("span", {
							className: "hidden sm:inline",
							children: "Portfolio"
						})]
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "hidden items-center gap-1 md:flex",
						children: navLinks.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", {
							onClick: () => go(link.id),
							className: `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${active === link.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
							children: [active === link.id && /* @__PURE__ */ jsx(motion.span, {
								layoutId: "nav-pill",
								className: "absolute inset-0 -z-10 rounded-full bg-[var(--yellow)]/25",
								transition: {
									type: "spring",
									stiffness: 380,
									damping: 30
								}
							}), link.label]
						}) }, link.id))
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: () => go("contact"),
						className: "hidden rounded-full bg-[var(--navy)] px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105 md:inline-flex",
						children: "Let's talk"
					}),
					/* @__PURE__ */ jsx("button", {
						"aria-label": "Toggle menu",
						className: "grid h-10 w-10 place-items-center rounded-full bg-[var(--navy)] text-white md:hidden",
						onClick: () => setOpen((o) => !o),
						children: open ? /* @__PURE__ */ jsx(X, { size: 18 }) : /* @__PURE__ */ jsx(Menu, { size: 18 })
					})
				]
			}), /* @__PURE__ */ jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsx(motion.div, {
				initial: {
					opacity: 0,
					y: -10
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: -10
				},
				className: "glass mt-3 overflow-hidden rounded-3xl p-3 md:hidden",
				children: /* @__PURE__ */ jsx("ul", {
					className: "flex flex-col",
					children: navLinks.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", {
						onClick: () => go(l.id),
						className: `w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors ${active === l.id ? "bg-[var(--yellow)]/25 text-foreground" : "text-foreground hover:bg-white/5"}`,
						children: l.label
					}) }, l.id))
				})
			}) })]
		})
	});
}
//#endregion
//#region src/assets/profile.jpg
var profile_default = "/assets/profile-uv9sGQjw.jpg";
//#endregion
//#region src/components/portfolio/Hero.tsx
function Hero() {
	const { scrollY } = useScroll();
	const y1 = useTransform(scrollY, [0, 500], [0, 80]);
	const y2 = useTransform(scrollY, [0, 500], [0, -60]);
	const imgY = useTransform(scrollY, [0, 500], [0, 40]);
	const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	return /* @__PURE__ */ jsxs("section", {
		id: "home",
		className: "relative isolate min-h-screen overflow-hidden pt-32 pb-24",
		style: { background: "var(--gradient-hero)" },
		children: [
			/* @__PURE__ */ jsx(motion.div, {
				style: { y: y1 },
				className: "animate-float-slow pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[var(--yellow)]/20 blur-3xl"
			}),
			/* @__PURE__ */ jsx(motion.div, {
				style: { y: y2 },
				className: "animate-float-slower pointer-events-none absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-[var(--green)]/20 blur-3xl"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "pointer-events-none absolute inset-0",
				children: Array.from({ length: 24 }).map((_, i) => /* @__PURE__ */ jsx(motion.span, {
					className: "absolute h-1 w-1 rounded-full bg-white/40",
					style: {
						left: `${i * 37 % 100}%`,
						top: `${i * 53 % 100}%`
					},
					animate: {
						y: [
							0,
							-20,
							0
						],
						opacity: [
							.2,
							.8,
							.2
						]
					},
					transition: {
						duration: 4 + i % 5,
						repeat: Infinity,
						delay: i * .15
					}
				}, i))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-[1.15fr_1fr]",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs(motion.span, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .3 },
						className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur",
						children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--green)]" }), "Available for collaboration"]
					}),
					/* @__PURE__ */ jsxs(motion.h1, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .4,
							duration: .7
						},
						className: "mt-6 text-5xl font-semibold leading-[1.05] text-white md:text-6xl lg:text-7xl",
						children: [
							"Building reliable",
							" ",
							/* @__PURE__ */ jsxs("span", {
								className: "relative inline-block",
								children: [/* @__PURE__ */ jsx("span", {
									className: "relative z-10",
									children: "software"
								}), /* @__PURE__ */ jsx("span", { className: "absolute inset-x-0 bottom-2 -z-0 h-3 rounded-sm bg-[var(--yellow)]/70" })]
							}),
							" ",
							"and infrastructure."
						]
					}),
					/* @__PURE__ */ jsx(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .55,
							duration: .7
						},
						className: "mt-6 max-w-xl text-lg leading-relaxed text-white/70",
						children: "I'm an entry-level software developer currently working at Zone01 Kisumu. My primary focus is DevOps Engineering, while also contributing through project management. I enjoy building dependable systems, collaborating with developers, and continuously improving my skills."
					}),
					/* @__PURE__ */ jsxs(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .7 },
						className: "mt-9 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ jsxs("button", {
							onClick: () => go("projects"),
							className: "group inline-flex items-center gap-2 rounded-full bg-[var(--yellow)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]",
							children: ["View Projects", /* @__PURE__ */ jsx(ArrowRight, {
								size: 16,
								className: "transition-transform group-hover:translate-x-0.5"
							})]
						}), /* @__PURE__ */ jsxs("button", {
							onClick: () => go("contact"),
							className: "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10",
							children: [/* @__PURE__ */ jsx(Mail, { size: 16 }), "Contact Me"]
						})]
					}),
					/* @__PURE__ */ jsx(motion.dl, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: { delay: 1 },
						className: "mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6",
						children: [
							{
								k: "Focus",
								v: "DevOps"
							},
							{
								k: "Based",
								v: "Kisumu"
							},
							{
								k: "Open to",
								v: "Collab"
							}
						].map((s) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
							className: "text-xs uppercase tracking-widest text-white/50",
							children: s.k
						}), /* @__PURE__ */ jsx("dd", {
							className: "mt-1 text-sm font-medium text-white",
							children: s.v
						})] }, s.k))
					})
				] }), /* @__PURE__ */ jsxs(motion.div, {
					style: { y: imgY },
					initial: {
						opacity: 0,
						scale: .95
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						delay: .5,
						duration: .9
					},
					className: "relative mx-auto w-full max-w-md",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--yellow)]/40 via-transparent to-[var(--green)]/30 blur-2xl" }), /* @__PURE__ */ jsxs("div", {
						className: "glass-dark relative overflow-hidden rounded-[2rem] p-3",
						children: [/* @__PURE__ */ jsx("img", {
							src: profile_default,
							alt: "Portrait",
							width: 768,
							height: 896,
							className: "h-auto w-full rounded-[1.5rem] object-cover"
						}), /* @__PURE__ */ jsxs(motion.div, {
							animate: { y: [
								0,
								-8,
								0
							] },
							transition: {
								duration: 4,
								repeat: Infinity
							},
							className: "absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 text-sm shadow-lg",
							children: [/* @__PURE__ */ jsx("span", {
								className: "grid h-8 w-8 place-items-center rounded-full bg-[var(--green)]/15 text-[var(--green)]",
								children: "●"
							}), /* @__PURE__ */ jsxs("div", {
								className: "text-left",
								children: [/* @__PURE__ */ jsx("div", {
									className: "text-xs text-muted-foreground",
									children: "Currently at"
								}), /* @__PURE__ */ jsx("div", {
									className: "font-semibold text-foreground",
									children: "Zone01 Kisumu"
								})]
							})]
						})]
					})]
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "absolute bottom-0 left-0 right-0 flex justify-center",
				children: /* @__PURE__ */ jsx(motion.div, {
					initial: { scaleX: 0 },
					animate: { scaleX: 1 },
					transition: {
						duration: 1.2,
						delay: .8
					},
					className: "h-[2px] w-2/3 origin-left bg-gradient-to-r from-transparent via-[var(--yellow)]/60 to-transparent"
				})
			})
		]
	});
}
//#endregion
//#region src/assets/about.jpg
var about_default = "/assets/about-CyTONJ5b.jpg";
//#endregion
//#region src/components/portfolio/Section.tsx
function Section({ id, eyebrow, title, children, className = "" }) {
	return /* @__PURE__ */ jsx("section", {
		id,
		className: `relative scroll-mt-16 py-12 md:py-20 ${className}`,
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto w-full max-w-6xl px-6",
			children: [(eyebrow || title) && /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .6 },
				className: "mb-14 flex flex-col items-start gap-3",
				children: [
					eyebrow && /* @__PURE__ */ jsxs("span", {
						className: "inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--yellow)]",
						children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--green)]" }), eyebrow]
					}),
					title && /* @__PURE__ */ jsx("h2", {
						className: "text-4xl font-semibold text-foreground md:text-5xl",
						children: title
					}),
					/* @__PURE__ */ jsx(motion.span, {
						initial: { scaleX: 0 },
						whileInView: { scaleX: 1 },
						viewport: { once: true },
						transition: {
							duration: .8,
							delay: .2
						},
						className: "mt-2 block h-[3px] w-16 origin-left rounded-full bg-[var(--yellow)]"
					})
				]
			}), children]
		})
	});
}
//#endregion
//#region src/components/portfolio/About.tsx
function About() {
	return /* @__PURE__ */ jsx(Section, {
		id: "about",
		eyebrow: "About Me",
		title: "A developer who cares about the details.",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 items-center gap-12 md:grid-cols-2",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					x: -30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .7 },
				className: "space-y-5 text-lg leading-relaxed text-muted-foreground",
				children: [
					/* @__PURE__ */ jsx("p", { children: "I enjoy solving problems, improving development workflows, and helping teams deliver projects successfully." }),
					/* @__PURE__ */ jsx("p", { children: "My experience includes DevOps engineering, project management, and working with collaborative development teams. I'm always looking for opportunities to learn, contribute, and work on meaningful projects." }),
					/* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-2 pt-2",
						children: [
							"Problem-solving",
							"Team player",
							"Curious",
							"Reliable"
						].map((t) => /* @__PURE__ */ jsx("span", {
							className: "rounded-full bg-white/5 px-3 py-1 text-sm text-foreground",
							children: t
						}, t))
					})
				]
			}), /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					x: 30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .7 },
				className: "relative",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--yellow)]/20 to-[var(--green)]/20 blur-2xl" }), /* @__PURE__ */ jsx("img", {
					src: about_default,
					alt: "Illustration",
					width: 1024,
					height: 768,
					loading: "lazy",
					className: "relative w-full rounded-3xl shadow-[var(--shadow-lift)]"
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/portfolio/Experience.tsx
var items = [
	{
		icon: Server,
		label: "DevOps Engineering"
	},
	{
		icon: Briefcase,
		label: "Project Management"
	},
	{
		icon: Code2,
		label: "Software Development"
	},
	{
		icon: Users,
		label: "Team Collaboration"
	}
];
function Experience() {
	return /* @__PURE__ */ jsx(Section, {
		id: "experience",
		eyebrow: "Experience",
		title: "Where I'm currently building.",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative pl-6 md:pl-10",
			children: [/* @__PURE__ */ jsx("span", { className: "absolute left-2 top-2 bottom-2 w-[2px] rounded-full bg-gradient-to-b from-[var(--yellow)] via-[var(--green)] to-transparent md:left-4" }), /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .6 },
				className: "relative",
				children: [/* @__PURE__ */ jsx("span", {
					className: "absolute -left-[18px] top-6 grid h-6 w-6 place-items-center rounded-full bg-[var(--yellow)] ring-8 ring-background md:-left-[26px]",
					children: /* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[var(--navy)]" })
				}), /* @__PURE__ */ jsxs("div", {
					className: "rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-xs font-semibold uppercase tracking-widest text-[var(--green)]",
								children: "Current"
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-1 text-2xl font-semibold text-foreground",
								children: "Zone01 Kisumu"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-muted-foreground",
								children: "Software Developer"
							})
						] }), /* @__PURE__ */ jsx("span", {
							className: "rounded-full bg-[var(--green)]/10 px-3 py-1 text-xs font-medium text-[var(--green)]",
							children: "2024 — Present"
						})]
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-6 grid grid-cols-2 gap-3 md:grid-cols-4",
						children: items.map((it, i) => /* @__PURE__ */ jsxs(motion.div, {
							initial: {
								opacity: 0,
								y: 12
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: .1 * i },
							className: "flex flex-col items-start gap-2 rounded-2xl bg-white/5 p-4 transition-colors hover:bg-white/10",
							children: [/* @__PURE__ */ jsx(it.icon, {
								size: 20,
								className: "text-foreground"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium text-foreground",
								children: it.label
							})]
						}, it.label))
					})]
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/portfolio/Projects.tsx
function Projects() {
	return /* @__PURE__ */ jsx(Section, {
		id: "projects",
		eyebrow: "Featured Projects",
		title: "Selected work I'm proud of.",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3",
			children: projects.map((p, i) => /* @__PURE__ */ jsxs(motion.article, {
				initial: {
					opacity: 0,
					y: 40
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .6,
					delay: i * .1
				},
				whileHover: { y: -6 },
				className: "group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative aspect-[4/3] overflow-hidden bg-white/5",
					children: [/* @__PURE__ */ jsx("img", {
						src: p.image,
						alt: p.title,
						width: 1024,
						height: 768,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
					}), /* @__PURE__ */ jsx("span", {
						className: "absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur",
						children: p.role
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex flex-1 flex-col p-6",
					children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-[var(--green)]" }), /* @__PURE__ */ jsx("span", {
								className: "text-xs font-medium uppercase tracking-wider text-[var(--green)]",
								children: p.status
							})]
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-3 text-xl font-semibold text-foreground",
							children: p.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground",
							children: p.description
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-5 flex items-center gap-2",
							children: [/* @__PURE__ */ jsxs("a", {
								href: "#",
								className: "inline-flex items-center gap-1.5 rounded-full bg-[var(--navy)] px-4 py-2 text-xs font-semibold text-white transition-transform hover:scale-105",
								children: ["View Project ", /* @__PURE__ */ jsx(ExternalLink, { size: 12 })]
							}), /* @__PURE__ */ jsxs("a", {
								href: "#",
								className: "inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-white/5",
								children: [/* @__PURE__ */ jsx(Github, { size: 12 }), " GitHub"]
							})]
						})
					]
				})]
			}, p.title))
		})
	});
}
//#endregion
//#region src/components/portfolio/Skills.tsx
var accents = {
	green: "var(--green)",
	yellow: "var(--yellow)",
	navy: "var(--navy)"
};
function Skills() {
	return /* @__PURE__ */ jsx(Section, {
		id: "skills",
		eyebrow: "Skills",
		title: "Tools I reach for.",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 gap-6 md:grid-cols-3",
			children: skillCategories.map((cat, i) => /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .6,
					delay: i * .1
				},
				whileHover: { y: -4 },
				className: "rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-soft)] transition-shadow hover:shadow-[var(--shadow-lift)]",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ jsx("span", {
						className: "h-2.5 w-2.5 rounded-full",
						style: { background: accents[cat.accent] }
					}), /* @__PURE__ */ jsx("h3", {
						className: "text-lg font-semibold text-foreground",
						children: cat.title
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: cat.skills.map((s) => /* @__PURE__ */ jsx("span", {
						className: "rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-all hover:-translate-y-0.5 hover:border-[var(--navy)] hover:bg-[var(--navy)] hover:text-white",
						children: s
					}, s))
				})]
			}, cat.title))
		})
	});
}
//#endregion
//#region src/assets/collab.jpg
var collab_default = "/assets/collab-CYNUaF7D.jpg";
//#endregion
//#region src/components/portfolio/OpenSource.tsx
var iconMap = {
	Server,
	Kanban,
	Cog,
	Sparkles
};
function OpenSource() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Section, {
		id: "opensource",
		eyebrow: "Open Source & Collaboration",
		title: "Let's build something meaningful together.",
		children: /* @__PURE__ */ jsxs("div", {
			className: "grid grid-cols-1 items-center gap-12 md:grid-cols-2",
			children: [/* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					x: -30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: { duration: .7 },
				className: "relative order-2 md:order-1",
				children: [/* @__PURE__ */ jsx("div", { className: "absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[var(--green)]/20 to-[var(--yellow)]/20 blur-2xl" }), /* @__PURE__ */ jsx("img", {
					src: collab_default,
					alt: "Collaboration illustration",
					width: 1024,
					height: 768,
					loading: "lazy",
					className: "relative w-full rounded-3xl shadow-[var(--shadow-lift)]"
				})]
			}), /* @__PURE__ */ jsxs(motion.div, {
				initial: {
					opacity: 0,
					x: 30
				},
				whileInView: {
					opacity: 1,
					x: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: { duration: .7 },
				className: "order-1 space-y-5 text-lg leading-relaxed text-muted-foreground md:order-2",
				children: [
					/* @__PURE__ */ jsx("p", { children: "I'm actively looking for opportunities to collaborate on open-source projects and work with teams building meaningful software." }),
					/* @__PURE__ */ jsx("p", { children: "I enjoy learning from experienced developers while contributing to projects that create real impact." }),
					/* @__PURE__ */ jsxs("a", {
						href: "#contact",
						onClick: (e) => {
							e.preventDefault();
							document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
						},
						className: "group mt-4 inline-flex items-center gap-2 rounded-full bg-[var(--navy)] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.03]",
						children: ["Let's Collaborate", /* @__PURE__ */ jsx(ArrowUpRight, {
							size: 16,
							className: "transition-transform group-hover:rotate-45"
						})]
					})
				]
			})]
		})
	}), /* @__PURE__ */ jsx(Section, {
		id: "what-i-do",
		eyebrow: "What I Do",
		title: "Four ways I contribute.",
		children: /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
			children: whatIDo.map((item, i) => {
				const Icon = iconMap[item.icon];
				return /* @__PURE__ */ jsxs(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .5,
						delay: i * .08
					},
					whileHover: { y: -6 },
					className: "group rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:shadow-[var(--shadow-lift)]",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "grid h-12 w-12 place-items-center rounded-2xl bg-[var(--navy)] text-white transition-transform group-hover:rotate-6",
							children: /* @__PURE__ */ jsx(Icon, { size: 22 })
						}),
						/* @__PURE__ */ jsx("h3", {
							className: "mt-5 text-base font-semibold text-foreground",
							children: item.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: item.description
						})
					]
				}, item.title);
			})
		})
	})] });
}
//#endregion
//#region src/components/portfolio/Contact.tsx
var links = [
	{
		icon: Mail,
		label: "Email",
		href: "mailto:hello@example.com"
	},
	{
		icon: Github,
		label: "GitHub",
		href: "https://github.com"
	},
	{
		icon: Linkedin,
		label: "LinkedIn",
		href: "https://linkedin.com"
	}
];
function Contact() {
	return /* @__PURE__ */ jsx(Section, {
		id: "contact",
		className: "pb-24",
		children: /* @__PURE__ */ jsxs(motion.div, {
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-60px"
			},
			transition: { duration: .7 },
			className: "relative overflow-hidden rounded-[2rem] p-10 md:p-16",
			style: { background: "var(--gradient-hero)" },
			children: [
				/* @__PURE__ */ jsx("div", { className: "animate-float-slow pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--yellow)]/25 blur-3xl" }),
				/* @__PURE__ */ jsx("div", { className: "animate-float-slower pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[var(--green)]/25 blur-3xl" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative max-w-2xl",
					children: [
						/* @__PURE__ */ jsx("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur",
							children: "Contact"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl",
							children: "Let's build something together."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-lg text-white/70",
							children: "I'm always open to discussing opportunities, collaborations, or interesting projects."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8 flex flex-wrap gap-3",
							children: links.map((l) => /* @__PURE__ */ jsxs("a", {
								href: l.href,
								className: "group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--navy)] transition-transform hover:scale-105",
								children: [
									/* @__PURE__ */ jsx(l.icon, { size: 16 }),
									l.label,
									/* @__PURE__ */ jsx(ArrowUpRight, {
										size: 14,
										className: "transition-transform group-hover:rotate-45"
									})
								]
							}, l.label))
						})
					]
				})
			]
		})
	});
}
//#endregion
//#region src/components/portfolio/Footer.tsx
function Footer() {
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t border-border bg-[var(--navy-deep)] text-white/70",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 text-white",
					children: [/* @__PURE__ */ jsx("span", {
						className: "grid h-8 w-8 place-items-center rounded-lg bg-[var(--yellow)] text-white font-bold",
						children: "⌘"
					}), /* @__PURE__ */ jsx("span", {
						className: "text-sm font-semibold",
						children: "Portfolio"
					})]
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-sm text-sm leading-relaxed",
					children: "Entry-level software developer focused on DevOps engineering, project management, and shipping reliable systems."
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-xs font-semibold uppercase tracking-widest text-white/50",
					children: "Navigate"
				}), /* @__PURE__ */ jsx("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: navLinks.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: `#${l.id}`,
						className: "transition-colors hover:text-[var(--yellow)]",
						children: l.label
					}) }, l.id))
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
					className: "text-xs font-semibold uppercase tracking-widest text-white/50",
					children: "Elsewhere"
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-4 flex gap-2",
					children: [
						Github,
						Linkedin,
						Mail
					].map((Icon, i) => /* @__PURE__ */ jsx("a", {
						href: "#",
						className: "grid h-10 w-10 place-items-center rounded-full border border-white/10 transition-colors hover:bg-[var(--yellow)] hover:text-white",
						children: /* @__PURE__ */ jsx(Icon, { size: 16 })
					}, i))
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/50 md:flex-row",
				children: [/* @__PURE__ */ jsxs("span", { children: [
					"© ",
					year,
					" Portfolio. All rights reserved."
				] }), /* @__PURE__ */ jsx("span", { children: "Built with care in Kisumu." })]
			})
		})]
	});
}
//#endregion
//#region src/components/portfolio/Chrome.tsx
function ScrollProgress() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30
	});
	return /* @__PURE__ */ jsx(motion.div, {
		style: { scaleX },
		className: "fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-[var(--yellow)] via-[var(--green)] to-[var(--yellow)]"
	});
}
function BackToTop() {
	const [show, setShow] = useState(false);
	useEffect(() => {
		const on = () => setShow(window.scrollY > 600);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	return /* @__PURE__ */ jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsx(motion.button, {
		initial: {
			opacity: 0,
			scale: .8,
			y: 20
		},
		animate: {
			opacity: 1,
			scale: 1,
			y: 0
		},
		exit: {
			opacity: 0,
			scale: .8,
			y: 20
		},
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "Back to top",
		className: "fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-[var(--navy)] text-white shadow-[var(--shadow-lift)] transition-transform hover:scale-110",
		children: /* @__PURE__ */ jsx(ArrowUp, { size: 18 })
	}) });
}
function Loader() {
	const [gone, setGone] = useState(false);
	useEffect(() => {
		const t = setTimeout(() => setGone(true), 900);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ jsx(AnimatePresence, { children: !gone && /* @__PURE__ */ jsx(motion.div, {
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .5 },
		className: "fixed inset-0 z-[100] grid place-items-center bg-[var(--navy-deep)]",
		children: /* @__PURE__ */ jsxs(motion.div, {
			initial: {
				scale: .6,
				opacity: 0
			},
			animate: {
				scale: 1,
				opacity: 1
			},
			className: "flex flex-col items-center gap-4",
			children: [/* @__PURE__ */ jsx("span", {
				className: "grid h-14 w-14 place-items-center rounded-2xl bg-[var(--yellow)] text-2xl font-bold text-white",
				children: "⌘"
			}), /* @__PURE__ */ jsx("div", {
				className: "h-[2px] w-32 overflow-hidden rounded-full bg-white/10",
				children: /* @__PURE__ */ jsx(motion.div, {
					initial: { x: "-100%" },
					animate: { x: "100%" },
					transition: {
						duration: .9,
						ease: "easeInOut"
					},
					className: "h-full w-1/2 bg-[var(--yellow)]"
				})
			})]
		})
	}) });
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(Loader, {}),
		/* @__PURE__ */ jsx(ScrollProgress, {}),
		/* @__PURE__ */ jsx(Navbar, {}),
		/* @__PURE__ */ jsxs("main", { children: [
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx(About, {}),
			/* @__PURE__ */ jsx(Experience, {}),
			/* @__PURE__ */ jsx(Projects, {}),
			/* @__PURE__ */ jsx(Skills, {}),
			/* @__PURE__ */ jsx(OpenSource, {}),
			/* @__PURE__ */ jsx(Contact, {})
		] }),
		/* @__PURE__ */ jsx(Footer, {}),
		/* @__PURE__ */ jsx(BackToTop, {})
	] });
}
//#endregion
export { Index as component };
