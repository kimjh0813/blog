import { getPost } from '@/util/getPost';

import { BlogContent } from '@/components';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post)
    return {
      title: params.slug,
      description: params.slug,
    };

  const { title, description, path } = post.metaData;

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      url: `https://jonghun.vercel.app/blog/${path}`,
    },
  };
}

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return <BlogContent post={post} />;
}
