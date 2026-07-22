import { SKILLS } from "@/app/data/constants";
import { TechBadge } from "@/app/components/TechBadge";
import { SectionHeader } from "@/app/components/SectionHeader";

export function AboutSection() {
  return (
    <section className="mb-20" id="about">
      <SectionHeader title="About" className="mb-6" />
      <div className="space-y-4 text-base leading-relaxed text-muted">
        <p>
          I&apos;m a Senior Software Engineer at Aventude, where I build
          production web applications with React, Next.js, and Node.js. I&apos;ve
          built a rich text editor on Meta&apos;s Lexical framework, reusable
          UI component libraries, and analytics dashboards used across
          multiple products, and I mentor other engineers on React and Redux
          patterns.
        </p>
        <p>
          I care about the decisions behind the code as much as the code
          itself: how a system is structured, what happens when it needs to
          scale, and how easy it is for the next engineer to change. Outside
          of work I build side projects to go deeper on specific problems,
          like how the JS event loop actually schedules work, or how rich
          text editors handle state and hydration.
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {SKILLS.map((skill) => (
          <TechBadge key={skill} name={skill} />
        ))}
      </div>
    </section>
  );
}
