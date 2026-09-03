"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { readSession, writeSession } from "@/lib/session";

export function DemoLogin() {
  const router = useRouter();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") || "").trim();
    const existing = readSession();
    if (existing && existing.email === email) {
      router.push("/app");
      return;
    }
    writeSession({
      company: existing?.company || "Local firm",
      email: email || "demo@localtender.test",
      trades: existing?.trades || ["building", "cleaning"],
      plan: existing?.plan || "help",
    });
    router.push("/app");
  }

  return (
    <>
      <p className="lede">Use any email to open the member area. This demo saves in your browser only.</p>
      <form className="form" onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@firm.co.uk" />
        <div className="row">
          <button className="btn" type="submit">Open my jobs</button>
          <Link className="btn ghost dark" href="/signup">Create a profile</Link>
        </div>
      </form>
    </>
  );
}
