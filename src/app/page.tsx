import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrollTools from '@/components/scrolltools';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-krudex-black flex flex-col">
      <Navbar />
      <Hero />
      <ScrollTools />
      <Stats />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
