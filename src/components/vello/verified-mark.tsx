/**
 * Shield shape is the accessible signal for "verified" — the design system's
 * own DON'T list bans substituting a plain dot or circle for it, because a
 * color-only status mark fails for anyone who can't distinguish the color.
 */
export function VerifiedMark({
  size = 20,
  title = "Background-checked",
}: {
  size?: number;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      className="shrink-0"
    >
      <title>{title}</title>
      <path
        d="M12 2.2 L4.6 5 V11.4 C4.6 15.7 7.9 19.6 12 21.2 C16.1 19.6 19.4 15.7 19.4 11.4 V5 L12 2.2 Z"
        fill="var(--green-600)"
        stroke="var(--surface-card)"
        strokeWidth={2.4}
        strokeLinejoin="round"
      />
      <path
        d="m8.4 12.2 2.5 2.5 5-5"
        fill="none"
        stroke="var(--paper)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
