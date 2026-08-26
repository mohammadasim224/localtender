import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JobCard } from "@/components/JobCard";
import { JOBS } from "@/lib/jobs";
import { TRADES } from "@/lib/trades";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="wrap">
            <p className="kicker">Bradford first · then Yorkshire</p>
            <h1>Council jobs, explained for local firms.</h1>
            <p className="lede">We watch Bradford tenders, tell you if they fit your trade, and help you bid. You submit. The council awards. No win is promised.</p>
            <div className="row">
              <Link className="btn" href="/signup">Join for the year</Link>
              <Link className="btn ghost dark" href="/jobs">See current jobs</Link>
            </div>
          </div>
        </section>
        <section>
          <div className="wrap">
            <h2>Three steps</h2>
            <div className="grid cards">
              <article className="card"><p className="kicker">01</p><h3>Match</h3><p className="muted">Pick your trade. We show Bradford jobs that fit.</p></article>
              <article className="card"><p className="kicker">02</p><h3>Brief</h3><p className="muted">One page: what they want, who can apply, bid or skip.</p></article>
              <article className="card"><p className="kicker">03</p><h3>Bid help</h3><p className="muted">Answer ideas and a checklist. You send it on YORtender.</p></article>
            </div>
          </div>
        </section>
        <section>
          <div className="wrap">
            <h2>Trades we start with</h2>
            <div className="grid cards">
              {TRADES.map((t) => (
                <article className="card" key={t.slug}><h3>{t.label}</h3><p className="muted">{t.blurb}</p></article>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="wrap">
            <h2>On the board now</h2>
            <div className="grid cards">
              {JOBS.slice(0, 4).map((job) => <JobCard key={job.id} job={job} />)}
            </div>
            <p style={{ marginTop: 18 }}><Link href="/jobs">All jobs →</Link></p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
