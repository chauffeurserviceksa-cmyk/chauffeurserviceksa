"use client";
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section style={{ 
        height: '40vh', 
        background: '#111', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center' 
      }}>
        <div className="container">
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'white', fontFamily: 'var(--font-heading)', marginBottom: '1rem' }}>
            Contact Us
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.7)', maxWidth: '800px', margin: '0 auto' }}>
            24/7 Premium Concierge Support for Your Chauffeur Bookings.
          </p>
        </div>
      </section>

      {/* Main Info Section */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem' }}>
          <div>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', fontFamily: 'var(--font-heading)' }}>Get in Touch</h2>
             <p style={{ fontSize: '1.15rem', color: '#666', lineHeight: '1.8', marginBottom: '3rem' }}>
               Our team is available round the clock to assist you with airport pickups, intercity bookings, and specialized corporate travel requests.
             </p>
             
             <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <li style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                   <div style={{ padding: '0.8rem', background: '#f8f8f8', borderRadius: '12px', color: 'var(--color-gold)' }}><Phone size={24} /></div>
                   <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>Booking & Support</h4>
                      <p style={{ color: '#666' }}>+966 50 123 4567</p>
                   </div>
                </li>
                <li style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                   <div style={{ padding: '0.8rem', background: '#f8f8f8', borderRadius: '12px', color: 'var(--color-gold)' }}><Mail size={24} /></div>
                   <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>Email Inquiries</h4>
                      <p style={{ color: '#666' }}>bookings@chauffeurservice.sa</p>
                   </div>
                </li>
                <li style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                   <div style={{ padding: '0.8rem', background: '#f8f8f8', borderRadius: '12px', color: 'var(--color-gold)' }}><MapPin size={24} /></div>
                   <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>Corporate Office</h4>
                      <p style={{ color: '#666' }}>King Fahd Road, Olaya District, Riyadh, Saudi Arabia</p>
                   </div>
                </li>
                <li style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                   <div style={{ padding: '0.8rem', background: '#f8f8f8', borderRadius: '12px', color: '#25D366' }}><MessageCircle size={24} /></div>
                   <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>WhatsApp Concierge</h4>
                      <p style={{ color: '#666' }}>Text us for instant availability checks 24/7.</p>
                   </div>
                </li>
             </ul>
          </div>
          
          <div style={{ background: '#111', padding: '4rem', borderRadius: '24px', color: 'white', alignSelf: 'start' }}>
             <h3 style={{ fontSize: '1.8rem', marginBottom: '2.5rem', color: 'var(--color-gold)', textAlign: 'center' }}>Secure Online Booking</h3>
             <ContactForm />
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ height: '400px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#999', fontSize: '1.2rem', fontWeight: 600 }}>[Interactive Riyadh Map Integration]</p>
      </section>

      <Footer />
    </main>
  );
}
