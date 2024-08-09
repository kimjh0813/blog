'use client';

import { PropsWithChildren, useMemo, useState } from 'react';

import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import * as T from './type';

export function Code({ children, className }: PropsWithChildren<T.CodeProps>) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const match = /language-(\w+)/.exec(className || '');
  const language = match ? match[1] : 'text';

  const code = useMemo(() => {
    return String(children).trim();
  }, [children]);

  return (
    <div className='relative'>
      <div className={`absolute bg-[#282C34] z-10 text-white right-0 top-0 pt-2 pr-2 `}>
        <div
          className={`rounded-full flex ${
            !isCopied ? 'p-2 cursor-pointer hover:bg-gray-500' : 'pt-2 pr-2'
          }`}
          onClick={async () => {
            if (isCopied) return;

            try {
              await navigator.clipboard.writeText(code);
              setIsCopied(true);

              setTimeout(() => {
                setIsCopied(false);
              }, 3000);
            } catch (err) {
              console.error('Failed to copy text: ', err);
            }
          }}>
          {isCopied ? (
            <div className='flex justify-center gap-3'>
              <span className='bg-gray-500 px-2 rounded-full'>copied!</span>
              <CheckIcon fontSize={'small'} className='text-[#3fb950]' />
            </div>
          ) : (
            <ContentCopyIcon fontSize={'small'} />
          )}
        </div>
      </div>
      <SyntaxHighlighter style={oneDark} language={language} PreTag='div'>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
