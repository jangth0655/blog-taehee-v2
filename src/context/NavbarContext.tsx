'use client';

import { createContext, useRef, useState } from 'react';

type Props = {
  children: React.ReactNode;
};
type RefCurrent = React.RefObject<HTMLDivElement>;

type InitialValue = {
  refObj: RefCurrent | null;
  handleRefObj: (current: RefCurrent) => void;
};

export const NavbarContext = createContext<InitialValue | null>(null);

export const NavbarContextProvider = ({ children }: Props) => {
  const [refObj, setRefObj] = useState<RefCurrent | null>(null);

  const handleRefObj = (current: RefCurrent) => {
    setRefObj(current);
  };
  return (
    <NavbarContext.Provider
      value={{
        refObj,
        handleRefObj,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
