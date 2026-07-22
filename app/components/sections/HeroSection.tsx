"use client";

import { m } from "motion/react";
import { PERSONAL } from "@/app/data/constants";
import { ArrowRightIcon } from "@/app/components/Icons";
import { ResumeButton } from "@/app/components/ResumeButton";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
} as const;

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
} as const;

export function HeroSection() {
  return (
    <m.section
      className="mb-28"
      id="hero"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <m.div
        variants={item}
        className="mb-5 inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-transparent border border-transparent dark:border-[#212529] bg-card px-3 py-1"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
        </span>
        <span className="text-xs font-medium text-muted ">
          Available for work
        </span>
      </m.div>
      <m.h1
        variants={item}
        className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
      >
        Hi, I&apos;m {PERSONAL.name}
      </m.h1>
      <m.p variants={item} className="mb-4 font-mono text-lg text-muted">
        {PERSONAL.title}
      </m.p>
      <m.p variants={item} className="max-w-xl text-base leading-relaxed text-muted">
        {PERSONAL.bio}
      </m.p>
      <m.div variants={item} className="mt-8 flex items-center gap-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Get in touch
          <ArrowRightIcon />
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-lg bg-slate-100 dark:bg-transparent border border-transparent px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-card dark:border-[#212529]"
        >
          View projects
        </a>
        <ResumeButton />
      </m.div>
    </m.section>
  );
}
