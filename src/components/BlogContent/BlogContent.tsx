'use client';

import { Comments, PostNavigation } from '@/components';
import { Code } from '@/components/ui';

import dayjs from 'dayjs';
import { MDXComponents } from 'mdx/types';
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';

import * as T from './type';

const components: MDXComponents = {
  code: ({ className, children }) => <Code className={className}>{children}</Code>,
};

export function BlogContent({ post: { metaData, source } }: T.BlogContentProps) {
  return (
    <>
      <div className='mt-8 mb-12'>
        <div className='text-7xl mb-8'>{metaData.emoji}</div>
        <div className='flex gap-2 font-medium mb-2'>
          <Link href={'/posts'} className='hover:underline'>
            블로그
          </Link>
          <Link href={`/posts#${metaData.category}`} className='hover:underline'>
            {metaData.category}
          </Link>
        </div>
        <div className='text-3xl font-medium mb-1 break-all'>{metaData.title}</div>
        <div className='text-gray-400'>{dayjs(metaData.updatedAt).format('MMMM D, YYYY')}</div>
        <div className='w-full h-[1px] bg-gray-300 my-2' />
      </div>
      <MDXRemote {...source} components={components} />
      <PostNavigation path={metaData.path} />
      <Comments />
    </>
  );
}
