import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import ServicesSection from '../components/ServicesSection';
import FeaturesSection from '../components/FeaturesSection';
import FleetSection from '../components/FleetSection';
import CitiesSection from '../components/CitiesSection';
import RoutesSection from '../components/RoutesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';
import { FloatingWhatsApp, SocialSidebar } from '../components/FloatingButtons';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Header />
      
      <Hero />
      <TrustSection />
      
      {/* About Company Snippet */}
      <section id="about" style={{ padding: '8rem 0', background: '#111', color: 'white', textAlign: 'center' }}>
         <div className="container" style={{ maxWidth: '800px' }}>
            <span style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Welcome to Chauffeur KSA</span>
            <h2 style={{ fontSize: '3rem', margin: '1rem 0 2rem' }}>Defining Luxury Travel in Saudi Arabia</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.2rem', lineHeight: '1.9' }}>
              Founded with the vision to redefine premium ground transportation, Chauffeur KSA provides unparalleled service for diplomats, executives, and discerning travelers. We guarantee absolute discretion, punctuality, and an impeccably maintained fleet.
            </p>
         </div>
      </section>

      <ServicesSection />
      <FeaturesSection />
      <FleetSection />
      <CtaSection />
      <CitiesSection />
      <RoutesSection />
      <TestimonialsSection />
      <FaqSection />
      
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
