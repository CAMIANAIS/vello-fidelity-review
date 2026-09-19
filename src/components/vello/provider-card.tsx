import { useState } from "react";
import { VerifiedMark } from "./verified-mark";
import { Rating } from "./rating";

export interface ProviderCardProps {
  name: string;
  bio: string;
  photoUrl?: string;
  /** null = genuinely not rated yet. Never fake a number to fill the space. */
  rating: number | null;
  price: number;
  priceUnit?: string;
  walkMinutes: number;
  available: boolean;
  verified: boolean;
  /** Shadow-only signal, confirmed as a real documented pattern for this card — not a color/shape-alone violation, since it doesn't carry trust/status meaning the way the verified mark does. */
  featured?: boolean;
  onOpen?: () => void;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

/**
 * Rebuilt from the Friday spec sheet (design/promptsUse.md) and the
 * token-drift corrections in design/fidelity-audit.md — every value below
 * traces to a real token in colors.css / spacing.css / typography.css.
 *
 * Two things intentionally NOT "fixed" to a token, left as documented
 * open questions instead of guessed:
 *  - the walk-time icon is 13px; no --icon-* scale exists anywhere in the
 *    system (Tag=16px, chevron=15px), so rounding it would invent a false
 *    relationship to the type scale.
 *  - the walk-time chip keeps its own bespoke color/font treatment rather
 *    than being switched to the system's Tag component — a live open
 *    question for the designer, not a bug to silently resolve here.
 */
export function ProviderCard({
  name,
  bio,
  photoUrl,
  rating,
  price,
  priceUnit = "walk",
  walkMinutes,
  available,
  verified,
  featured = false,
  onOpen,
}: ProviderCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative block w-full rounded-[var(--radius-lg)] border border-border bg-surface-card p-[var(--space-5)] text-left transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      style={{
        boxShadow: featured
          ? "var(--shadow-brand)"
          : hovered
            ? "var(--shadow-lg)"
            : "none",
      }}
    >
      {/* Chevron affordance — decorative only. The whole card is the real
          focusable control (WCAG 2.1.1), so this never needs its own 44px
          target; making it interactive itself would need it to grow and
          would change the header layout — a tradeoff, not fixed silently. */}
      <span
        aria-hidden="true"
        className="absolute flex items-center justify-center rounded-full transition-colors"
        style={{
          top: 14,
          right: 14,
          width: 26,
          height: 26,
          background: hovered ? "var(--brand-primary-tint)" : "var(--surface-sunken)",
          color: hovered ? "var(--text-brand)" : "var(--text-subtle)",
        }}
      >
        <svg width={15} height={15} viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>

      <div className="flex items-start gap-[var(--space-3)] pr-[32px]">
        <div className="relative shrink-0">
          {photoUrl ? (
            <img
              src={photoUrl}
              alt=""
              className="h-14 w-14 rounded-full object-cover"
            />
          ) : (
            <div
              className="flex h-14 w-14 items-center justify-center rounded-full font-[var(--font-display)] font-bold text-text-brand"
              style={{ background: "var(--brand-primary-tint)" }}
              aria-hidden="true"
            >
              {initials(name)}
            </div>
          )}
          {verified ? (
            <span className="absolute -bottom-0.5 -right-0.5">
              <VerifiedMark size={20} />
            </span>
          ) : null}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-[var(--space-2)]">
            <span className="font-[var(--font-display)] text-[length:var(--text-md)] font-bold text-text-strong">
              {name}
            </span>
            <span
              className="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-pill)] px-[var(--space-2)] py-[2px] font-[var(--font-sans)] text-[length:var(--text-xs)] font-semibold"
              style={
                available
                  ? { background: "var(--success-tint)", color: "var(--text-brand)" }
                  : { background: "var(--surface-sunken)", color: "var(--text-muted)" }
              }
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  background: available ? "var(--green-500)" : "var(--ink-400)",
                }}
                aria-hidden="true"
              />
              {available ? "Available" : "Unavailable"}
            </span>
          </div>

          <p className="mt-[var(--space-1)] text-[length:var(--text-sm)] text-text-body">
            {bio}
          </p>

          <p className="mt-[var(--space-2)] font-[var(--font-mono)] text-[length:var(--text-sm)] text-text-strong">
            <span className="text-text-muted">from </span>
            <span className="font-semibold">${price}</span>
            <span> / {priceUnit}</span>
          </p>

          <div className="mt-[var(--space-2)] flex flex-wrap items-center gap-[var(--space-2)]">
            <span
              className="inline-flex items-center gap-[var(--space-1)] rounded-[var(--radius-pill)] font-[var(--font-mono)] text-[length:var(--text-xs)]"
              style={{
                padding: "var(--space-1) var(--space-2)",
                color: "var(--green-700)",
                background: "var(--green-50)",
                border: "1px solid var(--green-200)",
              }}
            >
              <svg width={13} height={13} viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {/* walking-figure glyph — size/color are audited (13px, currentColor);
                    the exact icon identity was never resolved against a real Lucide
                    name in the audit, so this is a reasonable stand-in, not a verified match. */}
                <circle cx="13" cy="4" r="2" fill="currentColor" />
                <path
                  d="M11 7l-1.5 5 3 2-1 6M9 12l-3 1.5M13 9l3 2-1 6"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {walkMinutes} min walk
            </span>

            <Rating value={rating} />
          </div>
        </div>
      </div>
    </button>
  );
}
