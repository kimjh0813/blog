import { MdxMetaData, PostsData } from '@/types';

import fs from 'fs/promises';
import matter from 'gray-matter';

export const getPosts = async () => {
  try {
    const postsData: PostsData[] = [];

    const posts = await fs.readdir('./src/post', 'utf-8');

    const filesName = posts.filter(file => {
      return file.split('.').pop() === 'mdx';
    });

    if (filesName.length < 1) {
      throw new Error('No file found');
    }

    const categorySet = new Set<string>();

    for (const fileName of filesName) {
      const post = await fs.readFile(`./src/post/${fileName}`, 'utf-8');

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
