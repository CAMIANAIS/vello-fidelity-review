# Vello v1 — End-to-End Design Process Map

Live artifact: https://claude.ai/artifact/6v2sxFt3rQra9iUA6tabLu
Sources used: vello-product.vercel.app/#system, vello-design-system.vercel.app/docs

Six phases, one key decision and one real artifact each — specific to Vello's hyperlocal scope, three roles, and trust model (not generic agency boilerplate).

## 01 · Discover — Product-led
**Decision:** Vello scopes to one neighborhood instead of a whole city, because the real problem isn't finding a provider, it's *trusting* one. Three roles carry different needs: Requester (transparent pricing, verified neighbors), Provider (steady local work, recognized expertise), Community Admin (verify providers, resolve disputes).
**Artifact — `role-needs.md`:**
- requester: transparent pricing + neighbor-verified providers
- provider: steady work, recognized for expertise (not speed)
- admin: verify new providers, resolve disputes

## 02 · Define — Product + UX
**Decision:** "Admin verifies providers before they appear" is too coarse. It becomes four named states, each with its own meaning — not a single verified/not-verified switch.
**Artifact — `verification-states.md`:**
- verified — ID + background check complete
- top-rated — 4.8+ across 50+ bookings this year
- pending — documents submitted, check in progress
- unverified — no check on file (shown, never hidden)

## 03 · Architect — Engineer flags here
**Decision:** Four states means an enum field, not a boolean — engineering catches this before Design starts. Rating must be genuinely nullable; new providers never get a faked score.
**Artifact — `ProviderCard` props (schema seed):**
```
name, service, rating (nullable — never faked)
photo, reviews, distance
price, priceUnit
verified: enum[verified|top-rated|pending|unverified]
available: boolean
featured: boolean (max one per list)
```

## 04 · Design — UX + UI + Visual
**Decision:** One olive primary leads every screen; persimmon gets one rare moment, never a second CTA. Every trust mark pairs a shape with a color — a plain green dot is banned, because color alone fails in greyscale or colorblindness.
**Artifact — applied tokens:** Book button → `variant="primary"` (`--brand-primary`); Promo badge → `--accent` (persimmon, the one allowed moment); verified mark → olive shield (shape + color, never a dot); top-rated mark → amber star seal.

## 05 · Validate — Design + Engineer
**Decision:** Check the screen against the system's own written rules, not opinion — contrast ratios, tap target size, and whether "unverified" is still honestly visible instead of quietly hidden.
**Artifact — `accessibility-audit.md`:**
- `--brand-primary` on white = 4.6:1 ✓ safe for button text
- `--accent` on white = 3.3:1 → 16px+ semibold only, never small text
- tap targets: md/lg buttons = 44px+ ✓
- "unverified" state shown, not hidden ✓

## 06 · Handoff — To engineering
**Decision:** Engineering gets exact values, not a picture to eyeball — component name, prop name, type, default, and the real token behind every color.
**Artifact — `handoff-spec.md`:**
```
ProviderCard.verified   boolean  default: false
ProviderCard.featured   boolean  default: false (max 1 / list)
ProviderCard.rating     number   nullable, no default
Button (Book)           variant: "primary"
                        token: --brand-primary #557E26
```

See `deliverable-monday-reflection.md` for the two documented pushbacks against this map (handoff meaning-loss, and the Validate phase's unequal-weight checks).
