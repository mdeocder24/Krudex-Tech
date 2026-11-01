import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrollTools from '@/components/scrolltools';
import AppleScrollScrubText from '@/components/AppleScrollScrubText';
import ClickUpContextStats from '@/components/ClickUpContextStats';
import AppleStickyStack from '@/components/AppleStickyStack';
import ReplaceThemAll from '@/components/ReplaceThemAll';
import ClickUpWidgetGrid from '@/components/ClickUpWidgetGrid';
import ClickUpSolutionsTabs from '@/components/ClickUpSolutionsTabs';
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
      <AppleScrollScrubText />
      <ClickUpContextStats />
      <AppleStickyStack />
      <ReplaceThemAll />
      <ClickUpWidgetGrid />
      <ClickUpSolutionsTabs />
      <Stats />
      <Services />
      <Process />
      <TrainingHighlight />
      <CTA />
      <Footer />
    </main>
  );
}
