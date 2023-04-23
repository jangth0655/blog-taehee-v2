import { Dispatch, SetStateAction } from 'react';
import ModalPortal from '../ModalPortal';
import { AiOutlineClose } from 'react-icons/ai';

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
        } origin-right transition-all fixed w-full h-full top-0 bg-neutral-300 opacity-90`}
      >
        <div
          onClick={closeSideBar}
          className='absolute top-12 right-20 cursor-pointer'
        >
          <AiOutlineClose className='text-4xl' />
        </div>
      </section>
    </ModalPortal>
  );
};
export default Sidebar;
