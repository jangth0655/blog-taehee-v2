import './globals.css';
import { Noto_Sans } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';

type Props = {
  children: React.ReactNode;
};

const notoSans = Noto_Sans({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin'],
  display: 'swap',
});

const Layout = ({ children }: Props) => {
  return (
    <html className={notoSans.className}>
      <body className='max-w-[640px] px-6 sm:max-w-3xl xl:max-w-5xl m-auto'>
        <Navbar />
        <div className='pb-10'>{children}</div>
      </body>
    </html>
  );
};
export default Layout;
