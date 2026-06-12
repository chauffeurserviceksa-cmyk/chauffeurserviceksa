import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Award, Users, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Chauffeur Service KSA',
  description: 'Learn about Chauffeur Service KSA. We are Saudi Arabia\'s trusted provider of professional private drivers, airport transfers, and intercity chauffeur services.',
  alternates: {
    canonical: 'https://chauffeurserviceksa.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="section-dark" style={{ 
        minHeight: '60vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background gradient effect */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(201, 162, 39, 0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="text-gradient" style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            About Chauffeur Service KSA
          </h1>
          <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', fontWeight: 300 }}>
            The Kingdom's trusted choice for executive transportation and professional private drivers.
          </p>
        </div>
      </section>

      {/* Origin Section */}
      <article className="section-padding section-white">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'center' }}>
          <div>
            <span style={{ color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Our Legacy</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', margin: '1rem 0 2.5rem', lineHeight: 1.2 }}>Excellence in Every Mile</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
              <p>
                Chauffeur Service KSA was founded on a simple yet ambitious premise: to provide the most reliable, comfortable, and safe transportation experience in the Kingdom of Saudi Arabia. We understood that for our clients—ranging from global CEOs and diplomats to families on spiritual journeys—transportation is more than just getting from point A to point B; it's about comfort, punctuality, and peace of mind.
              </p>
              <p>
                Over the years, we have expanded our fleet and refined our services to cover every corner of the Kingdom. Today, we stand as the trusted choice for those who refuse to compromise on quality. Our operations are powered by a team of dedicated professionals who share a common goal: excellence in every mile.
              </p>
              <p>
                From the bustling business districts of Riyadh and the scenic corniche of Jeddah to the holy pathways of Makkah and Madinah, our chauffeurs are your local experts on the road. We don't just drive; we guide, we assist, and we ensure that your time in the Kingdom is spent efficiently and in total comfort.
              </p>
            </div>
          </div>
          <div className="img-hover-parent lift-on-hover" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '600px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <img src="/chauffeur-service-saudi-arabia-hero.webp" alt="Fleet Service" className="img-hover-scale" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </article>

      {/* Values Section */}
      <section className="section-padding section-dark">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.2 }}>Our Core Values</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}>We build lasting trust through safe, reliable, and high-quality service.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {[
              { icon: <Shield size={36} />, title: 'Uncompromising Safety', desc: 'Every driver is background-checked. Every car is inspected before each trip.' },
              { icon: <Award size={36} />, title: 'Comfortable Fleets', desc: 'We use modern, top-class vehicles with comfort features for every journey.' },
              { icon: <Users size={36} />, title: 'Customer First', desc: 'Our team is available 24/7. We are always here when you need us.' },
              { icon: <Globe size={36} />, title: 'Kingdom Wide', desc: 'We cover Riyadh, Jeddah, Makkah, and many more cities across KSA.' }
            ].map((val, i) => (
              <div key={i} className="glass lift-on-hover" style={{ textAlign: 'center', padding: '3rem 2rem', borderRadius: '24px' }}>
                <div style={{ color: 'var(--accent-primary)', marginBottom: '1.5rem', display: 'inline-block', padding: '1rem', background: 'rgba(201, 162, 39, 0.1)', borderRadius: '50%' }}>{val.icon}</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', letterSpacing: '0.02em' }}>{val.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.95rem' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
