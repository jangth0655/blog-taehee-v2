import './globals.css';
import { Montserrat } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import DarkThemeProvider from '@/ThemeProvider';
import { NavbarContextProvider } from '@/context/NavbarContext';
import { Metadata } from 'next';

type Props = {
  children: React.ReactNode;
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'taehee blog',
    template: 'taehee blog | %s',
  },
  description: '프론트엔드 개발자 taehee blog',
  icons: {
    icon: '/favicon.ico',
  },
};

const Layout = ({ children }: Props) => {
  return (
    <html className={montserrat.className} suppressHydrationWarning>
      <body className="max-w-[640px] px-6 sm:max-w-3xl xl:max-w-5xl m-auto bg-slate-50 dark:bg-slate-950">
        <DarkThemeProvider>
          <NavbarContextProvider>
            <Navbar />
            <div className="pb-10">{children}</div>
          </NavbarContextProvider>
        </DarkThemeProvider>
      </body>
    </html>
  );
};
export default Layout;
