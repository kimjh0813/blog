'use client';

import { useEffect, useRef, useState } from 'react';

import GithubIcon from '@/assets/icons/github.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import MailIcon from '@/assets/icons/mail.svg';

import Link from 'next/link';

import './css.css';

const introduceMessages = [
  '테스트 메시지',
  '안녕하세요',
  'hello, world',
  '메시지 감사합니다',
  '반갑습니다',
];

let i = 0;

export function Introduce() {
  const textStatusRef = useRef<'add' | 'minus'>('add');
  const isPausedRef = useRef<boolean>(false);

  const [text, setText] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      if (isPausedRef.current) return;

      if (textStatusRef.current === 'minus' && text.length === 0) {
        isPausedRef.current = true;

        setTimeout(() => {
          isPausedRef.current = false;
          textStatusRef.current = 'add';

          i++;

          if (i === introduceMessages.length) i = 0;
        }, 1500);

        return;
      }

      const message = introduceMessages[i];

      if (text.length === message.length && textStatusRef.current === 'add') {
        isPausedRef.current = true;

        setTimeout(() => {
          isPausedRef.current = false;
          textStatusRef.current = 'minus';
        }, 1800);

        return;
      }

      if (textStatusRef.current === 'add') {
        setText(message.slice(0, text.length + 1));
      } else {
        setText(message.slice(0, text.length - 1));
      }
    }, 70);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className='flex py-16'>
      <div className='flex flex-col flex-1 text-[40px] font-thin leading-[54px]'>
        <div>안녕하세요.</div>
        <div className='flex items-center min-h-[54px]'>
          {text} <span className='inline-block w-[2px] h-[44px] bg-black ml-1 animate-blink' />
        </div>
        <div>
          개발자 <span className='font-medium'>김종훈</span>입니다.
        </div>
      </div>
      <ul className='icon-list'>
        <li className='icon-content'>
          <Link href={'https://github.com/kimjh0813/'} data-social='github' className='wrapper'>
            <div className='filled' />
            <GithubIcon />
          </Link>
          <div className='tooltip'>GitHub</div>
        </li>
        <li className='icon-content'>
          <Link
            href={'https://www.linkedin.com/in/%EC%A2%85%ED%9B%88-%EA%B9%80-3b8675285/'}
            data-social='linkedin'
            className='wrapper'>
            <div className='filled' />
            <LinkedInIcon />
          </Link>
          <div className='tooltip'>LinkedIn</div>
        </li>
        <li className='icon-content'>
          <div
            data-social='mail'
            className='wrapper'
            onClick={async () => {
              try {
                await navigator.clipboard.writeText('junjg0813@gmail.com');
                alert('asdg');
              } catch (err) {
                console.error('Failed to copy text: ', err);
              }
            }}>
            <div className='filled' />
            <MailIcon />
          </div>
          <div className='tooltip'>Mail</div>
        </li>
      </ul>
    </div>
  );
}
