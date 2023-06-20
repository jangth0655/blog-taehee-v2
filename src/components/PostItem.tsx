import { Post } from '@/types/post';
import { dateFormat, formatMMMdYYYt } from '@/utils/dateFormat';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  const { category, date, description, featured, path, title } = post;

  return (
    <li className='mb-16 last:mb-0 xl:flex xl:flex-row items-start'>
      <div className='hidden xl:block mr-48 mt-2 '>
        <span className='text-gray-500 text-md'>{formatMMMdYYYt(date)}</span>
      </div>
      <div>
        <Link href={`/posts/${path}`} as={`/posts/${path}`}>
          <div>
            <span className='text-gray-500 xl:hidden inline-block mb-3'>
              {dateFormat(date)}
            </span>
            <h1 className='text-neutral-800 font-bold text-2xl'>{title}</h1>
            <span className='text-teal-500 font-thin hover:text-teal-600 transition-all'>
              {category}
            </span>
          </div>
        </Link>
        <p className='text-neutral-400 mt-6'>{description}</p>
        <div className='mt-10 text-teal-500'>
          <Link
            href={`/posts/${path}`}
            as={`/posts/${path}`}
            className='flex items-center hover:text-teal-600 transition-all'
          >
            <span className='inline-block mr-2'>Read more </span>
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </li>
  );
}
