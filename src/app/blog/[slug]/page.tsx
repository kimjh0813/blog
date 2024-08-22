import { getPost } from '@/util/getPost';

import { BlogContent, NextSeo } from '@/components';

import { notFound } from 'next/navigation';

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  return (
    <>
      <NextSeo
        title={post.metaData.title}
        description={post.metaData.description}
        path={`blog/${post.metaData.path}`}
      />
      <BlogContent post={post} />
    </>
  );
}
