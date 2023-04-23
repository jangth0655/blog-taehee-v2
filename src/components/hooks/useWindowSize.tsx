import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [value, setValue] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleSize = () => setValue(window.innerWidth);
      window.addEventListener('resize', handleSize);
      return () => {
        window.removeEventListener('resize', handleSize);
      };
    }
  }, []);

  return {
    windowSize: value,
  };
};
