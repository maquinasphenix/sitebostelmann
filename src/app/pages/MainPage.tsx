import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Features } from '../components/Features';
import { SeoTopics } from '../components/SeoTopics';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { InstagramFeed } from '../components/InstagramFeed';
import { Faq } from '../components/Faq';
import { Location } from '../components/Location';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { WhatsAppButton } from '../components/WhatsAppButton';

interface MainPageProps {
  onNavigateToEvents: () => void;
}

export function MainPage({ onNavigateToEvents }: MainPageProps) {
  return (
    <div className="min-h-screen">
      <Header onNavigateToEvents={onNavigateToEvents} />
      <main>
        <Hero />
        <About />
        <Features />
        <SeoTopics />
        <Gallery />
        <Testimonials />
        <Faq />
        <InstagramFeed />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
