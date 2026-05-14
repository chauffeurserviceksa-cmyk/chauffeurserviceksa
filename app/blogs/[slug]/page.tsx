import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FloatingWhatsApp, SocialSidebar } from '@/components/FloatingButtons';
import ContactForm from '@/components/ContactForm';
import { blogPosts, slugifyBlog, getBlogData, unslugifyBlog } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';

export async function generateStaticParams() {
  return blogPosts.map(blog => ({
    slug: slugifyBlog(blog.title)
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogData(slug || '');
  const title = blog ? blog.title : unslugifyBlog(slug || '');
  return {
    title: `${title.split(':')[0]} | KSA Chauffeur`,
    description: `${title}. Tips & luxury chauffeur services in Saudi Arabia.`,
    alternates: {
      canonical: `https://chauffeurserviceksa.com/blogs/${slug}`,
    },
  };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlogData(slug || '');
  
  // Validate if slug actually exists in our data
  if (!blog) {
    notFound();
  }

  const title = blog.title;
  const shortTitle = title.split(':')[0].trim();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blog.title,
      "image": `https://chauffeurserviceksa.com${blog.image}`,
      "author": {
        "@type": "Person",
        "name": blog.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Chauffeur KSA",
        "logo": {
          "@type": "ImageObject",
          "url": "https://chauffeurserviceksa.com/logo.png"
        }
      },
      "datePublished": "2024-03-15", // Defaulting to March 2024 as per data
      "dateModified": new Date().toISOString().split('T')[0],
      "description": blog.excerpt,
      "articleSection": blog.category
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://chauffeurserviceksa.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blogs",
          "item": "https://chauffeurserviceksa.com/blogs"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": blog.title,
          "item": `https://chauffeurserviceksa.com/blogs/${slug}`
        }
      ]
    }
  ];

  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-black)' }}>
      <Script
        id={`structured-data-blog-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <SocialSidebar />
      <FloatingWhatsApp />
      
      <article style={{ 
        paddingTop: '150px', 
        paddingBottom: '8rem',
      }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
             <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '30px', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: '0.9rem' }}>{blog.category}</span>
             </div>
             
             <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 4vw, 4rem)', marginBottom: '1.5rem', lineHeight: '1.2', fontFamily: 'var(--font-playfair)' }}>
               {blog.title}
             </h1>
             
             <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
               <span>By {blog.author}</span>
               <span>•</span>
               <span>Published: {blog.date}</span>
               <span>•</span>
               <span>{blog.readTime}</span>
             </div>
          </div>

          <div style={{ height: '400px', borderRadius: '24px', marginBottom: '4rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
             <Image src={blog.image} alt={blog.alt} width={1000} height={400} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div className="blog-content-grid">
            
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', lineHeight: '1.9' }}>
               <p style={{ marginBottom: '2rem' }}>
                 Whether you are traveling for business, embarking on a holy pilgrimage for Umrah, or exploring the vast landscapes of Saudi Arabia as a tourist, having reliable transportation is critical to your experience. In this guide focusing on <strong>{title}</strong>, we cover everything you need to know to make your journey seamless.
               </p>

               <h2 style={{ color: 'white', fontSize: '2rem', fontFamily: 'var(--font-playfair)', margin: '3rem 0 1.5rem' }}>Why a Chauffeur Makes the Difference for {shortTitle}</h2>
               <p style={{ marginBottom: '1.5rem' }}>
                 Navigating unfamiliar routes, dealing with high traffic zones, and coordinating multiple flights can be exhausting. Choosing a professional chauffeur service instantly eliminates these logistical headaches. 
               </p>
               <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li><strong>Safety & Comfort:</strong> High-end vehicles (like the Mercedes S-Class or GMC Yukon) ensure you travel in absolute comfort.</li>
                  <li><strong>Punctuality:</strong> Chauffeurs track your exact schedule and flights to avoid any waiting time.</li>
                  <li><strong>Local Expertise:</strong> Drivers are intimately familiar with local routes, VIP protocols, and religious access zones in Makkah and Madinah.</li>
               </ul>

               <div style={{ background: 'rgba(201,162,39,0.05)', borderLeft: '4px solid var(--color-gold)', padding: '2rem', marginBottom: '3rem', borderRadius: '0 12px 12px 0' }}>
                 <p style={{ margin: 0, fontStyle: 'italic', color: 'white', fontSize: '1.25rem', fontFamily: 'var(--font-playfair)' }}>
                   "Traveling is not just about reaching the destination; it is about the peace of mind during the journey."
                 </p>
               </div>

               <h2 style={{ color: 'white', fontSize: '2rem', fontFamily: 'var(--font-playfair)', margin: '3rem 0 1.5rem' }}>Book Your {shortTitle} Chauffeur Today</h2>
               <p style={{ marginBottom: '2rem' }}>
                 Ready to experience ultimate luxury and reliability? You can quickly reserve a vehicle that matches your exact requirements. Our support team operates 24/7 to accommodate last-minute changes and VIP requests. Let us handle the road so you can focus on your trip.
               </p>
            </div>

            <aside className="blog-sidebar">
               <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '2rem' }}>
                 <h3 style={{ color: 'white', fontFamily: 'var(--font-playfair)', fontSize: '1.5rem', marginBottom: '1rem' }}>Book This Journey</h3>
                 <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>Reserve a premium chauffeur for your upcoming travel. Secure, fast, and reliable.</p>
                 <ContactForm />
               </div>

               {blog.category === "Route Guides" && (
                 <div style={{ background: 'linear-gradient(135deg, rgba(201,162,39,0.1), transparent)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(201,162,39,0.2)', marginBottom: '2rem' }}>
                   <h3 style={{ color: 'white', fontFamily: 'var(--font-playfair)', fontSize: '1.3rem', marginBottom: '0.8rem' }}>Intercity Services</h3>
                   <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '1.2rem', fontSize: '0.9rem', lineHeight: '1.5' }}>Explore our full directory of city-to-city chauffeur routes across the Kingdom and GCC.</p>
                   <Link href="/routes" style={{ color: 'var(--color-gold)', textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                     View All Routes <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                   </Link>
                 </div>
               )}
               
               <Link href="/blogs" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-gold)', textDecoration: 'none', fontWeight: 500, marginTop: '2rem' }}>
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                 Back to all guides
               </Link>
            </aside>

          </div>
          
        </div>
      </article>

      <Footer />
    </main>
  );
}
