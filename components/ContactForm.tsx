"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    dropoff: '',
    service: 'Airport Transfer',
    date: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Our representative will contact you soon.');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass" 
      style={{
        padding: '2rem 2.5rem',
        borderRadius: '16px',
        maxWidth: '420px',
        width: '100%',
        boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(17, 17, 17, 0.7)',
        backdropFilter: 'blur(20px)'
      }}
    >
      <h2 style={{ 
        fontFamily: 'var(--font-heading)', 
        color: 'var(--color-gold)', 
        marginBottom: '0.8rem', 
        fontSize: '1.8rem',
        fontWeight: 600
      }}>
        Book Your Chauffeur
      </h2>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>Experience the ultimate private driver experience.</p>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>Name</label>
          <input type="text" name="name" required placeholder="Full Name" onChange={handleChange} style={inputStyle} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>Phone Number</label>
          <input type="tel" name="phone" required placeholder="+966 5..." onChange={handleChange} style={inputStyle} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>Pick-up Location</label>
          <input type="text" name="pickup" required placeholder="City or Airport Terminal" onChange={handleChange} style={inputStyle} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>Drop-off Location</label>
          <input type="text" name="dropoff" required placeholder="Destination" onChange={handleChange} style={inputStyle} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>Service Type</label>
            <select name="service" onChange={handleChange} style={{ ...inputStyle, appearance: 'auto', cursor: 'pointer', paddingRight: '0.5rem' }}>
              <option value="Airport Transfer" style={{ color: 'black' }}>Airport Transfer Services</option>
              <option value="City to City" style={{ color: 'black' }}>Intercity Chauffeur Rides</option>
              <option value="Umrah" style={{ color: 'black' }}>Umrah Travel Routes</option>
              <option value="Corporate" style={{ color: 'black' }}>VIP Corporate Chauffeur Travel</option>
            </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <label style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>Date & Time</label>
          <input type="datetime-local" name="date" required onChange={handleChange} style={inputStyle} />
        </div>

        <button type="submit" className="btn-gold" style={{ 
          marginTop: '1.2rem', 
          width: '100%', 
          fontWeight: 700, 
          padding: '1.25rem',
          fontSize: '1rem',
          borderRadius: '50px',
          textTransform: 'none',
          letterSpacing: '0.5px'
        }}>
          Get Instant Quote
        </button>
      </form>
    </motion.div>
  );
}

const inputStyle = {
  background: 'rgba(255,255,255,0.05)',
  border: '1px solid rgba(255,255,255,0.15)',
  padding: '0.8rem',
  color: 'white',
  borderRadius: '6px',
  outline: 'none',
  fontSize: '0.9rem',
  fontFamily: 'var(--font-poppins)',
  transition: 'border-color 0.3s'
};
