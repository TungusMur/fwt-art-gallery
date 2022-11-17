import { useEffect } from 'react';

type IUseScreenLock = (state: boolean) => void;

const useScreenLock: IUseScreenLock = (state) => {
  useEffect(() => {
    if (state) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [state]);
};

export default useScreenLock;
