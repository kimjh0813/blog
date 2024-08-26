import { getPosts } from '@/util/getPost';

import { Footer, Header } from '@/components';

import { PostsProvider } from '@/context';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const posts = await getPosts();

  return (
    <html lang='ko' className='overflow-y-scroll'>
      <head>
        <meta
          name='google-site-verification'
          content='4uFAUMu6ViLW3EQ3jrIkmt4_CViZ1CNRRO22PeFDLJ8'
        />
      </head>
      <body>
        <PostsProvider posts={posts}>
          <div className='flex w-full min-h-screen px-4 justify-center overflow-auto'>
            <div className='max-w-[720px] w-full min-h-screen flex flex-col'>
              <div className='flex-1'>
                <Header />
                {children}
                <Analytics />
              </div>
              <Footer />
            </div>
          </div>
        </PostsProvider>
      </body>
    </html>
  );
}
