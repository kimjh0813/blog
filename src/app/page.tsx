import { Introduce, PostList } from '@/components';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: '프론트엔드 개발자 김종훈의 블로그입니다.',
  openGraph: {
    type: 'website',
    url: 'https://jonghun.vercel.app',
  },
};

export default function Home() {
  return (
    <>
      <Introduce />
      <PostList />
    </>
  );
}
