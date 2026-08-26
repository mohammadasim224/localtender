import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function HowPage() {
  return (
    <>
      <Header />
      <main className="hero">
        <div className="wrap">
          <h1>How it works</h1>
          <p className="lede">Built for small Bradford firms who miss tenders.</p>
          <section><h2>1. You tell us your trade</h2><p>Building, cleaning, security, parks, food or IT.</p></section>
          <section><h2>2. We watch the boards</h2><p>YORtender, Find a Tender, Contracts Finder, and Bradford’s contracts list. We write a one-page brief. We do not copy the tender pack.</p></section>
          <section><h2>3. You decide</h2><p>Bid, skip, or go in as a subcontractor.</p></section>
          <section><h2>4. If you bid, we help</h2><p>Ideas for the quality answers, social value you can actually deliver, and a checklist so nothing is missing on the portal.</p></section>
        </div>
      </main>
      <Footer />
    </>
  );
}
