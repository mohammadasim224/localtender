"use client";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TRADES } from "@/lib/trades";
import { clerkEnabled } from "@/lib/clerk";

export default function OnboardingPage() {
  const router = useRouter();
  const [trades, setTrades] = useState<string[]>([]);
  const [company, setCompany] = useState("");
  const [plan, setPlan] = useState("alerts");

  if (!clerkEnabled) {
    return (
      <>
        <Header />
        <main className="hero"><div className="wrap"><p className="notice">Turn on Clerk keys first.</p></div></main>
        <Footer />
      </>
    );
  }

  return (
    <OnboardingForm
      trades={trades}
      setTrades={setTrades}
      company={company}
      setCompany={setCompany}
      plan={plan}
      setPlan={setPlan}
      router={router}
    />
  );
}

function OnboardingForm({
  trades, setTrades, company, setCompany, plan, setPlan, router,
}: {
  trades: string[];
  setTrades: (v: string[] | ((c: string[]) => string[])) => void;
  company: string;
  setCompany: (v: string) => void;
  plan: string;
  setPlan: (v: string) => void;
  router: ReturnType<typeof useRouter>;
}) {
  const { isLoaded, user } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;
    const meta = (user.unsafeMetadata || {}) as Record<string, unknown>;
    if (Array.isArray(meta.trades)) setTrades(meta.trades as string[]);
    if (typeof meta.company === "string") setCompany(meta.company);
    if (typeof meta.plan === "string") setPlan(meta.plan);
  }, [isLoaded, user, setTrades, setCompany, setPlan]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!user) return;
    await user.update({ unsafeMetadata: { company, trades, plan } });
    router.push("/app");
  }

  function toggle(slug: string) {
    setTrades((cur) => (cur.includes(slug) ? cur.filter((s) => s !== slug) : [...cur, slug]));
  }

  return (
    <>
      <Header dim="app" />
      <main className="hero">
        <div className="wrap" style={{ maxWidth: 560 }}>
          <h1>Your firm</h1>
          <p className="lede">Tell us the trade so we can match Bradford jobs.</p>
          <form className="form" onSubmit={onSubmit}>
            <label htmlFor="company">Company</label>
            <input id="company" value={company} onChange={(e) => setCompany(e.target.value)} required />
            <label>Trades</label>
            <div className="checks">
              {TRADES.map((t) => (
                <label key={t.slug}>
                  <input type="checkbox" checked={trades.includes(t.slug)} onChange={() => toggle(t.slug)} />
                  {t.label}
                </label>
              ))}
            </div>
            <label htmlFor="plan">Plan</label>
            <select id="plan" value={plan} onChange={(e) => setPlan(e.target.value)}>
              <option value="alerts">Alerts — £390 / year</option>
              <option value="help">Alerts + help — £990 / year</option>
            </select>
            <div className="row"><button className="btn" type="submit">Save and see jobs</button></div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
