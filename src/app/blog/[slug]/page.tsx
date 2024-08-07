import { getPost } from '@/util/getPost';

import { BlogContent } from '@/components';

export default async function Blog({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <div>
      <BlogContent post={post} />
    </div>
  );
}
