"use client";
import { 
  Plane, 
  User, 
  Briefcase, 
  MapPin, 
  Calendar, 
  Clock 
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { 
    title: 'Luxury Airport Transfer Service', 
    icon: <Plane size={48} strokeWidth={1.5} />, 
    description: 'Expert luxury airport transfer service from all major Saudi terminals. Professional meet-and-greet with flight tracking for VIP guests.',
    cta: 'Book Airport Transfer'
  },
  { 
    title: 'Private Chauffeur Drivers', 
    icon: <User size={48} strokeWidth={1.5} />, 
    description: 'Highly trained private chauffeur drivers for daily commuting, city travel, and reliable transportation across Riyadh and Jeddah.',
    cta: 'Hire Private Driver'
  },
  { 
    title: 'VIP Corporate Chauffeur Service', 
    icon: <Briefcase size={48} strokeWidth={1.5} />, 
    description: 'Elite VIP corporate chauffeur service for executives, business delegations, and diplomatic missions in Saudi Arabia.',
    cta: 'Reserve Corporate Car'
  },
  { 
    title: 'Intercity Chauffeur Rides', 
    icon: <MapPin size={48} strokeWidth={1.5} />, 
    description: 'Premium long-distance intercity chauffeur rides between major cities like Riyadh, Jeddah, Makkah, and Madinah.',
    cta: 'Book Intercity Ride'
  },
  { 
    title: 'Luxury Event Transportation', 
    icon: <Calendar size={48} strokeWidth={1.5} />, 
    description: 'Coordinated luxury event transportation for weddings, corporate summits, and high-profile diplomatic gatherings across the Kingdom.',
    cta: 'Request Event Fleet'
  },
  { 
    title: 'Hourly Chauffeur Hire', 
    icon: <Clock size={48} strokeWidth={1.5} />, 
    description: 'Flexible hourly chauffeur hire for personalized shopping tours, VIP city sightseeing, and executive task-based errands.',
    cta: 'Book Hourly Service'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-white" style={{ background: '#fdfdfd', color: '#111', padding: '8rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>Our Expertise</span>
          <h2 style={{ marginTop: '0.5rem', marginBottom: '1.5rem', fontSize: '3rem', color: 'var(--color-black)', fontFamily: 'var(--font-heading)' }}>
            Premium Chauffeur Solutions
          </h2>
          <p style={{ color: '#555', maxWidth: '650px', margin: '0 auto', fontSize: '1.15rem', lineHeight: '1.8' }}>
            Experience professional ground transportation across Saudi Arabia, tailored for corporate travel, airport transfers, and spiritual pilgrimages.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{ 
                background: 'white', 
                padding: '3.5rem 2.5rem', 
                borderRadius: '16px', 
                textAlign: 'left', 
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ 
                color: 'var(--color-gold)', 
                marginBottom: '2rem', 
                display: 'inline-flex',
                background: 'rgba(201,162,39,0.1)',
                padding: '1.2rem',
                borderRadius: '12px',
                width: 'fit-content'
              }}>
                {service.icon}
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.6rem', color: 'var(--color-black)', fontFamily: 'var(--font-heading)' }}>{service.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '2rem' }}>{service.description}</p>
              
              <div style={{ marginTop: 'auto' }}>
                <a href="#contact" style={{ 
                  color: 'var(--color-gold)', 
                  fontWeight: 700, 
                  textDecoration: 'none', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  fontSize: '0.95rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  {service.cta} <span style={{ fontSize: '1.2rem' }}>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
