import Input from '@/components/Input';

import Link from 'next/link';

import * as T from './type';

const Header = ({ postsTitle }: T.HeaderProps) => {
  return (
    <header className='flex h-[70px] w-full items-center justify-between'>
      <Link href={'/'} className='text-[20px] font-bold'>
        jonghun.com
      </Link>
      <div className='flex gap-6 items-center'>
        <Link href={'/posts'} className='text-[20px] font-bold'>
          Posts
        </Link>
        <Input postsTitle={postsTitle} />
      </div>
    </header>
  );
};

export default Header;
