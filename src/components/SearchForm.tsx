'use client';

import { HiMagnifyingGlass } from 'react-icons/hi2';

export default function SearchForm() {
  return (
    <form className='mt-4'>
      <div className='relative border-2 rounded-lg w-3/4 md:w-3/5'>
        <input
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
