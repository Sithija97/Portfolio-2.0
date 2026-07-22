"use client";

import Image from "next/image";
import { m } from "motion/react";
import { PERSONAL, PROJECTS } from "@/app/data/constants";
import {
  ImagePlaceholderIcon,
  GitHubIcon,
  ExternalLinkIcon,
  StarIcon,
} from "@/app/components/Icons";
import { SectionHeader } from "@/app/components/SectionHeader";

export function ProjectsSection() {
  return (
    <section className="mb-28" id="projects">
      <div className="mb-3 flex items-end justify-between">
        <SectionHeader title="Projects" className="mb-0" emphasized />
        <a
          href={PERSONAL.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          View all repos
          <ExternalLinkIcon size={14} />
        </a>
      </div>
      <p className="mb-8 text-sm text-muted">
        Work I&apos;ve shipped at Aventude is under NDA, so these are
        independent projects I&apos;ve built to go deeper on specific
        problems.
      </p>
      <div className="space-y-5">
        {PROJECTS.map((project) => (
          <m.article
            key={project.title}
            whileHover={{ y: -4 }}
            whileTap={{ y: -1 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#A7ACB0]/40 bg-card/50 shadow-sm transition-colors hover:bg-card hover:shadow-md dark:border-transparent dark:bg-[#2d2d2d31] dark:hover:border-transparent"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-muted/10 dark:border-transparent">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-muted/30">
                  <ImagePlaceholderIcon />
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-medium text-foreground">
                    {project.title}
                  </h3>
                  {project.githubStars !== undefined && (
                    <span
                      className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-400/10 dark:text-amber-400"
                      title={`${project.githubStars} GitHub stars`}
                    >
                      <StarIcon size={11} />
                      {project.githubStars}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2 text-muted transition-colors hover:bg-background hover:text-foreground"
                    aria-label={`${project.title} on GitHub`}
                    title="View source on GitHub"
                  >
                    <GitHubIcon size={16} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg p-2 text-muted transition-colors hover:bg-background hover:text-foreground"
                      aria-label={`${project.title} live demo`}
                      title="View live demo"
                    >
                      <ExternalLinkIcon size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="mb-3 line-clamp-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <p className="mb-3 line-clamp-3 text-sm leading-relaxed text-muted/80">
                {project.challenge}
              </p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-background px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </m.article>
        ))}
      </div>
    </section>
  );
}
