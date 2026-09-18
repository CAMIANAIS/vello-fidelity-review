import type { ReactNode } from "react";
import { GradePanel } from "./grading";

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
      className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-9"
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-persimmon">{number}</p>
      <h2 className="mt-3 text-2xl font-bold leading-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-muted">{summary}</p>
      <div className="mt-7 space-y-6 text-[15px] leading-relaxed text-ink-body">{children}</div>
      <GradePanel id={id} label={title} />
    </section>
  );
}
