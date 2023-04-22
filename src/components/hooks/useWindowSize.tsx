import { useEffect, useState } from 'react';

export const useWindowSize = () => {
  const [value, setValue] = useState(
    typeof window !== undefined ? window.innerWidth : undefined
  );

  useEffect(() => {
    const handleSize = () => setValue(window.innerWidth);
    if (typeof window !== undefined) {
      window.addEventListener('resize', handleSize);
      return () => {
        window.removeEventListener('resize', handleSize);
      };
    }
  }, []);

  useEffect(() => {
    setValue(window.innerWidth);
  }, []);

  return {
    windowSize: value,
  };
};
