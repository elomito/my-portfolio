import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { OpenSource } from "@/components/portfolio/OpenSource";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress, BackToTop, Loader } from "@/components/portfolio/Chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Portfolio — DevOps Engineer & Project Manager" },
      {
        name: "description",
        content:
          "Entry-level software developer at Zone01 Kisumu focused on DevOps engineering, project management, and building reliable systems.",
      },
      { property: "og:title", content: "Portfolio — DevOps Engineer & Project Manager" },
      {
        property: "og:description",
        content:
          "Building reliable software and infrastructure. Open to collaboration and open-source contributions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <OpenSource />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
