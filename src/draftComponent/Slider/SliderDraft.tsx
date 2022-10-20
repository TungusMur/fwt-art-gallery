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
  const btnPrevRef = useRef<HTMLButtonElement>(null);
  const btnNextRef = useRef<HTMLButtonElement>(null);
  const [activeItem, setActiveItem] = useState<number>(activeImage + 1);
  const xСoordinate: { xMove: number | null; xStart: number | null } = {
    xMove: null,
    xStart: null,
  };

  //   const [xStart, setXStart] = useState<number | null>(null);
  //   let xMove: number | null = null;

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
            // setXStart(e.touches[0].clientX);
            xСoordinate.xStart = e.touches[0].clientX;
            if (sliderDataRef.current) {
              sliderDataRef.current.style.transition = '0s left';
            }
          }}
          onTouchMove={(e) => {
            if (sliderDataRef.current && xСoordinate.xMove) {
              sliderDataRef.current.style.left = `${
                sliderDataRef.current.offsetLeft +
                e.touches[0].clientX -
                xСoordinate.xMove
              }px`;
            }
            xСoordinate.xMove = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (sliderDataRef.current) {
              sliderDataRef.current.style.transition = '0.4s left';
              sliderDataRef.current.style.left = '0px';
              if (
                xСoordinate.xStart &&
                xСoordinate.xMove &&
                sliderDataRef.current.offsetWidth / 3 <
                  Math.abs(xСoordinate.xStart - xСoordinate.xMove)
              ) {
                const difference = xСoordinate.xStart - xСoordinate.xMove;
                if (difference > 0) {
                  setActiveItem((activeItem) =>
                    activeItem === data.length ? 1 : activeItem + 1
                  );
                } else {
                  setActiveItem((activeItem) =>
                    activeItem === 1 ? data.length : activeItem - 1
                  );
                }
              }
            }
            xСoordinate.xMove = null;
          }}
        >
          {sliderData.map((item, index) => (
            <div
              className={cx('slider-item', {
                'slider-item_prev': index === 0,
                'slider-item_active': index === 1,
                'slider-item_next': index === 2,
              })}
              key={item.id}
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
              <img
                className={cx('slider-item__img')}
                src={item.src}
                alt={item.src}
              />
              <div className={cx('slider-item__description')}>
                <div className={cx('slider-item__date')}>{'1886'}</div>
                <div className={cx('slider-item__titel')}>
                  {'Portrait of Vincent van Gogh'}
                </div>
              </div>
            </div>
          ))}
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
