type Props = {
  children?: React.ReactNode;
  headerTitle: string;
};

export default function Header({ children, headerTitle }: Props) {
  return (
    <header className='mt-12  mb-20'>
      <h1 className='font-bold text-5xl xl:text-6xl'>{headerTitle}</h1>
      {children}
      <div className='w-full h-[0.8px] dark:bg-gray-600 bg-gray-300' />
    </header>
  );
}
