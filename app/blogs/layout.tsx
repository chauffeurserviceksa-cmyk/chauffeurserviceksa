import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Travel Guides | Chauffeur KSA Blog',
  description: 'Explore Chauffeur KSA travel guides. Tips on airport transfers, intercity routes, and private driver services across Saudi Arabia.',
  alternates: {
    canonical: 'https://chauffeurserviceksa.com/blogs',
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
