import type { TradeSlug } from "./trades";

export type Advice = "bid" | "skip" | "sub";

export type Job = {
  id: string;
  title: string;
  council: string;
  trade: TradeSlug;
  value: string;
  deadline: string;
  portal: string;
  whoCanApply: string;
  score: string;
  advice: Advice;
  summary: string;
  mustHaves: string[];
  ideas: string[];
  officialNote: string;
};

export const JOBS: Job[] = [
  {
    id: "pen-test-2026",
    title: "PEN testing and IT health checks",
    council: "Bradford Council",
    trade: "it",
    value: "About £250,000",
    deadline: "14 September 2026",
    portal: "https://yortender.eu-supply.com",
    whoCanApply: "Experienced cyber firms. They marked it as suitable for SMEs.",
    score: "Quality of method plus price. Expect NCSC / OWASP practice.",
    advice: "bid",
    summary: "Bradford wants blocks of consultancy days for penetration tests and PSN-style health checks.",
    mustHaves: ["Cyber experience you can prove", "Insurance", "NCSC / OWASP practice"],
    ideas: ["Name the tests you will run in week one.", "Show two similar public-sector jobs.", "Say how you report to a non-technical officer.", "Offer a Bradford briefing after each test.", "Keep price clear per 10-day block."],
    officialNote: "Submit on YORtender. This page is a summary only.",
  },
  {
    id: "cleaning-materials",
    title: "Supply and delivery of cleaning materials",
    council: "Bradford Council",
    trade: "cleaning",
    value: "About £1.05m over the term",
    deadline: "Watch for re-let",
    portal: "https://yortender.eu-supply.com",
    whoCanApply: "Suppliers who can deliver across the district to FM sites.",
    score: "Price plus reliable delivery and product range.",
    advice: "sub",
    summary: "One contractor to supply hygiene and cleaning products to council buildings across Bradford.",
    mustHaves: ["Product range", "Delivery capacity", "Insurance"],
    ideas: ["Map delivery days by BD postcode.", "List core stock you hold.", "Offer a local emergency top-up.", "Show two school or care references.", "Partner if you cannot cover the whole district."],
    officialNote: "Check YORtender and the contracts register for the next advert.",
  },
  {
    id: "adaptations-framework",
    title: "Minor works: property adaptations",
    council: "Bradford Council",
    trade: "building",
    value: "Framework about £1.4m",
    deadline: "Watch mini-competitions",
    portal: "https://yortender.eu-supply.com",
    whoCanApply: "Trades who can fit rails, steps and ramps in people homes.",
    score: "Price 60% / quality and social value 40% on the last advert.",
    advice: "bid",
    summary: "Call-off work to help people live independently: handrails, ramps, small adaptations.",
    mustHaves: ["Public liability insurance", "Safe working in occupied homes", "DBS if asked"],
    ideas: ["Describe booking and finishing with the resident home.", "Give a simple defects process.", "Name local suppliers.", "Offer apprentice days.", "Show photos of similar work."],
    officialNote: "Official documents stay on YORtender.",
  },
  {
    id: "play-areas",
    title: "Play area works and outdoor gyms",
    council: "Bradford Council",
    trade: "parks",
    value: "Often £30k-£150k per site",
    deadline: "Sites come up through the year",
    portal: "https://yortender.eu-supply.com",
    whoCanApply: "Play installers, groundworkers, landscapers.",
    score: "Quality of kit and install, programme, then price.",
    advice: "bid",
    summary: "Bradford regularly lets play refurbs and outdoor gyms.",
    mustHaves: ["Play inspection knowledge or partner", "Insurance", "Site programme"],
    ideas: ["Keep the park usable while you work.", "Name the inspector after install.", "Use local plant and labour.", "Include a 12-month defects visit.", "Keep the method site-specific."],
    officialNote: "Each site is a separate advert.",
  },
  {
    id: "security-lots",
    title: "Security provisions (four lots)",
    council: "Bradford Council",
    trade: "security",
    value: "Multi-year, split into lots",
    deadline: "Watch YORtender",
    portal: "https://yortender.eu-supply.com",
    whoCanApply: "SIA-licensed firms. Lots cover theatres, events, markets and keyholding.",
    score: "Response time, staffing, price, social value.",
    advice: "bid",
    summary: "Bradford split security so a local firm can bid one lot.",
    mustHaves: ["SIA licensing", "Vetted staff", "Out-of-hours cover for some lots"],
    ideas: ["Bid only the lot you can staff tonight.", "Give a real response time from Bradford.", "Show local event work.", "Explain how you replace a no-show.", "Recruit locally."],
    officialNote: "Do not bid every lot if you cannot cover them.",
  },
  {
    id: "bread-morning-goods",
    title: "Bread and morning goods",
    council: "Bradford Council",
    trade: "catering",
    value: "About £5.1m listed on the register",
    deadline: "Current deal listed to Feb 2027",
    portal: "https://yortender.eu-supply.com",
    whoCanApply: "Bakers who can deliver to schools, civic sites and homes.",
    score: "Price, freshness, delivery reliability.",
    advice: "bid",
    summary: "Supply bread and morning goods across council sites.",
    mustHaves: ["Food hygiene rating", "Delivery vans", "Capacity for school term peaks"],
    ideas: ["Show a sample weekly drop sheet.", "Name backup bake if a van fails.", "Keep products consistent.", "Offer an early-morning Bradford run.", "Say which area you can cover."],
    officialNote: "Confirm dates on the contracts register before you price.",
  },
  {
    id: "postal-pipeline",
    title: "Postal goods and services",
    council: "Bradford Council",
    trade: "cleaning",
    value: "Multi-year mail contract",
    deadline: "Tender notice estimated around September 2026",
    portal: "https://www.find-tender.service.gov.uk",
    whoCanApply: "Mail and courier firms.",
    score: "Reliability and price.",
    advice: "skip",
    summary: "Pipeline notice for collection and delivery of mail. Only bid if mail is your trade.",
    mustHaves: ["Mail handling process", "Track and trace", "Insurance"],
    ideas: ["Only bid if this is core work.", "Show collection windows.", "Price collection and delivery separately if allowed.", "Name a local supervisor.", "Otherwise wait for FM jobs."],
    officialNote: "This is a pipeline, not a live pack.",
  },
  {
    id: "warm-homes",
    title: "Warm Homes Healthy People",
    council: "Bradford Council",
    trade: "building",
    value: "About £1.8m class",
    deadline: "Check YORtender",
    portal: "https://yortender.eu-supply.com",
    whoCanApply: "Advice organisations as prime. Trades as subcontractors.",
    score: "Reach into communities, quality of support, price.",
    advice: "sub",
    summary: "A service to help people in cold homes. Local heating firms can sit underneath.",
    mustHaves: ["Relevant install tickets if subcontracting"],
    ideas: ["Do not prime unless you run advice services.", "Offer a priced menu of small heating fixes.", "Name BD postcodes you work.", "Partner with a local advice charity.", "Only promise work you can start this winter."],
    officialNote: "Read the official specification before you promise installs.",
  },
];

export function getJob(id: string) {
  return JOBS.find((j) => j.id === id);
}

export function jobsForTrades(trades: string[]) {
  if (!trades.length) return JOBS;
  return JOBS.filter((j) => trades.includes(j.trade));
}
