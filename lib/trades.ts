export const TRADES = [
  { slug: "building", label: "Building & adaptations", blurb: "Repairs, rails, ramps, small works." },
  { slug: "cleaning", label: "Cleaning & supplies", blurb: "Buildings, hygiene products, facilities." },
  { slug: "security", label: "Security", blurb: "Guarding, events, markets, keyholding." },
  { slug: "parks", label: "Parks, play & grounds", blurb: "Play areas, planting, inspections." },
  { slug: "catering", label: "Food & catering", blurb: "Schools, homes, bread and meals." },
  { slug: "it", label: "IT & cyber", blurb: "Software, testing, training." },
] as const;

export type TradeSlug = (typeof TRADES)[number]["slug"];

export function tradeLabel(slug: string) {
  return TRADES.find((t) => t.slug === slug)?.label ?? slug;
}
