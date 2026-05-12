"use client";
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="section-dark" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '5rem 0 2rem', background: '#0a0a0a' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '4rem', 
          marginBottom: '4rem' 
        }}>
          <div>
            <h3 style={{ color: 'var(--color-gold)', marginBottom: '1.5rem', fontFamily: 'var(--font-playfair)', fontSize: '1.5rem' }}>CHAUFFEUR SERVICE KSA</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Saudi Arabia's premier luxury chauffeur service. We deliver excellence, safety, and discretion for Executives, VIPs, and discerning travelers.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
               {/* Simulating generic SVG social icons directly here */}
               <a href="#" style={{ color: 'white', opacity: 0.7 }} onMouseOver={e=>e.currentTarget.style.color='var(--color-gold)'} onMouseOut={e=>{e.currentTarget.style.color='white'; e.currentTarget.style.opacity='0.7'}}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.19-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </a>
               <a href="#" style={{ color: 'white', opacity: 0.7 }} onMouseOver={e=>e.currentTarget.style.color='var(--color-gold)'} onMouseOut={e=>{e.currentTarget.style.color='white'; e.currentTarget.style.opacity='0.7'}}>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
               </a>
            </div>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem', color: 'white', fontSize: '1.2rem' }}>Quick Links</h4>
            <ul className="footer-links" style={{ color: 'rgba(255,255,255,0.6)', display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#services">Services</Link></li>
              <li><Link href="/#fleet">Fleet</Link></li>
              <li><Link href="/routes">All Routes</Link></li>
              <li><Link href="/blogs">Travel Blogs</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem', color: 'white', fontSize: '1.2rem' }}>Locations</h4>
            <ul className="footer-links" style={{ color: 'rgba(255,255,255,0.6)', display: 'flex', flexDirection: 'column', gap: '1rem', listStyle: 'none', padding: 0 }}>
              <li><Link href="/cities/riyadh">Riyadh Chauffeur</Link></li>
              <li><Link href="/cities/jeddah">Jeddah Chauffeur</Link></li>
              <li><Link href="/cities/makkah">Makkah Chauffeur</Link></li>
              <li><Link href="/cities/madinah">Madinah Chauffeur</Link></li>
              <li><Link href="/cities/dammam">Dammam Chauffeur</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem', color: 'white', fontSize: '1.2rem' }}>Contact Info</h4>
            <ul style={{ color: 'rgba(255,255,255,0.6)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                +966 50 123 4567
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                bookings@chauffeurservice.sa
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2" style={{ marginTop: '0.2rem' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                King Fahd Road, Olaya District<br />Riyadh, Saudi Arabia
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{ 
          textAlign: 'center', 
          borderTop: '1px solid rgba(255,255,255,0.05)', 
          paddingTop: '2rem', 
          color: 'rgba(255,255,255,0.4)', 
          fontSize: '0.9rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>&copy; 2026 Chauffeur Service KSA. All Rights Reserved.</div>
          <div className="footer-bottom-links" style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
