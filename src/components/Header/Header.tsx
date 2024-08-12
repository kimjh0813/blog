import { Input } from '@/components';

import Link from 'next/link';

export function Header() {
  return (
    <header className='flex h-[70px] w-full items-center justify-between'>
      <Link href={'/'} className='text-[20px] font-bold'>
        jonghun.blog
      </Link>
      <div className='flex gap-6 items-center'>
        <Link href={'/posts/All'} className='text-[20px] font-bold'>
          posts
        </Link>
        <Input />
      </div>
    </header>
  );
}
