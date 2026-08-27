"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { TRADES } from "@/lib/trades";
import { writeSession } from "@/lib/session";

export function DemoSignup() {
  const router = useRouter();
  const [trades, setTrades] = useState<string[]>([]);
  function toggle(slug: string) {
    setTrades((cur) => (cur.includes(slug) ? cur.filter((s) => s !== slug) : [...cur, slug]));
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
      <p className="lede">Clerk keys are not set yet, so this is the demo sign-up.</p>
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
    </>
  );
}
