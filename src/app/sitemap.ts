import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.skalizmir.com';
  const langs = ['tr', 'en', 'es'];
  
  const routes = [
    '',
    '/about',
    '/what-is-skal',
    '/skal-izmir',
    '/young-skal',
    '/usdf',
    '/board',
    '/president-message',
    '/florimond-volckaert-fund',
    '/world-congress',
    '/events',
    '/announcements',
    '/skal-life',
    '/contact',
    '/members'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add root URL
  sitemapEntries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1,
  });

  // Add all localized routes
  langs.forEach((lang) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 0.9 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
