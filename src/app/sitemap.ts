import type { MetadataRoute } from 'next';

const BASE_URL = 'https://jonghun.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/posts`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog/react-file-dropzone`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog/nextjs-tailwind-error-1`,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/blog/nextjs-tailwind-error-2`,
      lastModified: new Date(),
      priority: 1.0,
    },
  ];
}
