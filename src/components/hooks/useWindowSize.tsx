import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleSize = () => setValue(window.innerWidth);
      window.addEventListener('resize', handleSize);
      return () => {
        window.removeEventListener('resize', handleSize);
      };
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setValue(window.innerWidth);
    }
  }, []);

  return {
    windowSize: value,
  };
};
