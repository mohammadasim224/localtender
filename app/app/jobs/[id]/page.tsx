"use client";
import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getJob } from "@/lib/jobs";
import { tradeLabel } from "@/lib/trades";
import { readSession } from "@/lib/session";

export default function MemberJobPage() {
  const params = useParams<{ id: string }>();
  const job = getJob(params.id);
  const [sent, setSent] = useState(false);
  const [plan, setPlan] = useState<"alerts" | "help">("alerts");
  useEffect(() => { const s = readSession(); if (s) setPlan(s.plan); }, []);
  if (!job) return (<><Header dim="app" /><main className="hero"><div className="wrap"><h1>Job not found</h1></div></main></>);
  return (
    <>
      <Header dim="app" />
      <main className="hero">
        <div className="wrap">
          <p><Link href="/app">← My jobs</Link></p>
          <p className="kicker">{job.council}</p>
          <h1>{job.title}</h1>
          <div className="job-meta">
            <span className="tag">{tradeLabel(job.trade)}</span>
            <span className={`tag ${job.advice}`}>{job.advice}</span>
          </div>
          <p className="lede">{job.summary}</p>
          <p><strong>Value:</strong> {job.value}</p>
          <p><strong>Deadline:</strong> {job.deadline}</p>
          <h2 style={{ marginTop: 28 }}>Must-haves</h2>
          <ul className="list">{job.mustHaves.map((m) => <li key={m}>{m}</li>)}</ul>
          <h2>Answer ideas</h2>
          <ul className="list">{job.ideas.map((m) => <li key={m}>{m}</li>)}</ul>
          <p className="notice">{job.officialNote}</p>
          <div className="row"><a className="btn" href={job.portal} target="_blank" rel="noreferrer">Open official portal</a></div>
          <section>
            <h2>Ask for bid help</h2>
            {plan === "alerts" ? <p className="muted">Upgrade to Alerts + help to send a request.</p> : sent ? <p className="notice">Request saved. In production this lands in Convex and emails the team via Resend.</p> : (
              <form className="form" onSubmit={(e: FormEvent) => { e.preventDefault(); setSent(true); }}>
                <label htmlFor="note">What do you need?</label>
                <textarea id="note" rows={5} required />
                <div className="row"><button className="btn dark" type="submit">Send request</button></div>
              </form>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
