"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { clerkEnabled } from "@/lib/clerk";

export function AuthNav() {
  if (!clerkEnabled) {
    return (
      <>
        <Link href="/login">Log in</Link>
        <Link className="btn" href="/signup">Join</Link>
      </>
    );
  }
  return (
    <>
      <SignedOut>
        <Link href="/login">Log in</Link>
        <Link className="btn" href="/signup">Join</Link>
      </SignedOut>
      <SignedIn>
        <Link href="/app">My jobs</Link>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </>
  );
}
