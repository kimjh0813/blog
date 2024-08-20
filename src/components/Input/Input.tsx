'use client';

import { useMemo, useRef, useState } from 'react';

import { DropDown } from '@/components';

import SearchIcon from '@/assets/icons/search.svg';

import { usePostsContext } from '@/context';
import Link from 'next/link';

import './css.css';

export function Input() {
  const posts = usePostsContext();

  const triggerRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const filteredPosts = useMemo(
    () => posts.postsData.filter(v => v.metaData.title.includes(inputValue)),
    [posts, inputValue],
  );

  return (
    <div className='relative hidden sm:block'>
      <div ref={triggerRef} className='input-wrapper'>
        <input
          type='text'
          className='input'
          placeholder='제목 입력'
          value={inputValue}
          onChange={({ target: { value } }) => setInputValue(value)}
          onFocus={() => setIsVisible(true)}
        />
        <SearchIcon className='search-icon' />
      </div>
      <DropDown
        triggerRef={triggerRef}
        isVisible={isVisible}
        className='w-full mt-1'
        onClickOutside={() => setIsVisible(false)}>
        <div className='py-2 max-h-[200px] overflow-auto text-[#222]'>
          {filteredPosts.length > 0 ? (
            <>
              {filteredPosts.map(({ metaData }, index) => {
                return (
                  <Link
                    key={index}
                    href={`/blog/${metaData.path}`}
                    onClick={() => {
                      setIsVisible(false);
                      setInputValue('');
                    }}>
                    <div className='px-2 py-1 hover:bg-gray-100 cursor-pointer overflow-x-hidden text-ellipsis'>
                      {metaData.title}
                    </div>
                  </Link>
                );
              })}
            </>
          ) : (
            <div className='px-2 py-1'>해당하는 글이 없습니다.</div>
          )}
        </div>
      </DropDown>
    </div>
  );
}
