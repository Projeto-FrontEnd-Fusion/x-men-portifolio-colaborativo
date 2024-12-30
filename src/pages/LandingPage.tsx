import { Footer } from '../components/Footer';
import { LevelUpSection } from '../components/LevelUpSection';

export default function LandingPage() {
  return (
    <main id='main'>
      <h1 className="text-3xl font-bold underline text-white">
        Portfólio Colaborativo
      </h1>

      <LevelUpSection />
      <Footer />
    </main>
  );
};
