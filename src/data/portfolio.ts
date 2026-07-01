import project1 from "@/assets/project1.jpg";
import project2 from "@/assets/project2.jpg";
import project3 from "@/assets/project3.jpg";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "opensource", label: "Open Source" },
  { id: "contact", label: "Contact" },
];

export const skillCategories = [
  {
    title: "DevOps",
    accent: "green" as const,
    skills: ["Docker", "Linux", "Git", "CI/CD", "Nginx", "Bash"],
  },
  {
    title: "Development",
    accent: "yellow" as const,
    skills: ["JavaScript", "React", "HTML", "CSS", "REST APIs"],
  },
  {
    title: "Project Management",
    accent: "navy" as const,
    skills: ["Agile", "Scrum", "Sprint Planning", "Documentation", "Team Coordination"],
  },
];

export const projects = [
  {
    title: "Team Coordination Platform",
    role: "Project Manager",
    status: "Completed",
    image: project1,
    description:
      "Led a cross-functional team to deliver a coordination platform on schedule, managing sprints, backlog, and stakeholder communication.",
  },
  {
    title: "Agile Delivery Dashboard",
    role: "Project Manager",
    status: "Completed",
    image: project2,
    description:
      "Coordinated planning, retrospectives, and delivery for a dashboard product used by internal teams to track sprint velocity.",
  },
  {
    title: "Cloud Infrastructure Pipeline",
    role: "DevOps Engineer",
    status: "Completed Deployment",
    image: project3,
    description:
      "Designed and shipped a containerized deployment pipeline with automated CI/CD, monitoring, and zero-downtime releases.",
  },
];

export const whatIDo = [
  {
    title: "DevOps Engineering",
    description: "Building reliable pipelines, containerized workflows, and infrastructure that ships confidently.",
    icon: "Server",
  },
  {
    title: "Project Management",
    description: "Coordinating teams, sprints, and delivery so meaningful work reaches users on time.",
    icon: "Kanban",
  },
  {
    title: "Infrastructure Automation",
    description: "Automating repetitive work with scripts, CI/CD, and infrastructure-as-code practices.",
    icon: "Cog",
  },
  {
    title: "Continuous Learning",
    description: "Staying curious, learning from mentors, and improving my craft with every project.",
    icon: "Sparkles",
  },
];
