import { MdxMetaData, PostsData } from '@/types';

import fs from 'fs/promises';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

export const getPosts = async () => {
  try {
    const postsData: PostsData[] = [];

    const posts = await fs.readdir('post', 'utf-8');

    const filesName = posts.filter(file => {
      return file.split('.').pop() === 'mdx';
    });

    if (filesName.length < 1) {
      throw new Error('No file found');
    }

    const categorySet = new Set<string>();

    for (const fileName of filesName) {
      const post = await fs.readFile(`post/${fileName}`, 'utf-8');

      const { data, content } = matter(post);

      categorySet.add(data.category);

      const mdxMetaData: MdxMetaData = {
        emoji: data.emoji,
        title: data.title,
        category: data.category,
        updatedAt: data.updatedAt,
        path: data.path,
        description: data.description,
      };

      postsData.push({
        body: {
          content,
          stringValue: content.replace(/<[^>]*>/g, ''),
        },
        metaData: mdxMetaData,
      });
    }

    postsData.sort((a, b) => {
      const dateA = new Date(a.metaData.updatedAt).getTime();
      const dateB = new Date(b.metaData.updatedAt).getTime();
      return dateB - dateA;
    });

    return { postsData, categories: Array.from(categorySet) };
  } catch (error: any) {
    throw error;
  }
};

export const getPost = async (slug: string) => {
  try {
    const posts = await fs.readdir('post', 'utf-8');

    const slugPost = posts.filter(v => v === `${slug}.mdx`);

    if (slugPost.length === 0) return undefined;

    const post = await fs.readFile(path.join(process.cwd(), `/post/${slug}.mdx`), 'utf-8');

    const { data, content } = matter(post);

    const mdxSource = await serialize(content, {
      mdxOptions: { development: false },
    });

    const mdxMetaData: MdxMetaData = {
      emoji: data.emoji,
      title: data.title,
      category: data.category,
      updatedAt: data.updatedAt,
      path: data.path,
      description: data.description,
    };

    return {
      source: mdxSource,
      metaData: mdxMetaData,
    };
  } catch (error: any) {
    throw error;
  }
};
