'use client';

import { MDXRemote } from 'next-mdx-remote';

import * as T from './type';

const components = {};

export function BlogContent({ post }: T.BlogContentProps) {
  return <MDXRemote {...post.source} components={components} />;
}
