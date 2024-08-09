'use client';

import { MDXComponents } from 'mdx/types';
import { MDXRemote } from 'next-mdx-remote';

import { Code } from '../ui';
import * as T from './type';

const components: MDXComponents = {
  code: ({ className, children }) => <Code className={className}>{children}</Code>,
};

export function BlogContent({ post }: T.BlogContentProps) {
  return <MDXRemote {...post.source} components={components} />;
}
