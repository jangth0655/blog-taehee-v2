'use client';

import SearchForm from './SearchForm';
import PostItem from './PostItem';
import { Post, Posts } from '@/types/post';
import Pagination, { FIRST_PAGE, OFFSET } from './Pagination';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import Categories from './Categories';
import { NavbarContext } from '@/context/NavbarContext';
import Header from './Header';

type Props = {
  posts: Posts;
  total: number;
};

export type Form = {
  keyword?: string;
};

export default function PostList({ posts, total }: Props) {
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
          return post.category.includes(searchValue.keyword || '') || post.title.includes(searchValue.keyword || '');
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
      <Header headerTitle="All Posts">
        <SearchForm handleSearchValue={handleSearchValue} />
        <div className="mt-20 mb-4">
          <Categories posts={posts} total={total} handleCategory={handleSearchValue} />
        </div>
      </Header>

      <div>
        {notPosts ? (
          <div>
            <span className="text-lg">
              다른 <strong className="text-amber-500">키워드로 검색</strong>
              하거나 <strong className="text-amber-500">카테고리를 선택</strong>
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

      {!notPosts && <Pagination maxPage={maxPage} page={page} setPage={setPage} />}
    </section>
  );
}
