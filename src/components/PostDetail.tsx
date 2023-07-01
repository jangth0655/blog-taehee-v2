'use client';

import { Post } from '@/types/post';
import { formatMMMdYYYt } from '@/utils/dateFormat';
import { memo } from 'react';
import MarkDownView from './MarkDownView';

type Props = {
  contents: string;
  metaData: Post;
};

function PostDetail({ contents, metaData }: Props) {
  const { date, title } = metaData;

  return (
    <section>
      <header className='text-center space-y-3 pt-5 pb-12 border-b-[0.5px] border-gray-300 dark:border-gray-600'>
        <span className='text-gray-400'>{formatMMMdYYYt(date)}</span>
        <h1 className='font-bold text-4xl'>{title}</h1>
      </header>
      <main className='m-auto mt-12 leading-7 prose lg:prose-base dark:text-gray-300 min-w-full '>
        <MarkDownView contents={contents} />
      </main>
    </section>
  );
}

export default memo(PostDetail);
