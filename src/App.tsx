import Collection from "@/components/Collection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Story from "@/components/Story";
import { useReveal } from "@/hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-deep">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Collection />
        <Story />
      </main>
      <Footer />
    </div>
  );
}
