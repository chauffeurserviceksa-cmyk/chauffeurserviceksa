"use client";
import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FloatingWhatsApp, SocialSidebar } from '@/components/FloatingButtons';
import { blogPosts, slugifyBlog } from '@/lib/blogData';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Calendar, ChevronRight, LayoutGrid, Search } from 'lucide-react';
import Image from 'next/image';

const CATEGORIES = [
  "All", 
  "City Travel Guides", 
  "Pilgrimage Travel Guides", 
  "Intercity Route Guides", 
  "VIP Airport Transfers", 
  "Professional Driver Services", 
  "Chauffeur Service Benefits"
];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  // SEO Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Luxury Chauffeur Service Saudi Arabia Blog",
    "description": "Expert luxury travel guides, private driver tips, and VIP airport transfer insights for Saudi Arabia.",
    "publisher": {
      "@type": "Organization",
      "name": "Chauffeur KSA"
    },
    "blogPosts": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Chauffeur KSA Travel Team"
      },
      "image": post.image,
      "description": post.excerpt
    }))
  };

  // Featured are first 3 by default
  const featuredPosts = useMemo(() => blogPosts.slice(0, 3), []);
  const featuredTitles = useMemo(() => featuredPosts.map(p => p.title), [featuredPosts]);
  
  // Calculate category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    blogPosts.forEach(post => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filteredPosts = useMemo(() => {
    // 1. Exclude featured from the grid
    let filtered = blogPosts.filter(post => !featuredTitles.includes(post.title));
    
    // 2. Filter by Category
    if (activeCategory !== "All") {
      filtered = filtered.filter(post => post.category === activeCategory);
    }

    // 3. Filter by Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [activeCategory, searchQuery, featuredTitles]);

  const displayedPosts = filteredPosts.slice(0, visibleCount);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-black)', color: 'white' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <SocialSidebar />
      <FloatingWhatsApp />
      
      {/* Hero Section */}
      <section style={{ paddingTop: '160px', paddingBottom: '3rem', background: 'linear-gradient(to bottom, #0a0a0a, var(--color-black))' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{ color: 'var(--color-gold)', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.85rem', display: 'block', marginBottom: '1rem' }}
            >
              The Insider Journal
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', color: 'white', fontFamily: 'var(--font-playfair)', lineHeight: '1.2', marginBottom: '1.5rem' }}
            >
              Luxury Chauffeur Service Saudi Arabia & <br /> <span style={{ color: 'var(--color-gold)' }}>Expert Travel Guides</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.15rem', maxWidth: '900px', margin: '0 auto', lineHeight: '1.9' }}
            >
              Welcome to the official Chauffeur KSA blog. Our experts provide the ultimate <strong>luxury travel guides</strong> and <strong>private driver Saudi Arabia</strong> insights for corporate executives and spiritual pilgrims. Whether you are seeking seamless <strong>VIP airport transfers</strong> in Riyadh and Jeddah or dedicated <strong>Umrah chauffeur services</strong> in Makkah, discover how professional ground transportation elevates your journey across the Kingdom.
            </motion.p>
          </div>

          {/* Featured Section - Reduced Height */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '5rem' }}>
            {featuredPosts.map((post, idx) => (
              <Link 
                key={idx} 
                href={`/blogs/${slugifyBlog(post.title)}`}
                style={{ textDecoration: 'none', position: 'relative', overflow: 'hidden', borderRadius: '20px', height: '380px', display: 'flex', alignItems: 'flex-end', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <div className="img-hover-parent" style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                  <Image src={post.image} alt={post.alt} width={800} height={450} style={{ width: '100%', height: '100%', objectFit: 'cover' }} className="img-hover-scale" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)' }} />
                </div>
                <div style={{ position: 'relative', zIndex: 2, padding: '2rem', width: '100%' }}>
                  <span style={{ color: 'var(--color-gold)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.8rem', display: 'block' }}>Highlighted Article</span>
                  <h2 style={{ color: 'white', fontSize: '1.5rem', fontFamily: 'var(--font-playfair)', marginBottom: '1rem', lineHeight: '1.3' }}>{post.title}</h2>
                  <div style={{ display: 'flex', gap: '1rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Category Filter */}
      <section style={{ paddingBottom: '8rem' }}>
        <div className="container">
          
          {/* Search Bar */}
          <div style={{ maxWidth: '600px', margin: '0 auto 4rem', position: 'relative' }}>
            <div style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.3)' }}>
              <Search size={20} />
            </div>
            <input 
              type="text" 
              placeholder="Search travel tips, city guides, or VIP transport services..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(9); }}
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '1.2rem 1.5rem 1.2rem 3.5rem',
                borderRadius: '50px',
                color: 'white',
                fontSize: '1.1rem',
                outline: 'none',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
              onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          {/* Filter Bar */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => { setActiveCategory(cat); setVisibleCount(9); }}
                style={{ 
                  background: activeCategory === cat ? 'var(--color-gold)' : 'rgba(255,255,255,0.03)', 
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--color-gold)' : 'rgba(255,255,255,0.1)',
                  color: activeCategory === cat ? '#111' : 'rgba(255,255,255,0.7)', 
                  fontSize: '0.85rem', 
                  fontWeight: 600, 
                  cursor: 'pointer',
                  padding: '0.6rem 1.5rem',
                  borderRadius: '30px',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem'
                }}
              >
                {cat} 
                <span style={{ 
                  opacity: 0.6, 
                  fontSize: '0.75rem', 
                  background: activeCategory === cat ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.05)',
                  padding: '0.1rem 0.6rem',
                  borderRadius: '10px'
                }}>
                  {cat === "All" ? blogPosts.length : (categoryCounts[cat] || 0)}
                </span>
              </button>
            ))}
          </div>

          {/* Main Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '3rem 2.5rem' }}>
            <AnimatePresence mode="popLayout">
              {displayedPosts.length > 0 ? displayedPosts.map((post, idx) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: (idx % 9) * 0.05 }}
                  layout
                >
                  <Link 
                    href={`/blogs/${slugifyBlog(post.title)}`}
                    style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', height: '100%' }}
                  >
                    <div className="img-hover-parent" style={{ aspectRatio: '16/9', borderRadius: '16px', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
                      <Image 
                        src={post.image} 
                        alt={post.alt} 
                        width={800}
                        height={450}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        className="img-hover-scale"
                      />
                      <div style={{ position: 'absolute', top: '1rem', right: '1rem', padding: '0.4rem 0.8rem', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(10px)', borderRadius: '4px', fontSize: '0.65rem', color: 'var(--color-gold)', fontWeight: 700, border: '1px solid rgba(201,162,39,0.3)' }}>
                        {post.category.toUpperCase()}
                      </div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', gap: '1rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginBottom: '0.8rem' }}>
                         <span>{post.date}</span>
                         <span>•</span>
                         <span>{post.readTime}</span>
                      </div>
                      <h2 style={{ color: 'white', fontSize: '1.4rem', fontFamily: 'var(--font-playfair)', marginBottom: '0.8rem', lineHeight: '1.3' }}>{post.title}</h2>
                      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>{post.excerpt}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', marginBottom: '1.5rem' }}>
                        Expert Insights by {post.author}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', color: 'var(--color-gold)', fontSize: '0.9rem', fontWeight: 600, gap: '0.3rem' }}>
                      Read Expert Article <ChevronRight size={16} />
                    </div>
                  </Link>
                </motion.div>
              )) : (
                <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'rgba(255,255,255,0.4)' }}>
                   <p style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>No luxury guides found matching "{searchQuery}"</p>
                   <button onClick={() => setSearchQuery("")} style={{ color: 'var(--color-gold)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Clear search</button>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* Load More */}
          {visibleCount < filteredPosts.length && (
            <div style={{ textAlign: 'center', marginTop: '6rem' }}>
              <button 
                onClick={() => setVisibleCount(prev => prev + 9)}
                style={{ 
                  background: 'transparent', 
                  border: '1px solid var(--color-gold)', 
                  color: 'var(--color-gold)', 
                  padding: '1.1rem 3rem', 
                  borderRadius: '100px', 
                  fontSize: '1rem', 
                  fontWeight: 600, 
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-gold)'; e.currentTarget.style.color = '#111'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-gold)'; }}
              >
                Load More Luxury Guides
              </button>
            </div>
          )}

          {/* Call to Action Section */}
          <section style={{ marginTop: '8rem', padding: '5rem', borderRadius: '30px', background: 'rgba(201,162,39,0.05)', border: '1px solid rgba(201,162,39,0.1)', textAlign: 'center' }}>
             <h2 style={{ color: 'white', fontSize: '2.5rem', fontFamily: 'var(--font-playfair)', marginBottom: '1.5rem' }}>Experience Ultimate Luxury Ground Transport</h2>
             <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2.5rem' }}>Ready to elevate your travel experience in Saudi Arabia? Whether you need a private driver for Umrah or an executive airport transfer, our elite fleet is ready for you.</p>
             <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                <Link href="/" style={{ background: 'var(--color-gold)', color: '#111', padding: '1rem 2.5rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 600 }}>Reserve Your Chauffeur</Link>
                <Link href="/routes" style={{ background: 'transparent', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', padding: '1rem 2.5rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 600 }}>Explore Local Routes</Link>
             </div>
          </section>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        .blog-card-link:hover .blog-img {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          section { padding-left: 1rem; padding-right: 1rem; }
        }
      `}</style>
    </main>
  );
}

