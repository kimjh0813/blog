import { getPosts } from '@/util/getPost';

import { Header } from '@/components';

import { PostsProvider } from '@/context';
import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Home',
  description: '프론트엔드 개발자 김종훈의 블로그입니다.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const posts = await getPosts();

  return (
    <html lang='en' className='overflow-y-scroll'>
      <body>
        <PostsProvider posts={posts}>
          <div className='flex w-full min-h-screen px-4 justify-center overflow-auto'>
            <div className='max-w-[720px] w-full flex flex-col'>
              <Header />
              {children}
            </div>
          </div>
        </PostsProvider>
      </body>
    </html>
  );
}
