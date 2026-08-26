"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JobCard } from "@/components/JobCard";
import { JOBS, jobsForTrades } from "@/lib/jobs";
import { readSession, clearSession, type Session } from "@/lib/session";

export default function DashboardPage() {
  const router = useRouter();
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    const s = readSession();
    if (!s) router.replace("/signup");
    else setSession(s);
  }, [router]);
  if (!session) return null;
  const jobs = jobsForTrades(session.trades);
  return (
    <>
      <Header dim="app" />
      <main className="hero">
        <div className="wrap">
          <p className="kicker">{session.plan === "help" ? "Alerts + help" : "Alerts"}</p>
          <h1>{session.company}</h1>
          <p className="lede">Jobs matched to your trades.</p>
          <div className="grid cards" style={{ marginTop: 24 }}>
            {(jobs.length ? jobs : JOBS).map((job) => (
              <JobCard key={job.id} job={job} href={`/app/jobs/${job.id}`} />
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            <button className="btn ghost dark" onClick={() => { clearSession(); router.push("/"); }}>Log out</button>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
