import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getJob } from "@/lib/jobs";
import { tradeLabel } from "@/lib/trades";

export default function JobBriefPage({ params }: { params: { id: string } }) {
  const job = getJob(params.id);
  if (!job) notFound();
  return (
    <>
      <Header />
      <main className="hero">
        <div className="wrap">
          <p className="kicker">{job.council}</p>
          <h1>{job.title}</h1>
          <div className="job-meta">
            <span className="tag">{tradeLabel(job.trade)}</span>
            <span className={`tag ${job.advice}`}>{job.advice}</span>
          </div>
          <p className="lede">{job.summary}</p>
          <div className="grid cards" style={{ marginTop: 28 }}>
            <article className="card"><h3>Value</h3><p>{job.value}</p></article>
            <article className="card"><h3>Deadline</h3><p>{job.deadline}</p></article>
            <article className="card"><h3>Who can apply</h3><p>{job.whoCanApply}</p></article>
            <article className="card"><h3>How they score</h3><p>{job.score}</p></article>
          </div>
          <section><h2>Must-haves</h2><ul className="list">{job.mustHaves.map((m) => <li key={m}>{m}</li>)}</ul></section>
          <section><h2>Answer ideas</h2><ul className="list">{job.ideas.map((m) => <li key={m}>{m}</li>)}</ul></section>
          <p className="notice">{job.officialNote}</p>
          <div className="row">
            <a className="btn" href={job.portal} target="_blank" rel="noreferrer">Official portal</a>
            <Link className="btn dark" href="/signup">Get bid help</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
