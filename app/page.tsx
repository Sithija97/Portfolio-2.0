import { ThemeToggle } from "@/app/components/ThemeToggle";
import { SiteNav } from "@/app/components/SiteNav";
import { Reveal } from "@/app/components/Reveal";
import {
  HeroSection,
  AboutSection,
  ExperienceSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from "@/app/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>

      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 bg-background/70 p-4 backdrop-blur-md">
        <SiteNav />
        <ThemeToggle />
      </header>

      <main id="main-content" className="mx-auto max-w-3xl px-6 pt-24 pb-16">
        <HeroSection />
        <Reveal>
          <AboutSection />
        </Reveal>
        <Reveal>
          <ExperienceSection />
        </Reveal>
        <Reveal>
          <ProjectsSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
        <Footer />
      </main>
    </div>
  );
}
