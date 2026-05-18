import { MetadataRoute } from 'next';
import { citiesData } from '@/lib/citiesData';
import { blogPosts, slugifyBlog } from '@/lib/blogData';
import { routeCategories, slugify } from '@/lib/routesData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chauffeurserviceksa.com';
  const currentDate = new Date();

  // 1. Static main pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/routes`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ];

  // 2. Dynamic City pages (e.g. /cities/riyadh, /cities/jeddah)
  const cityPages: MetadataRoute.Sitemap = Object.keys(citiesData).map((slug) => ({
    url: `${baseUrl}/cities/${slug.toLowerCase()}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 3. Dynamic Blog post pages (e.g. /blogs/makkah-travel-guide...)
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${slugifyBlog(post.title)}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // 4. Dynamic Route details pages (e.g. /routes/riyadh-to-jeddah...)
  const routePages: MetadataRoute.Sitemap = [];
  routeCategories.forEach((category) => {
    category.data.forEach((region) => {
      region.routes.forEach((route) => {
        routePages.push({
          url: `${baseUrl}/routes/${slugify(route)}`,
          lastModified: currentDate,
          changeFrequency: 'weekly',
          priority: 0.8,
        });
      });
    });
  });

  return [...staticPages, ...cityPages, ...blogPages, ...routePages];
}
