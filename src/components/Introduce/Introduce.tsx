'use client';

import { useEffect, useRef, useState } from 'react';

const introduceMessages = [
  '테스트 메시지',
  '안녕하세요',
  'hello, world',
  '메시지 감사합니다',
  '반갑습니다',
];

let i = 0;

export function Introduce() {
  const [text, setText] = useState<string>('');

  const textStatusRef = useRef<'add' | 'minus'>('add');
  const isPausedRef = useRef<boolean>(false);

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
    <div className='py-24'>
      <div className='text-[40px] font-thin leading-[48px]'>
        <div>안녕하세요.</div>
        <div className='flex h-[48px] items-center'>
          {text} <span className='inline-block w-[2px] h-4/5 bg-black ml-1 animate-blink' />
        </div>
        <div>
          개발자 <span className='font-medium'>김종훈</span>입니다.
        </div>
      </div>
    </div>
  );
}
