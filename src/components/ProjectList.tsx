'use client';

import { Posts } from '@/types/post';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

type Props = {
  projects: Posts;
  total: number;
};

export default function ProjectList({ projects, total }: Props) {
  return (
    <ul className='grid md:grid-cols-2 grid-cols-1 gap-8 w-[32rem] md:w-full  h-full'>
      {projects.data?.map((project) => (
        <li
          key={project.path}
          className='border-2 border-gray-200 dark:border-gray-700 p-4 rounded-md space-y-4'
        >
          <div>
            <div className='w-full h-80 md:h-60 bg-slate-700' />
          </div>
          <div className='space-y-4'>
            <div>
              <span className='text-xl font-bold'>{project.title}</span>
              <p className='mt-2 text-gray-500 dark:text-gray-400'>
                {project.description}
              </p>
            </div>
            <div className='text-teal-500'>
              <Link
                href={`#`}
                as=''
                className='flex items-center hover:text-teal-600 transition-all dark:hover:text-teal-300'
              >
                <span className='inline-block mr-2'>Read more </span>
                <AiOutlineArrowRight />
              </Link>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
