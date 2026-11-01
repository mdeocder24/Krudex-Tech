import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrollTools from '@/components/scrolltools';
import ReplaceThemAll from '@/components/ReplaceThemAll';
import Pillars from '@/components/Pillars';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Process from '@/components/Process';
import TrainingHighlight from '@/components/TrainingHighlight';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent flex flex-col relative">
      <Navbar />
      <Hero />
      <ScrollTools />
      <ReplaceThemAll />
      <Pillars />
      <Stats />
      <Services />
      <Process />
      <TrainingHighlight />
      <CTA />
      <Footer />
    </main>
  );
}
