'use client';

import { useEffect, useRef, useState } from 'react';

import GithubIcon from '@/assets/icons/github.svg';
import LinkedInIcon from '@/assets/icons/linkedin.svg';
import MailIcon from '@/assets/icons/mail.svg';

import Link from 'next/link';

import { SuccessMessage } from '../SuccessMessage';
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
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  const [text, setText] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);

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
    <>
      <SuccessMessage
        title='Copy Successful'
        message='Mail address copied.'
        isVisible={isVisible}
        close={() => {
          setIsVisible(false);
        }}
      />
      <div className='flex py-12 md:py-16 flex-col md:flex-row'>
        <p className='flex-1 text-[32px] leading-10 font-thin md:text-[40px] md:leading-[50px]'>
          안녕하세요.
          <br />
          {text}
          <span className='animate-blink'>|</span>
          <br />
          개발자 <span className='font-medium'>김종훈</span>입니다.
        </p>
        <ul className='icon-list mt-12 md:mt-0'>
          <li className='icon-content'>
            <Link
              href={'https://github.com/kimjh0813/'}
              target='_blank'
              data-social='github'
              className='wrapper'>
              <div className='filled' />
              <GithubIcon />
            </Link>
            <div className='tooltip'>GitHub</div>
          </li>
          <li className='icon-content'>
            <Link
              href={'https://www.linkedin.com/in/%EC%A2%85%ED%9B%88-%EA%B9%80-3b8675285/'}
              target='_blank'
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
                  setIsVisible(true);

                  if (timeoutIdRef.current) {
                    clearTimeout(timeoutIdRef.current);
                  }

                  timeoutIdRef.current = setTimeout(() => {
                    setIsVisible(false);
                    timeoutIdRef.current = null;
                  }, 3000);
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
    </>
  );
}
