import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import DarkThemeProvider from '@/ThemeProvider';
import { NavbarContextProvider } from '@/context/NavbarContext';

type Props = {
  children: React.ReactNode;
};

const inter = Inter({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin'],
  display: 'swap',
});

const Layout = ({ children }: Props) => {
  return (
    <html className={inter.className} suppressHydrationWarning>
      <body className='max-w-[640px] px-6 sm:max-w-3xl xl:max-w-5xl m-auto'>
        <DarkThemeProvider>
          <NavbarContextProvider>
            <Navbar />
            <div className='pb-10'>{children}</div>
          </NavbarContextProvider>
        </DarkThemeProvider>
      </body>
    </html>
  );
};
export default Layout;
