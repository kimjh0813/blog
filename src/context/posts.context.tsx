'use client';

import { ReactNode, createContext, useContext } from 'react';

import { PostsData } from '@/types';

export interface PostsContext {
  postsData: PostsData[];
  categories: string[];
}

const PostsContext = createContext<PostsContext>({
  postsData: [],
  categories: [],
});

export const usePostsContext = () => useContext(PostsContext);

export function PostsProvider({ children, posts }: { children: ReactNode; posts: PostsContext }) {
  return <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>;
}
