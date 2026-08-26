import Link from "next/link";
import type { Job } from "@/lib/jobs";
import { tradeLabel } from "@/lib/trades";

export function JobCard({ job, href }: { job: Job; href?: string }) {
  return (
    <article className="card">
      <p className="kicker">{job.council}</p>
      <h3>{job.title}</h3>
      <div className="job-meta">
        <span className="tag">{tradeLabel(job.trade)}</span>
        <span className={`tag ${job.advice}`}>{job.advice}</span>
      </div>
      <p className="muted">{job.value}</p>
      <p className="muted">Deadline: {job.deadline}</p>
      <p style={{ marginTop: 12 }}>
        <Link href={href ?? `/jobs/${job.id}`}>Read the brief →</Link>
      </p>
    </article>
  );
}
