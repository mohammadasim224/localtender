import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JobCard } from "@/components/JobCard";
import { JOBS } from "@/lib/jobs";

export default function JobsPage() {
  return (
    <>
      <Header />
      <main className="hero">
        <div className="wrap">
          <p className="kicker">Bradford Council</p>
          <h1>Jobs</h1>
          <p className="lede">Short briefs only. Official packs stay on YORtender and Find a Tender.</p>
          <div className="grid cards" style={{ marginTop: 28 }}>
            {JOBS.map((job) => <JobCard key={job.id} job={job} />)}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
