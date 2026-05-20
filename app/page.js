import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <AboutSection />
      <Services />
      <Testimonials />
      <Stats />
    </main>
  );
}