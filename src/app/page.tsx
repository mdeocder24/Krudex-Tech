import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent selection:bg-krudex-blue selection:text-krudex-black flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
