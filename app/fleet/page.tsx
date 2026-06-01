import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FleetSection from '@/components/FleetSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fleet | Chauffeur Service KSA',
  description: 'Explore our premium fleet of luxury vehicles, curated for comfort, safety, and style across Saudi Arabia.',
  alternates: {
    canonical: 'https://chauffeurserviceksa.com/fleet',
  },
};

export default function FleetPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      {/* Hero Section */}
      <section
        style={{
          height: '60vh',
          background: 'linear-gradient(135deg, #1a1a1a, #111)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
            Our Luxury Fleet
          </h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>
            Sophisticated, safe, and ready for every journey across the Kingdom.
          </p>
        </div>
      </section>

      {/* Fleet Showcase */}
      <FleetSection />

      <Footer />
    </main>
  );
}
