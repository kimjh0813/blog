'use client';

import { useMemo, useState } from 'react';

import { usePostsContext } from '@/context';
import dayjs from 'dayjs';
import Link from 'next/link';

import { PostListProps } from './type';

export function PostList({ isPostPage = false }: PostListProps) {
  const { postsData, categories } = usePostsContext();

  const [category, setCategory] = useState<string>('All');

  const categoryList = useMemo(() => {
    return ['All', ...categories];
  }, [categories]);

  const filterPostsData = useMemo(() => {
    if (category === 'All') return postsData;

    return postsData.filter(v => v.metaData.category === category);
  }, [postsData, category]);

  return (
    <div>
      {isPostPage && (
        <div className='flex flex-col items-center gap-4 py-8'>
          <div className='text-3xl border-b-[3px] pb-2 border-black font-bold'>{category}</div>
          <div className='text-lg'>{filterPostsData.length} posts</div>
        </div>
      )}
      <div className='flex gap-2 whitespace-nowrap overflow-auto scrollbar-hide mb-4 justify-center'>
        {categoryList.map((v, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setCategory(v);
              }}
              className={`${category === v ? 'bg-gray-200 font-medium' : 'text-gray-600 hover:bg-gray-200'} px-4 py-1 rounded-md cursor-pointer select-none`}>
              {v}
            </div>
          );
        })}
      </div>
      <div className='w-full flex flex-col gap-4'>
        {filterPostsData.map(({ body, metaData }, index) => {
          return (
            <Link
              href={metaData.path}
              key={index}
              className='border border-gray-300 p-4 rounded-md group'>
              <div className='text-lg mb-[3px] font-medium group-hover:underline underline-offset-2'>
                {metaData.title}
              </div>
              <div className='text-sm mb-2 line-clamp-3'>{body.stringValue}</div>
              <div className='flex flex-1 text-sm text-gray-400'>
                <div className='flex flex-1'>
                  {dayjs(metaData.updatedAt).format('MMMM D, YYYY')}
                </div>
                <div className='flex'>{metaData.category}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
