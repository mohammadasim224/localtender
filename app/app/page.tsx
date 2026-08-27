"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JobCard } from "@/components/JobCard";
import { JOBS, jobsForTrades } from "@/lib/jobs";
import { readSession, clearSession, type Session } from "@/lib/session";
import { clerkEnabled } from "@/lib/clerk";

export default function DashboardPage() {
  if (clerkEnabled) return <ClerkDashboard />;
  return <DemoDashboard />;
}

function ClerkDashboard() {
  const { isLoaded, user } = useUser();
  const router = useRouter();
  if (!isLoaded) return null;
  const meta = (user?.unsafeMetadata || {}) as { company?: string; trades?: string[]; plan?: string };
  const company = meta.company || user?.fullName || "Your firm";
  const trades = meta.trades || [];
  const plan = meta.plan === "help" ? "help" : "alerts";
  const jobs = jobsForTrades(trades);
  return (
    <>
      <Header dim="app" />
      <main className="hero">
        <div className="wrap">
          <p className="kicker">{plan === "help" ? "Alerts + help" : "Alerts"}</p>
          <h1>{company}</h1>
          {!trades.length && (
            <p className="notice">Pick your trades first. <button className="btn" onClick={() => router.push("/onboarding")}>Set trades</button></p>
          )}
          <div className="grid cards" style={{ marginTop: 24 }}>
            {(jobs.length ? jobs : JOBS).map((job) => (
              <JobCard key={job.id} job={job} href={`/app/jobs/${job.id}`} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function DemoDashboard() {
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
