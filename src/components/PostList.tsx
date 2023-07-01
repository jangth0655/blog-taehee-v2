'use client';

import SearchForm from './SearchForm';
import PostItem from './PostItem';
import { Post, Posts } from '@/types/post';
import Pagination, { FIRST_PAGE, OFFSET } from './Pagination';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Categories from './Categories';
import { NavbarContext } from '@/context/NavbarContext';

type Props = {
  posts: Posts;
  total: number;
};

export type Form = {
  keyword?: string;
};

export default function PostList({ posts }: Props) {
  const [page, setPage] = useState(FIRST_PAGE);
  const [searchValue, setSearchValue] = useState<Form>({
    keyword: undefined,
  });
  const navContext = useContext(NavbarContext);

  const moveTop = useCallback(() => {
    navContext?.refObj?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [navContext?.refObj]);

  const handleSearchValue = (keyword: string) => {
    setSearchValue({
      keyword,
    });
  };

  useEffect(() => {
    moveTop();
  }, [moveTop, searchValue]);

  const searchPosts: Post[] =
    searchValue && searchValue.keyword !== ''
      ? posts.data.filter((post) => {
          return (
            post.category === searchValue.keyword ||
            post.title === searchValue.keyword
          );
        })
      : [];

  const filteredPosts = () => {
    if (searchPosts && searchPosts.length > 0) {
      return searchPosts;
    }
    return posts.data;
  };

  const notPosts = filteredPosts().length <= 0;
  const maxPage = Math.ceil(filteredPosts().length / OFFSET);

  return (
    <section>
      <header className='mt-12'>
        <h1 className='font-bold text-4xl xl:text-6xl'>All Posts</h1>
        <SearchForm handleSearchValue={handleSearchValue} />
      </header>

      <div className='mt-20 mb-4'>
        <Categories posts={posts} handleCategory={handleSearchValue} />
      </div>
      <div className='w-full h-[0.8px] dark:bg-gray-600 bg-gray-300 mb-20' />

      <div>
        {notPosts ? (
          <div>
            <span className='text-lg'>
              다른 <strong className='text-amber-500'>키워드로 검색</strong>
              하거나 <strong className='text-amber-500'>카테고리를 선택</strong>
              해주세요! 😂😂
            </span>
          </div>
        ) : (
          <ul>
            {filteredPosts()
              .slice(page * OFFSET, OFFSET + page * OFFSET)
              .map((post) => (
                <PostItem key={post.path} post={post} />
              ))}
          </ul>
        )}
      </div>

      {!notPosts && (
        <Pagination maxPage={maxPage} page={page} setPage={setPage} />
      )}
    </section>
  );
}
