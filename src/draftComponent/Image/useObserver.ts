import React, { useEffect } from 'react';

type IUseObserver = (
  ref: React.MutableRefObject<HTMLElement | null>,
  isVisible: boolean,
  cb: () => void,
  options: {
    rootMargin: string;
  }
) => void;

const useObserver: IUseObserver = (ref, isVisible, cb, options) => {
  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            cb();
            observer.unobserve(entry.target);
          }
        },
        {
          ...options,
        }
      );

      observer.observe(ref.current);
    }
  }, [ref]);
};

export default useObserver;
