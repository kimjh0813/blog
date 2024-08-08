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
        title: data.title,
        category: data.category,
        updatedAt: data.updatedAt,
        path: data.path,
      };

      postsData.push({
        body: {
          content,
          stringValue: content.replace(/<[^>]*>/g, ''),
        },
        metaData: mdxMetaData,
      });
    }

    return { postsData, categories: Array.from(categorySet) };
  } catch (error: any) {
    throw error;
  }
};

export const getPost = async (slug: string) => {
  try {
    const cwd = process.cwd() + `/post/${slug}.mdx`;
    const join = path.join(process.cwd(), `/post/${slug}.mdx`);

    const post = await fs.readFile(join, 'utf-8');

    if (!post) {
      throw new Error('No file found');
    }

    const { data, content } = matter(post);

    const mdxSource = await serialize(content, {
      mdxOptions: { development: false },
    });

    const mdxMetaData: MdxMetaData = {
      title: data.title,
      category: data.category,
      updatedAt: data.updatedAt,
      path: data.path,
    };

    return {
      source: mdxSource,
      metaData: mdxMetaData,
      cwd,
      join,
    };
  } catch (error: any) {
    console.log('getPost error');
    throw error;
  }
};
