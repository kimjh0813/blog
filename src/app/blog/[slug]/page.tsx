import { getPost } from '@/util/getPost';

import { BlogContent } from '@/components';

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <div>
      <div>join: {post.join}</div>
      <div>cwd: {post.cwd}</div>
      <BlogContent post={post} />
    </div>
  );
}
