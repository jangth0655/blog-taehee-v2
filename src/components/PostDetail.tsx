'use client';

import { Post } from '@/types/post';
import { formatMMMdYYYt } from '@/utils/dateFormat';
import { memo, useCallback, useContext } from 'react';
import MarkDownView from './MarkDownView';
import { HiOutlineArrowSmallUp } from 'react-icons/hi2';
import { NavbarContext } from '@/context/NavbarContext';

type Props = {
  contents: string;
  metaData: Post;
};

function PostDetail({ contents, metaData }: Props) {
  const { date, title } = metaData;

  const navContext = useContext(NavbarContext);

  const moveTop = useCallback(() => {
    navContext?.refObj?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [navContext?.refObj]);

  return (
    <section>
      <header className='text-center space-y-3 pt-5 pb-12 border-b-[0.5px] border-gray-300 dark:border-gray-600'>
        <span className='text-gray-400'>{formatMMMdYYYt(date)}</span>
        <h1 className='font-bold xl:text-4xl text-3xl'>{title}</h1>
      </header>
      <main className='m-auto mt-12 leading-7 prose lg:prose-base dark:text-gray-300 min-w-full '>
        <MarkDownView contents={contents} />
      </main>

      <div
        onClick={moveTop}
        className='fixed right-4 xl:right-28 bottom-4 w-10 h-10 rounded-full bg-neutral-700 text-gray-300 flex justify-center items-center cursor-pointer hover:bg-neutral-600 transition-all'
      >
        <HiOutlineArrowSmallUp size={23} />
      </div>
    </section>
  );
}

export default memo(PostDetail);
