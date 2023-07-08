import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { navItems } from './Navbar';
import Link from 'next/link';
import { useWindowSize } from '../hooks/useWindowSize';

type Props = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ isActive, setIsActive }: Props) => {
  const { windowSize } = useWindowSize();

  const closeSideBar = useCallback(() => {
    setIsActive(false);
  }, [setIsActive]);

  useEffect(() => {
    if (windowSize >= 768) {
      closeSideBar();
    }
  }, [closeSideBar, windowSize]);

  return (
    <section
      className={`${
        isActive ? 'scale-x-100' : 'scale-x-0'
      } origin-right transition-all duration-200 fixed w-full h-full top-0 md:hidden left-0 z-50`}
    >
      <main className='bg-neutral-950 opacity-95 w-full h-full' />
      <div
        onClick={closeSideBar}
        className='absolute top-12 right-20 cursor-pointer text-gray-300'
      >
        <AiOutlineClose className='text-4xl' />
      </div>

      <ul className='z-10 absolute top-32 left-10'>
        {navItems.map((item, index) => (
          <Link key={index} href={item.path} as={item.path}>
            <li
              onClick={closeSideBar}
              className='text-3xl font-semibold cursor-pointer mb-10 text-gray-300'
            >
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};
export default Sidebar;
