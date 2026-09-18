import type { ReactNode } from "react";

export function Mono({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-ink-body">
      {children}
    </code>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-muted">
      {children}
    </span>
  );
}

export function StatusPill({
  tone,
  children,
}: {
  tone: "fixed" | "open" | "note";
  children: ReactNode;
}) {
  const tones = {
    fixed: "bg-green-100 text-green-700",
    open: "bg-persimmon-tint text-persimmon",
    note: "bg-muted text-ink-muted",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold ${tones[tone]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}

export function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card">
      <table className="w-full min-w-[540px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/60">
            {headers.map((h) => (
              <th
                key={h}
                scope="col"
                className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/70 last:border-0 align-top">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-3.5 text-ink-body ${j === 0 ? "font-medium text-foreground" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Quote({ children, source }: { children: ReactNode; source?: string }) {
  return (
    <figure className="rounded-xl border-l-[3px] border-persimmon bg-card px-5 py-4">
      <blockquote className="text-[15px] leading-relaxed text-ink-body">{children}</blockquote>
      {source ? (
        <figcaption className="mt-2 font-mono text-xs text-ink-muted">{source}</figcaption>
      ) : null}
    </figure>
  );
}
