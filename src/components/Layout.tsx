import Navbar from './navbar/Navbar';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <section>
      <main className='max-w-[640px] px-6 sm:max-w-7xl m-auto'>
        <Navbar />
        <div>{children}</div>
      </main>
    </section>
  );
};
export default Layout;
