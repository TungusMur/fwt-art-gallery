import React, { useState, useMemo, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as ArrowIcon } from '../../assets/img/arrowIcon.svg';
import styles from './styles.scss';
import SliderItem from './SliderItem';

const cx = classNames.bind(styles);

type ISlider = {
  data: string[];
  activeImage: number;
};

const Slider = ({ data, activeImage }: ISlider) => {
  const sliderDataRef = useRef<HTMLDivElement | null>(null);

  const itemPrevRef = useRef<HTMLDivElement | null>(null);
  const itemActiveRef = useRef<HTMLDivElement | null>(null);
  const itemNextRef = useRef<HTMLDivElement | null>(null);

  const btnPrevRef = useRef<HTMLButtonElement>(null);
  const btnNextRef = useRef<HTMLButtonElement>(null);
  const [activeItem, setActiveItem] = useState<number>(activeImage + 1);
  let xStart: number | null = null;
  let xMove: number | null = null;

  const sliderData = useMemo(
    () => [
      {
        src: data[activeItem === 1 ? data.length - 1 : activeItem - 2],
        id: activeItem === 1 ? data.length - 1 : activeItem - 2,
      },
      { src: data[activeItem - 1], id: activeItem - 1 },
      {
        src: data[activeItem === data.length ? 0 : activeItem],
        id: activeItem === data.length ? 0 : activeItem,
      },
    ],
    [activeItem]
  );

  useEffect(() => {
    setTimeout(() => {
      if (btnNextRef.current) {
        btnNextRef.current.disabled = false;
      }
      if (btnPrevRef.current) {
        btnPrevRef.current.disabled = false;
      }
    }, 400);
  }, [activeItem]);

  return (
    <div className={cx('slider')}>
      <div className={cx('slider-wrapper')}>
        <button
          ref={btnPrevRef}
          className={cx('slider-wrapper__btn', 'slider-wrapper__btnPrev')}
          onClick={() => {
            if (btnNextRef.current && btnPrevRef.current) {
              btnNextRef.current.disabled = true;
              btnPrevRef.current.disabled = true;
            }
            setActiveItem((activeItem) =>
              activeItem === 1 ? data.length : activeItem - 1
            );
          }}
        >
          <ArrowIcon
            disabled={btnNextRef?.current?.disabled}
            className={cx('slider-wrapper__icon')}
            onClick={(e: React.DragEvent<HTMLDivElement>) => {
              e.preventDefault();
            }}
          />
        </button>
        <div
          className={cx('slider-data')}
          ref={sliderDataRef}
          onTouchStart={(e) => {
            xStart = e.touches[0].clientX;
          }}
          onTouchMove={(e) => {
            // if (sliderDataRef.current && xStart && xMove) {
            //   sliderDataRef.current.style.left = `${
            //     sliderDataRef.current.offsetLeft + e.touches[0].clientX - xMove
            //   }px`;
            // }
            // if (
            //   itemActiveRef.current &&
            //   itemPrevRef.current &&
            //   itemNextRef.current &&
            //   xStart &&
            //   xMove
            // ) {
            //   // itemActiveRef.current.style.left = ;
            //   // itemPrevRef.current.style.left = ;
            //   // itemNextRef.current.style.left = ;
            //   console.log(itemActiveRef.current.style.left);
            // }
            // xMove = e.touches[0].clientX;
          }}
          onTouchEnd={() => {
            // if (sliderDataRef.current) {
            //   sliderDataRef.current.style.left = '0px';
            //   if (
            //     xStart &&
            //     xMove &&
            //     sliderDataRef.current.offsetWidth / 3 < Math.abs(xStart - xMove)
            //   ) {
            //     const difference = xStart - xMove;
            //     setActiveItem((activeItem) =>
            //       difference > 0 ? activeItem + 1 : activeItem - 1
            //     );
            //   }
            // }
            xMove = null;
          }}
        >
          {/* {sliderData.map(({ src, id }, index) => (
            <div
              className={cx('slider-data__item', {
                'slider-data__item_prev': index === 0,
                'slider-data__item_active': index === 1,
                'slider-data__item_next': index === 2,
              })}
              key={id}
              onDrag={(e) => {
                e.preventDefault();
              }}
              onDragEnter={(e) => {
                e.preventDefault();
              }}
              onDragLeave={(e) => {
                e.preventDefault();
              }}
              onDragStart={(e) => {
                e.preventDefault();
              }}
            >
              <img className={cx('slider-data__img')} src={src} alt={src} />
              <div className={cx('slider-description')}>
                <div className={cx('slider-description__date')}>{'1886'}</div>
                <div className={cx('slider-description__titel')}>
                  {'Portrait of Vincent van Gogh'}
                </div>
              </div>
            </div>
          ))} */}
          <SliderItem
            key={sliderData[0].id}
            typeSliderItem="prev"
            src={sliderData[0].src}
            ref={itemPrevRef}
          />
          <SliderItem
            key={sliderData[1].id}
            typeSliderItem="active"
            src={sliderData[1].src}
            ref={itemActiveRef}
          />
          <SliderItem
            key={sliderData[2].id}
            typeSliderItem="next"
            src={sliderData[2].src}
            ref={itemNextRef}
          />
        </div>
        <button
          ref={btnNextRef}
          className={cx('slider-wrapper__btn', 'slider-wrapper__btnNext')}
          onClick={(e) => {
            if (btnNextRef.current && btnPrevRef.current) {
              btnNextRef.current.disabled = true;
              btnPrevRef.current.disabled = true;
            }
            setActiveItem((activeItem) =>
              activeItem === data.length ? 1 : activeItem + 1
            );
          }}
        >
          <ArrowIcon className={cx('slider-wrapper__icon')} />
        </button>
      </div>
      <div
        className={cx('slider-counter')}
      >{`${activeItem}/${data.length}`}</div>
    </div>
  );
};

export default React.memo(Slider);
