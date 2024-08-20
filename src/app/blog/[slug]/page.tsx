import { getPost } from '@/util/getPost';

import { BlogContent } from '@/components';

import { notFound } from 'next/navigation';

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return <BlogContent post={post} />;
}
