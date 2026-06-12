import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSection from '@/components/ServicesSection';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Our Services | Professional Chauffeur & Driver KSA',
  description: 'Explore our professional chauffeur services in Saudi Arabia. Including airport transfers, private drivers, corporate transit, and intercity rides.',
  alternates: {
    canonical: 'https://chauffeurserviceksa.com/services',
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Chauffeur Services Saudi Arabia",
    "description": "Professional private driver, airport transfer, corporate chauffeur, and intercity transport services across the Kingdom of Saudi Arabia.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Chauffeur KSA",
      "url": "https://chauffeurserviceksa.com"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Chauffeur Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Transfer Service",
            "description": "Professional airport meet and greet transfers with flight tracking."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Private Chauffeur Hire",
            "description": "Dedicated private drivers for daily commute and personal tours."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Transport",
            "description": "Executive transportation for business delegations and diplomats."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Intercity Chauffeur Rides",
            "description": "Reliable long-distance rides between major cities in KSA."
          }
        }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Script
        id="structured-data-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section
        style={{
          height: '60vh',
          background: 'linear-gradient(135deg, #161616, #0d0d0d)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(circle at center, rgba(201, 162, 39, 0.1) 0%, transparent 70%)',
          zIndex: 1
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.95rem' }}>
            Tailored Professional Mobility
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontFamily: 'var(--font-heading)', marginTop: '1rem', marginBottom: '1rem' }}>
            Our Services
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
            From airport pickups to comprehensive corporate travel and long-distance intercity rides, experience unparalleled comfort and reliability.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <ServicesSection />

      {/* Booking Form Section */}
      <section style={{ padding: '8rem 0', backgroundColor: '#111', color: 'white' }} id="booking">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                Book Your Ride
              </span>
              <h2 style={{ fontSize: '2.8rem', marginTop: '0.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                Experience Professional Transportation Today
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Fill out the booking form or contact us directly via WhatsApp for instant arrangements. Our dispatch team is online 24/7 to cater to your specifications.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                  <span style={{ color: 'var(--color-gold)' }}>✔</span> Clean, deep-sanitized modern fleet
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                  <span style={{ color: 'var(--color-gold)' }}>✔</span> Real-time vehicle tracking & telemetry
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                  <span style={{ color: 'var(--color-gold)' }}>✔</span> Fixed rates without hidden surcharges
                </li>
              </ul>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
