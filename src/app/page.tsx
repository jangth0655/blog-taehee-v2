import PostList from '@/components/PostList';
import { getPosts } from '@/service/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: '개발 관련 모든 글',
};

export default async function HomePage() {
  const posts = await getPosts();

  return <PostList posts={posts} total={posts.total} />;
}
