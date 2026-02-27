import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bomark-manager.netlify.app',
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
