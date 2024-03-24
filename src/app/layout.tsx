import { getPostsTitle } from '@/util/getPost';

import Header from '@/components/Header';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Home',
  description: '프론트엔드 개발자 김종훈의 블로그입니다.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const postsTitle = await getPostsTitle();

  return (
    <html lang='en'>
      <body>
        <div className='flex w-full min-h-screen px-4 justify-center overflow-auto'>
          <div className='max-w-[720px] w-full flex flex-col'>
            <Header postsTitle={postsTitle} />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
