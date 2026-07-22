"use client";

import { AnimatePresence, m } from "motion/react";
import { useTheme } from "@/app/components/ThemeProvider";
import { MoonIcon, SunIcon } from "@/app/components/Icons";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative overflow-hidden rounded-full p-2 text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <m.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="block"
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </m.span>
      </AnimatePresence>
    </button>
  );
}
