"use client";
import { FormEvent, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TRADES } from "@/lib/trades";

export default function AdminPage() {
  const [saved, setSaved] = useState(false);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const existing = JSON.parse(window.localStorage.getItem("localtender-admin-jobs") || "[]");
    existing.unshift({ ...data, createdAt: new Date().toISOString() });
    window.localStorage.setItem("localtender-admin-jobs", JSON.stringify(existing));
    setSaved(true);
    e.currentTarget.reset();
  }
  return (
    <>
      <Header dim="app" />
      <main className="hero">
        <div className="wrap" style={{ maxWidth: 640 }}>
          <h1>Add a job</h1>
          {saved && <p className="notice">Saved in this browser.</p>}
          <form className="form" onSubmit={onSubmit}>
            <label htmlFor="title">Title</label><input id="title" name="title" required />
            <label htmlFor="trade">Trade</label>
            <select id="trade" name="trade">{TRADES.map((t) => <option key={t.slug} value={t.slug}>{t.label}</option>)}</select>
            <label htmlFor="value">Value</label><input id="value" name="value" />
            <label htmlFor="deadline">Deadline</label><input id="deadline" name="deadline" />
            <label htmlFor="advice">Advice</label>
            <select id="advice" name="advice"><option value="bid">bid</option><option value="skip">skip</option><option value="sub">sub</option></select>
            <label htmlFor="brief">Brief</label><textarea id="brief" name="brief" rows={6} required />
            <div className="row"><button className="btn" type="submit">Save job</button></div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
