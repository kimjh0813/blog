import { PostList } from '@/components';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts',
  description: '프론트엔드 개발자 김종훈의 블로그입니다.',
  openGraph: {
    type: 'website',
    url: 'https://jonghun.vercel.app/posts',
  },
};

export default function Posts() {
  return <PostList isPostPage={true} />;
}
