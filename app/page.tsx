import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import GettingStarted from "@/components/getting-started"
import Configurations from "@/components/configurations"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 gradient-mesh pointer-events-none" />

      {/* Floating glow orbs for premium effect */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div
        className="fixed bottom-40 right-20 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div className="fixed top-1/2 left-1/3 w-72 h-72 bg-purple-500/2 rounded-full blur-3xl -z-10" />

      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <GettingStarted />
        <Configurations />
        <Footer />
      </div>
    </main>
  )
}
