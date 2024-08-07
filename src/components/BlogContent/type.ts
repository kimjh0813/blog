import { MdxMetaData } from '@/types';

import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface BlogContentProps {
  post: {
    source: MDXRemoteSerializeResult;
    metaData: MdxMetaData;
  };
}
