import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>LocalTender helps Bradford firms find council jobs and bid better. We do not award contracts and we do not guarantee a win.</p>
        <p style={{ marginTop: 10 }}>
          <Link href="/privacy">Privacy</Link> · <Link href="/terms">Terms</Link> · <Link href="/contact">Contact</Link> · <a href="https://yortender.eu-supply.com">YORtender</a>
        </p>
      </div>
    </footer>
  );
}
