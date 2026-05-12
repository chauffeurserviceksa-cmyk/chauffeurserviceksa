"use client";
import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "Aramco", "SABIC", "STC", "Neom", "Public Investment Fund", "Riyadh Air"
];

export default function TrustSection() {
  return (
    <section className="section-dark" style={{ 
      padding: '6rem 0',
      background: 'linear-gradient(to bottom, var(--color-black), #1a1a1a, var(--color-black))',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div className="container">
        <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Trusted by <span style={{ color: 'var(--color-gold)' }}>Executives & Corporations</span> Across Saudi Arabia
        </p>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          flexWrap: 'wrap', 
          gap: '2rem', 
        }}>
          {logos.map((logo, i) => (
             <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               key={i}
               style={{ 
                 color: 'rgba(255,255,255,0.6)', 
                 fontSize: '1.5rem', 
                 fontFamily: 'var(--font-playfair)',
                 fontWeight: 600,
                 filter: 'grayscale(100%)',
                 transition: 'all 0.3s ease',
                 cursor: 'default'
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.color = 'var(--color-gold)';
                 e.currentTarget.style.filter = 'none';
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                 e.currentTarget.style.filter = 'grayscale(100%)';
               }}
             >
               {logo}
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
