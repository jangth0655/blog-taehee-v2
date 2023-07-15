'use client';

import { Posts } from '@/types/post';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { v4 as uuid } from 'uuid';

type Props = {
  posts: Posts;
  handleCategory: (category: string) => void;
  total: number;
};

export default function Categories({ posts, handleCategory, total }: Props) {
  const uniqueCategories = [
    ...new Set(posts.data.map((post) => post.category)),
  ];

  return (
    <div className='flex items-center relative'>
      {/* <div className='relative left-0'>
        <HiChevronLeft />
      </div> */}
      <ul className='space-x-6 md:space-x-10 flex items-center overflow-x-scroll'>
        <li
          onClick={() => handleCategory('all')}
          className='dark:text-pink-500 text-pink-600 dark:hover:text-pink-400 hover:text-pink-400 transition-all cursor-pointer md:text-lg font-semibold'
        >
          ALL ( {total} )
        </li>
        {uniqueCategories.map((category) => (
          <li
            onClick={() => handleCategory(category)}
            className='dark:text-pink-500 text-pink-600 dark:hover:text-pink-400 hover:text-pink-400 transition-all cursor-pointer md:text-lg font-semibold'
            key={uuid()}
          >
            {category}
          </li>
        ))}
      </ul>
      {/* <div className='relative right-0'>
        <HiChevronRight />
      </div> */}
    </div>
  );
}
