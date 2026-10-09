import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrollTools from '@/components/scrolltools';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import SelectedWork from '@/components/SelectedWork';
import Process from '@/components/Process';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollAstronaut from '@/components/ScrollAstronaut';

export default function Home() {
  return (
    <main className="min-h-screen bg-krudex-black flex flex-col">
      <Navbar />
      <Hero />
      <ScrollTools />
      <Stats />
      <Services />
      <SelectedWork featured />
      <Process />
      <CTA />
      <Footer />
      <ScrollAstronaut />
    </main>
  );
}
