import { Dispatch, SetStateAction } from 'react';
import ModalPortal from '../ModalPortal';
import { AiOutlineClose } from 'react-icons/ai';
import { navItems } from './Navbar';
import Link from 'next/link';

type Props = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

const Sidebar = ({ isActive, setIsActive }: Props) => {
  const closeSideBar = () => {
    setIsActive(false);
  };

  return (
    <ModalPortal>
      <section
        className={`${
          isActive ? 'scale-x-100' : 'scale-x-0'
        } origin-right transition-all fixed w-full h-full top-0 md:hidden`}
      >
        <div
          onClick={closeSideBar}
          className='absolute top-12 right-20 cursor-pointer z-10'
        >
          <AiOutlineClose className='text-4xl' />
        </div>

        <ul className='z-10 absolute top-32 left-10'>
          {navItems.map((item, index) => (
            <Link key={index} onClick={closeSideBar} href={item.path}>
              <li className='text-3xl font-semibold cursor-pointer mb-10'>
                {item.title}
              </li>
            </Link>
          ))}
        </ul>

        <main className='bg-neutral-300 opacity-90 w-full h-full' />
      </section>
    </ModalPortal>
  );
};
export default Sidebar;
