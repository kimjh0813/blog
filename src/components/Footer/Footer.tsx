import Link from 'next/link';

export function Footer() {
  return (
    <div className='flex justify-center py-6 gap-1 text-sm text-gray-600'>
      © 2024
      <Link href={'https://github.com/kimjh0813/'} className='text-blue-400'>
        김종훈
      </Link>
      design by
      <Link
        href={'https://github.com/zoomKoding/zoomkoding-gatsby-blog/'}
        className='text-blue-400'>
        zoomkoding-gatsby-blog
      </Link>
    </div>
  );
}
