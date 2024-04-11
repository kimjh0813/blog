import fs from 'fs/promises';
import matter from 'gray-matter';

interface MdxMetaData {
  title: string;
  category: string;
  updatedAt: string;
}

interface PostsData {
  bodyContent: string;
  metaData: MdxMetaData;
}

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

    for (const fileName of filesName) {
      const post = await fs.readFile(`./src/post/${fileName}`, 'utf-8');

      const { data, content } = matter(post);

      const mdxMetaData: MdxMetaData = {
        title: data.title,
        category: data.category,
        updatedAt: data.updatedAt,
      };

      postsData.push({ bodyContent: content, metaData: mdxMetaData });
    }

    return postsData;
  } catch (error: any) {
    throw error;
  }
};

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

      const mdxMetaData: MdxMetaData = {
        title: data.title,
        category: data.category,
        updatedAt: data.updatedAt,
      };

      postsTitle.push(mdxMetaData.title);
    }

    return postsTitle;
  } catch (error: any) {
    throw error;
  }
};
