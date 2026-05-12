"use client";
import React from 'react';
import Link from 'next/link';
import { routeCategories, slugify } from '@/lib/routesData';
import { motion } from 'framer-motion';

export default function RoutesSection() {
  return (
    <section id="routes" className="section-dark" style={{ padding: '8rem 0', background: '#111' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Comprehensive Coverage</span>
          <h2 style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: '3.5rem', color: 'var(--color-white)', fontFamily: 'var(--font-heading)' }}>
            Popular Chauffeur Routes <br /> <span style={{ color: 'var(--color-gold)' }}>Across Saudi Arabia</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '850px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.8' }}>
            Explore our extensive list of intercity, pilgrim, and international routes. Book a private chauffeur for seamless, comfortable travel anywhere in the region.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {routeCategories.map((category, catIdx) => (
             <div key={catIdx}>
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                   <h3 style={{ fontSize: '2.2rem', color: 'var(--color-white)', marginBottom: '0.5rem' }}>{category.name}</h3>
                   <p style={{ color: 'var(--color-gold)', fontSize: '1rem' }}>{category.description}</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                  {category.data.map((region, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        padding: '2.5rem',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)'
                      }}
                    >
                      <h4 style={{ color: 'var(--color-gold)', fontSize: '1.4rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.8rem', fontFamily: 'var(--font-playfair)' }}>
                        {region.region}
                      </h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {region.routes.map((route, rIdx) => (
                          <li key={rIdx}>
                            <Link 
                              href={`/routes/${slugify(route)}`} 
                              style={{ 
                                color: 'rgba(255,255,255,0.75)', 
                                textDecoration: 'none',
                                transition: 'color 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                              }}
                              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-gold)'}
                              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}
                            >
                              <span style={{ fontSize: '1.05rem' }}>{route}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
