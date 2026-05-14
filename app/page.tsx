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
import Script from 'next/script';

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Chauffeur KSA",
      "url": "https://chauffeurserviceksa.com",
      "logo": "https://chauffeurserviceksa.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966501234567",
        "contactType": "customer service",
        "email": "info@chauffeurserviceksa.com"
      },
      "sameAs": [
        "https://facebook.com/chauffeurksa",
        "https://twitter.com/chauffeurksa",
        "https://instagram.com/chauffeurksa"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Olaya St",
        "addressLocality": "Riyadh",
        "addressRegion": "Riyadh",
        "postalCode": "12211",
        "addressCountry": "SA"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Chauffeur KSA",
      "image": "https://chauffeurserviceksa.com/hero-bg.jpg",
      "@id": "https://chauffeurserviceksa.com",
      "url": "https://chauffeurserviceksa.com",
      "telephone": "+966501234567",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Olaya St",
        "addressLocality": "Riyadh",
        "addressRegion": "Riyadh",
        "postalCode": "12211",
        "addressCountry": "SA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 24.7136,
        "longitude": 46.6753
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "serviceArea": {
        "@type": "Country",
        "name": "SA"
      },
      "areaServed": ["Riyadh", "Jeddah", "Makkah", "Madinah", "Dammam", "Saudi Arabia"],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966501234567",
        "contactType": "WhatsApp",
        "availableLanguage": ["English", "Arabic"]
      }
    }
  ];

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      <Script
        id="structured-data-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
