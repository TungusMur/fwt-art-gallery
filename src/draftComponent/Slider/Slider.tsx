import React, { useState, useMemo, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type ISlider = {
  data: string[];
};

const Slider = ({ data }: ISlider) => {
  const btnPrevRef = useRef<HTMLButtonElement>(null);
  const btnNextRef = useRef<HTMLButtonElement>(null);
  const [activeImage, setActiveImage] = useState<number>(1);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const sliderData = useMemo(
    () => [
      {
        src: data[activeImage === 1 ? data.length - 1 : activeImage - 2],
        id: activeImage === 1 ? data.length - 1 : activeImage - 2,
      },
      { src: data[activeImage - 1], id: activeImage - 1 },
      {
        src: data[activeImage === data.length ? 0 : activeImage],
        id: activeImage === data.length ? 0 : activeImage,
      },
    ],
    [activeImage]
  );

  useEffect(() => {
    setTimeout(() => {
      if (btnPrevRef.current) {
        btnPrevRef.current.disabled = false;
      }
      if (btnNextRef.current) {
        btnNextRef.current.disabled = false;
      }
    }, 1000);
  }, [activeImage]);

  return (
    <div className={cx('slider')}>
      <button
        ref={btnPrevRef}
        className={cx('slider__btn', 'slider__btnPrev')}
        onClick={(e) => {
          setActiveImage((activeImage) =>
            activeImage === 1 ? data.length : activeImage - 1
          );
          (e.target as HTMLButtonElement).disabled = true;
        }}
      >
        {'<'}
      </button>
      <div className={cx('slider-data')}>
        {sliderData.map(({ src, id }, index) => (
          <div
            className={cx('slider-data__item', {
              'slider-data__item_prev': index === 0,
              'slider-data__item_active': index === 1,
              'slider-data__item_next': index === 2,
            })}
            key={id}
          >
            <img className={cx('slider-data__img')} src={src} />
          </div>
        ))}
      </div>
      <button
        ref={btnNextRef}
        className={cx('slider__btn', 'slider__btnNext')}
        onClick={(e) => {
          setActiveImage((activeImage) =>
            activeImage === data.length ? 1 : activeImage + 1
          );
          (e.target as HTMLButtonElement).disabled = true;
        }}
      >
        {'>'}
      </button>
    </div>
  );
};

export default React.memo(Slider);
