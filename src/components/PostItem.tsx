import { Post } from '@/types/post';
import { dateFormat } from '@/utils/dateFormat';
import Link from 'next/link';

type Props = {
  post: Post;
};

export default function PostItem({ post }: Props) {
  const { category, date, description, featured, path, title } = post;
  return (
    <Link href={`/posts/${path}`}>
      <li key={path} className='mb-16'>
        <span className='text-neutral-600'>{dateFormat(date)}</span>
        <h1 className='text-neutral-800 font-bold text-2xl mt-4'>{title}</h1>
        <span className='text-teal-500 font-thin'>{category}</span>
        <p className='text-neutral-400 mt-6'>{description}</p>
      </li>
    </Link>
  );
}
