import Hero from '@/components/home/Hero';
import Expertise from '@/components/home/Expertise';
import TechHighlight from '@/components/home/TechHighlight';
import CallToAction from '@/components/home/CallToAction';

export default function Home() {
  return (
    <main>
      <Hero />
      <Expertise />
      <TechHighlight />
      <CallToAction />
    </main>
  );
}