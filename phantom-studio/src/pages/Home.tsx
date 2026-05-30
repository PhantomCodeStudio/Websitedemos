import Hero from '../sections/home/Hero';
import FeaturedWork from '../sections/home/FeaturedWork';
import StudioStatement from '../sections/home/StudioStatement';
import Capabilities from '../sections/home/Capabilities';
import Marquee from '../components/Marquee';
import JournalTeaser from '../sections/home/JournalTeaser';
import HomeCTA from '../sections/home/HomeCTA';

const marqueeItems = [
  'Brand Identity', 'Creative Direction', 'Digital Experience',
  'Art Direction', 'Campaign Design', 'Packaging', 'Motion',
  'Strategy', 'Brand Systems', 'Typography',
];

export default function Home() {
  return (
    <main id="main-content" aria-label="Home">
      <Hero />
      <FeaturedWork />
      <StudioStatement />
      <Marquee items={marqueeItems} speed={50} />
      <Capabilities />
      <Marquee items={marqueeItems} speed={35} inverted />
      <JournalTeaser />
      <HomeCTA />
    </main>
  );
}
