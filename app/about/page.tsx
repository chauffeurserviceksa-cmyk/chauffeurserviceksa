import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Award, Users, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Chauffeur Service KSA',
  description: 'Learn about Chauffeur Service KSA. We are Saudi Arabia\'s trusted provider of luxury private drivers, airport transfers, and intercity chauffeur services.',
  alternates: {
    canonical: 'https://chauffeurserviceksa.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section style={{ 
        height: '50vh', 
        background: '#111', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center' 
      }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'white', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
            About Chauffeur Service KSA
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto' }}>
            The Kingdom's premier choice for executive transportation and luxury private drivers.
          </p>
        </div>
      </section>

      {/* Origin Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <div>
            <span style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Our Legacy</span>
            <h2 style={{ fontSize: '3rem', margin: '1rem 0 2rem', fontFamily: 'var(--font-heading)' }}>Excellence in Every Mile</h2>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
              Chauffeur Service KSA was founded on a simple yet ambitious premise: to provide the most reliable, luxurious, and safe transportation experience in the Kingdom of Saudi Arabia. We understood that for our clients—ranging from global CEOs and diplomats to families on spiritual journeys—transportation is more than just getting from point A to point B; it's about comfort, punctuality, and peace of mind.
            </p>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444', marginBottom: '1.5rem' }}>
              Over the years, we have expanded our fleet and refined our services to cover every corner of the Kingdom. Today, we stand as the premier choice for those who refuse to compromise on quality. Our operations are powered by a team of dedicated professionals who share a common goal: excellence in every mile.
            </p>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444' }}>
              From the bustling business districts of Riyadh and the scenic corniche of Jeddah to the holy pathways of Makkah and Madinah, our chauffeurs are your local experts on the road. We don't just drive; we guide, we assist, and we ensure that your time in the Kingdom is spent efficiently and in total luxury.
            </p>
          </div>
          <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '500px' }}>
            <img src="/chauffeur-service-saudi-arabia-hero.webp" alt="Luxury Fleet Service" width={800} height={500} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '8rem 0', background: '#0a0a0a', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Our Core Values</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto' }}>We build lasting trust through safe, reliable, and premium service.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            {[
              { icon: <Shield size={40} />, title: 'Uncompromising Safety', desc: 'Every driver is background-checked. Every car is inspected before each trip.' },
              { icon: <Award size={40} />, title: 'Premium Luxury', desc: 'We use modern, top-class vehicles with comfort features for every journey.' },
              { icon: <Users size={40} />, title: 'Customer First', desc: 'Our team is available 24/7. We are always here when you need us.' },
              { icon: <Globe size={40} />, title: 'Kingdom Wide', desc: 'We cover Riyadh, Jeddah, Makkah, and many more cities across KSA.' }
            ].map((val, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px' }}>
                <div style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', display: 'inline-block' }}>{val.icon}</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{val.title}</h3>
                <p style={{ opacity: 0.6, lineHeight: '1.6' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
