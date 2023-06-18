import PostList from '@/components/PostList';
import { getPosts } from '@/service/posts';

export default async function HomePage() {
  const posts = await getPosts();

  return <PostList posts={posts} total={posts.total} />;
}
