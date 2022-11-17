import React, { useEffect } from 'react';

type IUseObserver = (
  ref: React.MutableRefObject<HTMLElement | null>,
  cb: () => void,
  options: {
    rootMargin: string;
  }
) => void;

const useObserver: IUseObserver = (ref, cb, options) => {
  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              cb();
              observer.unobserve(entry.target);
            }
          });
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
