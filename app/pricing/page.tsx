import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="hero">
        <div className="wrap">
          <h1>Yearly plans</h1>
          <p className="lede">Pay once a year. Extra bid packs if you need more.</p>
          <div className="grid cards" style={{ marginTop: 28 }}>
            <article className="card">
              <p className="kicker">Alerts</p>
              <p className="price">£390 / year</p>
              <ul className="list"><li>Matched Bradford jobs</li><li>Plain-English briefs</li><li>Bid / skip / sub advice</li></ul>
              <p style={{ marginTop: 16 }}><Link className="btn" href="/signup">Start alerts</Link></p>
            </article>
            <article className="card">
              <p className="kicker">Alerts + help</p>
              <p className="price">£990 / year</p>
              <ul className="list"><li>Everything in Alerts</li><li>6 bid-help packs</li><li>Social value wording</li></ul>
              <p style={{ marginTop: 16 }}><Link className="btn dark" href="/signup">Start with help</Link></p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
