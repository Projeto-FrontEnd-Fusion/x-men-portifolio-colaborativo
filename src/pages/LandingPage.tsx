import { GamifiedExperience } from "../components/gamifiedExperience/gamifiedExperience";
import { Footer } from "../components/footer/Footer";
import Hero from "../components/hero/hero";
import { NextLevel } from "../components/nextLevel/nextLevel";

export default function App() {
  return (
    <main>
      <Hero />
      <NextLevel />
      <GamifiedExperience />
      <Footer />
    </main>
  );
}
