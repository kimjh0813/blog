import { PostList } from '@/components';

export default function Posts({ params }: { params: { slug: string } }) {
  return <PostList isPostPage={true} defaultCategory={decodeURIComponent(params.slug)} />;
}
