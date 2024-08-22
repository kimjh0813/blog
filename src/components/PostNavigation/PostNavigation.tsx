'use client';

import { useMemo } from 'react';

import { usePostsContext } from '@/context';
import Link from 'next/link';

import * as T from './type';

export function PostNavigation({ path }: T.PostNavigationProps) {
  const { postsData } = usePostsContext();

  const navigationIndex = useMemo(() => {
    const postIndex = postsData.findIndex(v => v.metaData.path === path);

    return {
      prev: postIndex + 1 > -1 ? postIndex + 1 : undefined,
      next: postIndex - 1 > -1 ? postIndex - 1 : undefined,
    };
  }, [postsData, path]);

  const navigationPost = useMemo(() => {
    return {
      prevPost: navigationIndex.prev !== undefined ? postsData[navigationIndex.prev] : undefined,
      nextPost: navigationIndex.next !== undefined ? postsData[navigationIndex.next] : undefined,
    };
  }, [navigationIndex]);

  return (
    <div className='flex gap-4 select-none mt-8'>
      <div className='flex flex-1 w-full'>
        {navigationPost.prevPost && (
          <Link
            href={navigationPost.prevPost.metaData.path}
            className='w-full border border-gray-300 px-4 py-6 rounded-md group cursor-pointer'>
            <div className='text-gray-500'>이전 글</div>
            <div className='text-lg font-medium group-hover:underline break-all'>
              {navigationPost.prevPost.metaData.title}
            </div>
          </Link>
        )}
      </div>
      <div className='flex flex-1'>
        {navigationPost.nextPost && (
          <Link
            href={navigationPost.nextPost.metaData.path}
            className='w-full border border-gray-300 px-4 py-6 rounded-md group cursor-pointer'>
            <div className='text-gray-500'>다음 글</div>
            <div className='text-lg font-medium group-hover:underline break-all'>
              {navigationPost.nextPost.metaData.title}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
