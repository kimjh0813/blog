import Link from 'next/link';

export function Footer() {
  return (
    <div className='flex justify-center py-6'>
      <p className='text-center text-sm text-gray-600'>
        © 2024{' '}
        <Link href={'https://github.com/kimjh0813/'} target='_blank' className='text-blue-400'>
          김종훈
        </Link>{' '}
        design by{' '}
        <Link
          href={'https://github.com/zoomKoding/zoomkoding-gatsby-blog/'}
          target='_blank'
          className='text-blue-400'>
          zoomkoding-gatsby-blog
        </Link>
      </p>
    </div>
  );
}
