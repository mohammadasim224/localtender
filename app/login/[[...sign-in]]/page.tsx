import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DemoLogin } from "@/components/DemoLogin";

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="hero">
        <div className="wrap" style={{ maxWidth: 480 }}>
          <h1>Log in</h1>
          <DemoLogin />
        </div>
      </main>
      <Footer />
    </>
  );
}
