'use client';

import SearchForm from './SearchForm';
import PostItem from './PostItem';
import { Posts } from '@/types/post';
import Pagination, { FIRST_PAGE, OFFSET } from './Pagination';
import { useRef, useState } from 'react';

type Props = {
  posts: Posts;
  total: number;
};

export type Form = {
  keyword?: string;
};

export default function PostList({ posts, total }: Props) {
  const [page, setPage] = useState(FIRST_PAGE);
  const headerRef = useRef<HTMLDivElement>(null);
  const [searchValue, seetSearchValue] = useState<Form>({
    keyword: undefined,
  });

  const moveTop = () => {
    headerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  const handleSearchValue = (keyword: string) => {
    seetSearchValue({
      keyword,
    });
  };

  const searchPosts =
    searchValue.keyword &&
    searchValue.keyword !== '' &&
    posts.data.filter((post) => {
      const { category, title } = post;
      return (
        post.category.includes(searchValue.keyword || '') ||
        post.title.includes(searchValue.keyword || '')
      );
    });

  const filterPosts = searchPosts || posts.data;
  const notPosts = filterPosts.length <= 0;
  const maxPage = Math.ceil(filterPosts.length / OFFSET);

  return (
    <section>
      <header ref={headerRef} className='mt-12'>
        <h1 className='font-bold text-4xl xl:text-6xl'>All Posts</h1>
        <SearchForm handleSearchValue={handleSearchValue} />
      </header>

      <div className='w-full h-[0.8px] dark:bg-gray-600 bg-gray-300 my-20' />

      {notPosts ? (
        <div>
          <span className='text-lg'>
            다른 <strong className='text-amber-500'>키워드로 검색</strong>하거나{' '}
            <strong className='text-amber-500'>카테고리를 선택</strong>해주세요!
            😂😂
          </span>
        </div>
      ) : (
        <ul className='min-h-screen'>
          {filterPosts
            .slice(page * OFFSET, OFFSET + page * OFFSET)
            .map((post) => (
              <PostItem key={post.path} post={post} />
            ))}
        </ul>
      )}

      {!notPosts && (
        <Pagination
          maxPage={maxPage}
          page={page}
          moveTop={moveTop}
          setPage={setPage}
        />
      )}
    </section>
  );
}
