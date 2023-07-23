'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiBars3 } from 'react-icons/hi2';
import { useContext, useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import ToggleTheme from '../ToggleTheme';
import { NavbarContext } from '@/context/NavbarContext';

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
];

const Navbar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const navContext = useContext(NavbarContext);

  useEffect(() => {
    navContext?.handleRefObj(navRef);
  }, [navContext]);

  return (
    <>
      <div ref={navRef} className="absolute left-0 top-0 w-full" />
      <nav className="flex items-center justify-between text-neutral-800 relative">
        <div className="flex items-center space-x-4 px-2 py-8">
          <Link href="/" as="/">
            <Image src="/image/marin3.png" width={60} height={60} alt="logo" priority />
          </Link>
          <p className="font-bold text-xl dark:text-white">TaeHee(Marin)</p>
        </div>

        <ul className="hidden md:flex items-center space-x-8 mr-14">
          {navItems.map((nav) => (
            <Link href={nav.path} key={nav.path} as={nav.path}>
              <li className="text-gray-500 hover:text-gray-900 dark:text-gray-200 transition-all p-1 hover:dark:text-white">
                {nav.title}
              </li>
            </Link>
          ))}
        </ul>

        <div
          onClick={() => setOpenSidebar((prev) => !prev)}
          className="md:hidden mr-14 text-3xl cursor-pointer hover:scale-105 transition-all dark:text-white"
        >
          <HiBars3 />
        </div>
        <Sidebar isActive={openSidebar} setIsActive={setOpenSidebar} />
        <ToggleTheme />
      </nav>
    </>
  );
};
export default Navbar;
