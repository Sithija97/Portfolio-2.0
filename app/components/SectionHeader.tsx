interface SectionHeaderProps {
  title: string;
  className?: string;
  emphasized?: boolean;
}

export function SectionHeader({
  title,
  className = "mb-8",
  emphasized = false,
}: SectionHeaderProps) {
  return (
    <>
      <h2
        className={
          emphasized
            ? "mb-1 text-lg font-semibold tracking-tight text-foreground"
            : "mb-1 text-sm font-medium uppercase tracking-widest text-muted"
        }
      >
        {title}
      </h2>
      <div className={`h-px w-8 bg-border ${className}`} />
    </>
  );
}
