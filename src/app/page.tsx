import { Intro } from "@/components/Intro";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Products } from "@/components/Products";
import { Collection } from "@/components/Collection";
import { Manifesto } from "@/components/Manifesto";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Intro />
      <Nav />
      <Hero />
      <Marquee />
      <Products />
      <Marquee invert />
      <Collection />
      <Manifesto />
      <Footer />
    </main>
  );
}
