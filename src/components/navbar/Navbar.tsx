import Image from 'next/image';
import Link from 'next/link';
import { HiMoon, HiSun, HiBars3 } from 'react-icons/hi2';
import { useState } from 'react';
import Sidebar from './Sidebar';

export const navItems = [
  {
    title: 'Blog',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Projects',
    path: '/projects',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <nav className='flex items-center justify-between text-neutral-800 relative'>
      <div className='flex items-center space-x-4 px-2 py-8'>
        <Image
          src='/image/logo.png'
          width={60}
          height={60}
          alt='logo'
          priority
        />
        <p className='font-bold text-xl'>TaeHee Blog</p>
      </div>

      <ul className='hidden md:flex items-center space-x-8 mr-14'>
        {navItems.map((nav) => (
          <Link href={nav.path} key={nav.path}>
            <li className='font-semibold'>{nav.title}</li>
          </Link>
        ))}
      </ul>

      <div
        onClick={() => setOpenSidebar(true)}
        className='md:hidden mr-14 text-3xl cursor-pointer hover:scale-105 transition-all'
      >
        <HiBars3 />
      </div>

      <Sidebar isActive={openSidebar} setIsActive={setOpenSidebar} />

      <div className='absolute flex items-center right-0'>
        <HiMoon className='text-2xl' />
      </div>
    </nav>
  );
};
export default Navbar;
