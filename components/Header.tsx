import Link from "next/link";

export function Header({ dim = "public" }: { dim?: "public" | "app" }) {
  return (
    <header className="site-header">
      <div className="wrap inner">
        <Link className="logo" href="/">Local<span>Tender</span></Link>
        <nav>
          <Link href="/jobs">Jobs</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/pricing">Pricing</Link>
          {dim === "app" ? (
            <>
              <Link href="/app">My jobs</Link>
              <Link href="/admin">Admin</Link>
            </>
          ) : (
            <>
              <Link href="/login">Log in</Link>
              <Link className="btn" href="/signup">Join</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
