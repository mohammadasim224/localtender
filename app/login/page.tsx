"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { readSession } from "@/lib/session";

export default function LoginPage() {
  const router = useRouter();
  useEffect(() => { if (readSession()) router.replace("/app"); }, [router]);
  return (
    <>
      <Header />
      <main className="hero">
        <div className="wrap">
          <h1>Log in</h1>
          <p className="lede">This demo keeps your account in this browser.</p>
          <div className="row"><Link className="btn" href="/signup">Create or restore account</Link></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
