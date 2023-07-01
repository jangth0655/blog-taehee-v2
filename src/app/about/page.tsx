import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <section>
      <Header headerTitle='About'>
        <div className='w-full h-[0.8px] dark:bg-gray-600 bg-gray-300 mt-6' />
      </Header>
      <div className='flex justify-center items-center w-80 h-52 rounded-full m-auto relative'>
        <Image
          src='/image/marin2.jpeg'
          fill
          alt='logo'
          priority
          className='rounded-full'
        />
      </div>
      <div className='mt-10 mb-20 flex flex-col justify-center items-center'>
        <span className='text-xl md:text-2xl font-bold'>TaHee, (Marin)</span>
        <p className='mt-2 text-neutral-500 dark:text-neutral-400'>
          Front End Developer
        </p>
        <div className='mt-10'>
          <Link
            href='https://github.com/jangth0655'
            target='_blanck'
            rel='noopener noreferrer'
          >
            <div className='w-9 h-9 flex justify-center items-end bg-gray-900 text-white dark:bg-neutral-300 dark:text-black rounded-full cursor-pointer'>
              <FiGithub size={27} />
            </div>
          </Link>
        </div>
      </div>

      <div className='text-neutral-700 dark:text-neutral-200 text-base'>
        <p>안녕하세요 😀</p>
      </div>
    </section>
  );
}
