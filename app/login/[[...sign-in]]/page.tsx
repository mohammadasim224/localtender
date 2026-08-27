import { SignIn } from "@clerk/nextjs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { clerkEnabled } from "@/lib/clerk";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="hero">
        <div className="wrap" style={{ maxWidth: 480 }}>
          <h1>Log in</h1>
          {clerkEnabled ? (
            <SignIn routing="path" path="/login" signUpUrl="/signup" afterSignInUrl="/onboarding" />
          ) : (
            <p className="notice">Add Clerk keys on Vercel to turn real logins on. <Link href="/signup">Demo join</Link> still works until then.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
