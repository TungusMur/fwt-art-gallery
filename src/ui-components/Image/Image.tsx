import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import useObserver from './useObserver';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IImage = {
  className: string;
  //   image: {
  //     src: string;
  //     webp: string;
  //     src2x: string;
  //     webp2x: string;
  //     original: string;
  //   };
  src: string;
};

const Image = ({
  className,
  //   image,
  src,
}: IImage) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useObserver(elementRef, () => setIsVisible((state) => !state), {
    rootMargin: '0px',
  });

  return (
    <div
      className={cx(className, 'image', { [`image_isLoaded`]: isLoaded })}
      ref={elementRef}
    >
      {/* <picture>
        <source
          src={`${process.env.REACT_APP_BASE_URL + image.webp} 1x`}
          type="image/webp"
          media=""
        />
        <source
          src={`${process.env.REACT_APP_BASE_URL + image.src2x} 2x`}
          type="image/jpg"
          media=""
        />
        <source
          src={`${process.env.REACT_APP_BASE_URL + image.webp2x} 2x`}
          type="image/webp"
          media=""
        />
        {isVisible && (
          <img
            src={`${process.env.REACT_APP_BASE_URL + image.src} 1x`}
            alt=""
          />
        )}
      </picture> */}
      {isVisible && (
        <img
          className={cx(`${className}__img`, 'image__img', {
            [`image__img_isLoaded`]: isLoaded,
          })}
          ref={imageRef}
          alt="asd"
          src={src}
          onLoad={() => {
            setIsLoaded(true);
          }}
        />
      )}
    </div>
  );
};

export default React.memo(Image);
