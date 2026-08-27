import { SignUp } from "@clerk/nextjs";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { clerkEnabled } from "@/lib/clerk";
import { DemoSignup } from "@/components/DemoSignup";

export default function SignupPage() {
  return (
    <>
      <Header />
      <main className="hero">
        <div className="wrap" style={{ maxWidth: 560 }}>
          <h1>Join</h1>
          {clerkEnabled ? (
            <SignUp routing="path" path="/signup" signInUrl="/login" afterSignUpUrl="/onboarding" />
          ) : (
            <DemoSignup />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
