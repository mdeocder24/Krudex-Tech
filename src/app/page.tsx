import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrollTools from '@/components/scrolltools';
import ClickUpContextStats from '@/components/ClickUpContextStats';
import ReplaceThemAll from '@/components/ReplaceThemAll';
import ClickUpSuperAgent from '@/components/ClickUpSuperAgent';
import ClickUpWidgetGrid from '@/components/ClickUpWidgetGrid';
import ClickUpSolutionsTabs from '@/components/ClickUpSolutionsTabs';
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
      <ClickUpContextStats />
      <ReplaceThemAll />
      <ClickUpSuperAgent />
      <ClickUpWidgetGrid />
      <ClickUpSolutionsTabs />
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
