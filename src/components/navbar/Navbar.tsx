import Image from 'next/image';
import Link from 'next/link';
import { HiMoon, HiSun } from 'react-icons/hi';

const navItems = [
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
  return (
    <nav className='flex items-center justify-between text-neutral-800'>
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

      <ul className='flex items-center space-x-8'>
        {navItems.map((nav) => (
          <Link href={nav.path} key={nav.path}>
            <li className='font-semibold'>{nav.title}</li>
          </Link>
        ))}
        <div>
          <HiMoon className='text-2xl' />
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
