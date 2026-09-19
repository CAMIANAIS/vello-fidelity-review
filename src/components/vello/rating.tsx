const STAR_PATH =
  "M10 1.5 12.35 6.85 18.2 7.5 13.85 11.55 15 17.35 10 14.35 5 17.35 6.15 11.55 1.8 7.5 7.65 6.85 Z";

function Star({ filled }: { filled: boolean }) {
  return (
    <svg width={14} height={14} viewBox="0 0 20 19" aria-hidden="true">
      <path d={STAR_PATH} fill={filled ? "var(--rating)" : "var(--ink-150)"} />
    </svg>
  );
}

/**
 * `value` is nullable on purpose — a brand-new provider has no rating yet,
 * and the design's own rule is never to fake one to fill the space.
 */
export function Rating({ value, size = "sm" }: { value: number | null; size?: "sm" }) {
  if (value === null) {
    return <span className="text-[length:var(--text-xs)] text-text-muted">Not rated yet</span>;
  }

  const rounded = Math.round(value);

  return (
    <span
      className="inline-flex items-center gap-[6px]"
      aria-label={`Rated ${value.toFixed(1)} out of 5`}
    >
      <span className="flex items-center gap-[1px]" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} filled={i < rounded} />
        ))}
      </span>
      <span
        className="font-mono text-[length:var(--text-sm)] tabular-nums text-text-strong"
        aria-hidden="true"
      >
        {value.toFixed(1)}
      </span>
    </span>
  );
}
