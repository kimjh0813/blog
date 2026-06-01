import { getPosts } from '@/util/getPost';

import type { MetadataRoute } from 'next';

const BASE_URL = 'https://jonghun.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { postsData } = await getPosts();
  const postUrls = postsData.map(({ metaData }) => ({
    url: `${BASE_URL}/blog/${metaData.path}`,
    lastModified: new Date(metaData.updatedAt),
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${BASE_URL}/posts`,
      lastModified: new Date(),
      priority: 0.9,
    },
    ...postUrls,
  ];
}
