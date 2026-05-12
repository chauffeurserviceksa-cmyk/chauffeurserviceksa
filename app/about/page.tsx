"use client";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe } from 'lucide-react';

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
              Founded with the vision of elevating the transportation standards in Saudi Arabia, Chauffeur Service KSA has grown into the most trusted name for localized executive travel.
            </p>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#444' }}>
              We pride ourselves on our meticulously maintained fleet and our team of professional chauffeurs who embody the values of hospitality, safety, and absolute discretion.
            </p>
          </div>
          <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '500px' }}>
            <img src="/chauffeur-service-saudi-arabia-hero.webp" alt="Luxury Fleet Service" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{ padding: '8rem 0', background: '#0a0a0a', color: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Our Core Values</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '700px', margin: '0 auto' }}>Building long-term relationships through trust, safety, and luxury.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
            {[
              { icon: <Shield size={40} />, title: 'Uncompromising Safety', desc: 'Rigorous chauffeur background checks and vehicle inspections.' },
              { icon: <Award size={40} />, title: 'Premium Luxury', desc: 'Late-model elite vehicles with high-end executive amenities.' },
              { icon: <Users size={40} />, title: 'Customer First', desc: '24/7 dedicated concierge support for all your travel needs.' },
              { icon: <Globe size={40} />, title: 'Kingdom Wide', desc: 'Seamless coverage across Riyadh, Jeddah, Makkah, and beyond.' }
            ].map((val, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '2rem', background: 'rgba(255,255,255,0.03)', borderRadius: '16px' }}>
                <div style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', display: 'inline-block' }}>{val.icon}</div>
                <h4 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{val.title}</h4>
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
