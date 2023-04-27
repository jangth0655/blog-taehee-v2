import { Posts } from '@/types/post';
import SearchForm from './SearchForm';
import { dateFormat } from '@/utils/dateFormat';
import PostItem from './PostItem';

type Props = {
  posts: Posts;
};

export default function PostList({ posts }: Props) {
  return (
    <section>
      <header className='mt-12'>
        <h1 className='font-bold text-4xl'>All Posts</h1>
        <SearchForm />
      </header>

      <div className='w-full h-[0.8px] bg-gray-200 my-20' />

      <ul>
        {posts.data.map((post) => (
          <PostItem key={post.path} post={post} />
        ))}
      </ul>
    </section>
  );
}
