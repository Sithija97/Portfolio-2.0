const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <nav
      aria-label="Section navigation"
      className="hidden gap-1 rounded-full border border-transparent bg-slate-100/80 px-2 py-1.5 backdrop-blur dark:border-[#212529] dark:bg-[#0a0a0a]/80 sm:flex"
    >
      {NAV_LINKS.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="rounded-full px-3 py-1 text-sm font-medium text-muted transition-colors hover:bg-card hover:text-foreground"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
