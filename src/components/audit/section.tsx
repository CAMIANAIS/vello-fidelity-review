import type { ReactNode } from "react";

export function Section({
  id,
  number,
  title,
  summary,
  children,
}: {
  id: string;
  number: string;
  title: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-[var(--radius-lg)] border border-border bg-card p-[var(--space-6)] shadow-sm sm:p-[var(--space-8)]"
    >
      <p className="font-mono text-[length:var(--text-xs)] uppercase tracking-[var(--ls-wider)] text-accent-press">
        {number}
      </p>
      <h2 className="mt-[var(--space-3)] text-[length:var(--text-2xl)] font-bold leading-[var(--lh-snug)] text-text-strong sm:text-[length:var(--text-3xl)]">
        {title}
      </h2>
      <p className="mt-[var(--space-3)] max-w-2xl text-[length:var(--text-sm)] leading-[var(--lh-relaxed)] text-text-muted">
        {summary}
      </p>
      <div className="mt-[var(--space-7)] space-y-[var(--space-6)] text-[length:var(--text-sm)] leading-[var(--lh-relaxed)] text-text-body">
        {children}
      </div>
    </section>
  );
}
