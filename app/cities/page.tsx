import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CitiesSection from '@/components/CitiesSection';
import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Cities We Serve | Chauffeur Service KSA',
  description: 'Professional private driver and chauffeur services across all major cities in Saudi Arabia including Riyadh, Jeddah, Makkah, Madinah, and Dammam.',
  alternates: {
    canonical: 'https://chauffeurserviceksa.com/cities',
  },
};

export default function CitiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Chauffeur Service KSA Network",
    "description": "Professional chauffeur and private driver services across Saudi Arabia, including Riyadh, Jeddah, Makkah, Madinah, and Dammam.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Chauffeur KSA",
      "url": "https://chauffeurserviceksa.com"
    },
    "areaServed": [
      { "@type": "City", "name": "Riyadh" },
      { "@type": "City", "name": "Jeddah" },
      { "@type": "City", "name": "Makkah" },
      { "@type": "City", "name": "Madinah" },
      { "@type": "City", "name": "Dammam" }
    ]
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Script
        id="structured-data-cities-hub"
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
            Our Kingdom-Wide Presence
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontFamily: 'var(--font-heading)', marginTop: '1rem', marginBottom: '1rem' }}>
            Cities We Serve
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
            Experience consistent, high-standard private driver services throughout the Kingdom's key business and pilgrimage centers.
          </p>
        </div>
      </section>

      {/* Cities Grid Section */}
      <CitiesSection />

      {/* Contact Form Section */}
      <section style={{ padding: '8rem 0', backgroundColor: '#111', color: 'white' }} id="booking">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                Seamless Reservations
              </span>
              <h2 style={{ fontSize: '2.8rem', marginTop: '0.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                Reliable Transfers Across the Kingdom
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.15rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Whether you need a Mercedes S-Class for executive travel in Riyadh or a spacious GMC Yukon XL for airport transfers in Jeddah or Umrah transfers in Makkah, our local experts are at your disposal.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                  <span style={{ color: 'var(--color-gold)' }}>✔</span> 24/7 Availability in all major hubs
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                  <span style={{ color: 'var(--color-gold)' }}>✔</span> Professional multi-lingual chauffeurs
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                  <span style={{ color: 'var(--color-gold)' }}>✔</span> Live flight tracking & meet & greet services
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
