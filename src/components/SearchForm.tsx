'use client';

import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { HiMagnifyingGlass } from 'react-icons/hi2';

type Props = {
  handleSearchValue: (keyword: string) => void;
};

export default function SearchForm({ handleSearchValue }: Props) {
  const [keyword, setKeyword] = useState<string>('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setKeyword(keyword);
  }, []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!handleSearchValue) return;
    handleSearchValue(keyword);
    setKeyword('');
  };

  return (
    <form onSubmit={onSubmit} className='mt-4'>
      <div className='relative border-2 rounded-lg w-3/4 md:w-3/5'>
        <input
          value={keyword}
          onChange={handleChange}
          className='px-4 py-2 w-full outline-none dark:text-black dark:bg-white dark:border-0'
          placeholder='Search article'
          type='text'
        />
        <div className='absolute right-10 top-[50%] -translate-y-[50%]'>
          <HiMagnifyingGlass className='text-2xl text-gray-400' />
        </div>
      </div>
    </form>
  );
}
