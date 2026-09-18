import { useEffect, useState, type ReactNode } from "react";

export function Mono({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-[var(--radius-xs)] bg-muted px-[var(--space-2)] py-[var(--space-1)] font-mono text-[0.85em] text-text-body">
      {children}
    </code>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[length:var(--text-xs)] uppercase tracking-[var(--ls-wider)] text-text-muted">
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
    fixed: "bg-success-tint text-text-brand",
    open: "bg-accent-tint text-accent-press",
    note: "bg-muted text-text-muted",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-[var(--space-2)] rounded-[var(--radius-pill)] px-[var(--space-3)] py-[var(--space-1)] font-mono text-[length:var(--text-2xs)] font-semibold ${tones[tone]}`}
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
    <div className="overflow-x-auto rounded-[var(--radius-md)] border border-border bg-card">
      <table className="w-full min-w-[540px] border-collapse text-left text-[length:var(--text-sm)]">
        <thead>
          <tr className="border-b border-border bg-muted/60">
            {headers.map((h) => (
              <th
                key={h}
                scope="col"
                className="px-[var(--space-4)] py-[var(--space-3)] font-mono text-[length:var(--text-2xs)] uppercase tracking-[var(--ls-wide)] text-text-muted"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/70 align-top last:border-0">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-[var(--space-4)] py-[var(--space-4)] text-text-body ${j === 0 ? "font-medium text-text-strong" : ""}`}
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
    <figure className="rounded-[var(--radius-md)] border-l-[3px] border-accent bg-card px-[var(--space-5)] py-[var(--space-4)]">
      <blockquote className="text-[length:var(--text-sm)] leading-[var(--lh-relaxed)] text-text-body">
        {children}
      </blockquote>
      {source ? (
        <figcaption className="mt-[var(--space-2)] font-mono text-[length:var(--text-xs)] text-text-muted">
          {source}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function AuditFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomed(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zoomed]);

  return (
    <figure className="overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface-card shadow-sm">
      <button
        type="button"
        onClick={() => setZoomed(true)}
        className="block w-full cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        aria-label={`Zoom in on: ${alt}`}
      >
        <img src={src} alt={alt} className="w-full" loading="lazy" />
      </button>
      <figcaption className="border-t border-border px-[var(--space-4)] py-[var(--space-3)] font-mono text-[length:var(--text-xs)] text-text-muted">
        {caption}
      </figcaption>
      {zoomed ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setZoomed(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/80 p-[var(--space-6)]"
        >
          <button
            type="button"
            onClick={() => setZoomed(false)}
            aria-label="Close zoomed image"
            className="absolute right-[var(--space-6)] top-[var(--space-6)] rounded-[var(--radius-md)] border border-border bg-card px-[var(--space-3)] py-[var(--space-2)] font-mono text-[length:var(--text-xs)] text-text-body focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Close ✕
          </button>
          <img
            src={src}
            alt={alt}
            className="max-h-full max-w-full rounded-[var(--radius-sm)] object-contain"
          />
        </div>
      ) : null}
    </figure>
  );
}
