"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "How much does a chauffeur service cost in Saudi Arabia?", a: "Chauffeur service costs in Saudi Arabia vary by vehicle type and distance. We offer transparent pricing for airport transfers, intercity rides, and hourly hire with no hidden fees." },
  { q: "Do you offer airport transfers in Riyadh and Jeddah?", a: "Yes, we provide airport transfers at King Khalid International (RUH) in Riyadh and King Abdulaziz International (JED) in Jeddah, including meet-and-greet services." },
  { q: "Can I book a private driver for Umrah travel?", a: "Absolutely. We specialize in private driver services for Umrah pilgrims, providing seamless transfers between Jeddah Airport, Makkah, and Madinah with total comfort." },
  { q: "Do you provide intercity chauffeur rides between Saudi cities?", a: "Yes, we offer comfortable intercity chauffeur rides between all major Saudi cities including Riyadh, Jeddah, Dammam, Makkah, and Madinah using our vehicle fleet." },
  { q: "Are your chauffeurs licensed in Saudi Arabia?", a: "Yes, all our chauffeurs are highly trained, professionally licensed, and background-checked according to Saudi Arabian transportation standards for your absolute safety." },
  { q: "Which vehicles are available in your fleet?", a: "Our collection includes the Mercedes S-Class, BMW 7 Series, GMC Yukon XL, and Cadillac Escalade, all meticulously maintained for business and leisure travel." }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-white" style={{ padding: '6rem 0', background: '#fff' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Information</span>
          <h2 style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: '3rem', color: 'var(--color-black)' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              style={{ 
                border: '1px solid rgba(0,0,0,0.1)', 
                borderRadius: '8px', 
                overflow: 'hidden',
                background: openIndex === i ? 'rgba(201,162,39,0.03)' : 'white'
              }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ 
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '1.5rem', 
                  textAlign: 'left',
                  color: 'var(--color-black)'
                }}
              >
                <span style={{ fontSize: '1.1rem', fontWeight: 600, color: openIndex === i ? 'var(--color-gold)' : 'inherit' }}>{faq.q}</span>
                <ChevronDown size={20} style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: '#666', lineHeight: '1.7' }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
