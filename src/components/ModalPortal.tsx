'use client';

import { useEffect, useState } from 'react';
import reactDOM from 'react-dom';

type Props = {
  children: React.ReactNode;
};

const ModalPortal = ({ children }: Props) => {
  const [mount, setMount] = useState<Element | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const node = document.getElementById('portal') as Element;
      setMount(node);
    }
  }, []);

  return mount ? reactDOM.createPortal(children, mount) : <></>;
};

export default ModalPortal;
