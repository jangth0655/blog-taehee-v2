import { Post } from '@/types/post';
import { dateFormat, formatMMMdYYYt } from '@/utils/dateFormat';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  console.log(post);
  const router = useRouter();
  const { category, date, description, featured, path, title } = post;

  const handleRoute = useCallback(() => {
    router.push(`/posts/${path}`);
  }, [path, router]);

  return (
    <li className='mb-16 last:mb-0 xl:flex items-start'>
      <div className='hidden xl:block mr-48 mt-2 w-56 text-center px-1'>
        <span className='text-gray-400 text-md'>{formatMMMdYYYt(date)}</span>
      </div>
      <div>
        <div className='flex flex-col'>
          <span className='text-gray-400 xl:hidden mb-3'>
            {dateFormat(date)}
          </span>
          <div>
            <span
              onClick={handleRoute}
              className='text-neutral-800 font-bold text-2xl cursor-pointer dark:text-white'
            >
              {title}
            </span>
          </div>
          <span className='text-emerald-600'>{category}</span>
        </div>
        {post.image && (
          <div className='my-2 relative w-96 h-64'>
            <Image
              src={post.image}
              fill
              alt='blog'
              style={{ borderRadius: 8, objectFit: 'cover' }}
              priority
            />
          </div>
        )}
        <p className='text-gray-500 dark:text-gray-300 mt-6 text-ellipsis whitespace-nowrap overflow-hidden'>
          {description}
        </p>
        <div className='mt-10 text-teal-500'>
          <Link
            href={`/posts/${path}`}
            as={`/posts/${path}`}
            className='flex items-center hover:text-teal-600 transition-all dark:hover:text-teal-300'
          >
            <span className='inline-block mr-2'>Read more </span>
            <AiOutlineArrowRight />
          </Link>
        </div>
      </div>
    </li>
  );
}
