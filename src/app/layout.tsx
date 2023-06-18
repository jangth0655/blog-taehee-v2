import './globals.css';
import Navbar from '@/components/navbar/Navbar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <html>
      <body className='max-w-[640px] px-6 sm:max-w-7xl m-auto'>
        <Navbar />
        <div className='pb-10'>{children}</div>
      </body>
    </html>
  );
};
export default Layout;
