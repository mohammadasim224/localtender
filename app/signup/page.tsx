"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TRADES } from "@/lib/trades";
import { writeSession } from "@/lib/session";

export default function SignupPage() {
  const router = useRouter();
  const [trades, setTrades] = useState<string[]>([]);
  function toggle(slug: string) {
    setTrades((cur) => cur.includes(slug) ? cur.filter((s) => s !== slug) : [...cur, slug]);
  }
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    writeSession({
      company: String(data.get("company") || "Local firm"),
      email: String(data.get("email") || ""),
      trades,
      plan: (data.get("plan") as "alerts" | "help") || "alerts",
    });
    router.push("/app");
  }
  return (
    <>
      <Header />
      <main className="hero">
        <div className="wrap" style={{ maxWidth: 560 }}>
          <h1>Join</h1>
          <p className="lede">Demo sign-up. Clerk replaces this when keys are added.</p>
          <form className="form" onSubmit={onSubmit}>
            <label htmlFor="company">Company</label>
            <input id="company" name="company" required placeholder="e.g. BD Cleaning Ltd" />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
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
            <select id="plan" name="plan" defaultValue="alerts">
              <option value="alerts">Alerts — £390 / year</option>
              <option value="help">Alerts + help — £990 / year</option>
            </select>
            <div className="row"><button className="btn" type="submit">Create account</button></div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
