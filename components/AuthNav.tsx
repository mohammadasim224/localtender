"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { clearSession, readSession } from "@/lib/session";

export function AuthNav() {
  const router = useRouter();
  const [inApp, setInApp] = useState(false);

  useEffect(() => {
    setInApp(Boolean(readSession()));
  }, []);

  if (inApp) {
    return (
      <>
        <Link href="/app">My jobs</Link>
        <button
          className="btn ghost"
          type="button"
          onClick={() => {
            clearSession();
            setInApp(false);
            router.push("/");
          }}
        >
          Log out
        </button>
      </>
    );
  }

  return (
    <>
      <Link href="/login">Log in</Link>
      <Link className="btn" href="/signup">Join</Link>
    </>
  );
}
