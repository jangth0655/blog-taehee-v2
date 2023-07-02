import Link from 'next/link';
import Header from '@/components/Header';
import { AiOutlineArrowRight } from 'react-icons/ai';

const testData = [
  {
    title: 'test',
    path: '#',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ea corporis repudiandae culpa itaque. Nesciunt consequuntur recusandae ipsum qui maxime, doloremque illo laudantium blanditiis ratione? Praesentium reprehenderit dignissimos rerum veniam?',
    category: 'test category',
    key: '1',
  },
  {
    title: 'test1',
    path: '#1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ea corporis repudiandae culpa itaque. Nesciunt consequuntur recusandae ipsum qui maxime, doloremque illo laudantium blanditiis ratione? Praesentium reprehenderit dignissimos rerum veniam?',
    category: 'test category1',
    key: '2',
  },
  {
    title: 'test2',
    path: '#2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ea corporis repudiandae culpa itaque. Nesciunt consequuntur recusandae ipsum qui maxime, doloremque illo laudantium blanditiis ratione? Praesentium reprehenderit dignissimos rerum veniam?',
    category: 'test category2',
    key: '3',
  },
  {
    title: 'test3',
    path: '#3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ea corporis repudiandae culpa itaque. Nesciunt consequuntur recusandae ipsum qui maxime, doloremque illo laudantium blanditiis ratione? Praesentium reprehenderit dignissimos rerum veniam?',
    category: 'test category3',
    key: '4',
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <Header headerTitle='Projects'>
        <div className='w-full h-[0.8px] dark:bg-gray-600 bg-gray-300 mt-10' />
      </Header>

      <ul className='grid md:grid-cols-2 grid-cols-1 gap-8 w-[32rem] md:w-full  h-full'>
        {testData.map((test) => (
          <li
            key={test.key}
            className='border-2 border-gray-200 dark:border-gray-700 p-4 rounded-md space-y-4'
          >
            <div>
              <div className='w-full h-80 md:h-60 bg-slate-700' />
            </div>
            <div className='space-y-4'>
              <div>
                <span className='text-xl font-bold'>{test.title}</span>
                <p className='mt-2 text-gray-500 dark:text-gray-400'>
                  {test.description}
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
    </section>
  );
}
