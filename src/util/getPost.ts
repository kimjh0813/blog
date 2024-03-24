import fs from 'fs/promises';
import matter from 'gray-matter';

interface MdxMetadata {
  title: string;
  category: string;
  updatedAt: string;
}

export const getPostsTitle = async () => {
  try {
    const postsTitle = [];

    const posts = await fs.readdir('./src/post', 'utf-8');

    const filesName = posts.filter(file => {
      return file.split('.').pop() === 'mdx';
    });

    if (filesName.length < 1) {
      throw new Error('No file found');
    }

    for (const fileName of filesName) {
      const post = await fs.readFile(`./src/post/${fileName}`, 'utf-8');

      const { data } = matter(post);

      const mdxMetadata: MdxMetadata = {
        title: data.title,
        category: data.category,
        updatedAt: data.updatedAt,
      };

      postsTitle.push(mdxMetadata.title);
    }

    return postsTitle;
  } catch (error: any) {
    throw error;
  }
};
