'use client';

import SearchForm from './SearchForm';
import { dateFormat } from '@/utils/dateFormat';
import PostItem from './PostItem';
import { Posts } from '@/types/post';

type Props = {
  posts: Posts;
  total: number;
};

export default function PostList({ posts, total }: Props) {
  return (
    <section>
      <header className='mt-12'>
        <h1 className='font-bold text-4xl'>All Posts</h1>
        <SearchForm />
      </header>

      <div className='w-full h-[0.8px] bg-gray-200 my-20' />

      <ul>
        {posts?.data.map((post) => (
          <PostItem key={post.path} post={post} />
        ))}
      </ul>

      <div className='flex items-center justify-between'>
        <button>이전</button>
        <div className='flex items-center'>
          <span>1</span>
          <span className='mx-2'>of</span>
          <span>{total}</span>
        </div>
        <button>다음</button>
      </div>
    </section>
  );
}
