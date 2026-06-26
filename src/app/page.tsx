import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import SelectedWork from '@/components/SelectedWork';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-krudex-black selection:bg-krudex-green selection:text-krudex-black flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <SelectedWork />
      <CTA />
      
      <footer className="w-full border-t border-krudex-border py-8 px-8 md:px-16 lg:px-24 flex items-center justify-between text-sm text-krudex-muted">
        <p>&copy; {new Date().getFullYear()} Krudex Technologies PVT. LTD.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </footer>
    </main>
  );
}
