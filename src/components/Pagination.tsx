'use client';

import cls from '@/utils/cls';
import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';

type Props = {
  maxPage?: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  moveTop?: () => void;
};

export const FIRST_PAGE = 0;
export const OFFSET = 5;

export default function Pagination({ maxPage, page, setPage, moveTop }: Props) {
  const isStart = page === 0;
  const isLast = page + 1 === maxPage;

  const handleNextPage = useCallback(() => {
    if (isLast) return;
    setPage((prev) => (prev === maxPage ? maxPage : prev + 1));
    moveTop && moveTop();
  }, [isLast, maxPage, moveTop, setPage]);

  const handlePreviewPage = useCallback(() => {
    if (isStart) return;
    setPage((prev) => (prev === FIRST_PAGE ? FIRST_PAGE : prev - 1));
    moveTop && moveTop();
  }, [isStart, moveTop, setPage]);

  useEffect(() => {
    setPage(0);
  }, [maxPage, setPage]);

  return (
    <div className='flex items-center justify-between mt-32'>
      <button
        onClick={handlePreviewPage}
        className={cls(
          isStart ? `text-gray-400` : '',
          'hover:font-bold transition-all w-14'
        )}
      >
        Previus
      </button>
      <div className='flex items-center'>
        <span>{page + 1}</span>
        <span className='mx-2'>of</span>
        <span>{maxPage}</span>
      </div>
      <button
        onClick={handleNextPage}
        className={cls(
          isLast ? `text-gray-400` : '',
          'hover:font-bold transition-all w-14'
        )}
      >
        Next
      </button>
    </div>
  );
}
