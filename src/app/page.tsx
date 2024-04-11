import { getPosts } from '@/util/getPost';

export default async function Home() {
  const posts = await getPosts();

  return <main></main>;
}
