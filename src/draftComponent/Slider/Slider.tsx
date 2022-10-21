import React, { useState, useMemo, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as ArrowIcon } from '../../assets/img/arrowIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/img/editIcon.svg';
import { ReactComponent as BagIcon } from '../../assets/img/bagIcon.svg';
import { ReactComponent as ImgIcon } from '../../assets/img/imgIcon.svg';
import { ReactComponent as CrossIcon } from '../../assets/img/crossIcon.svg';
import {
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
} from './handleTouch';
import setSliderData from './setSliderData';
import styles from './styles.scss';
import Button from '../../ui-components/Button';

const cx = classNames.bind(styles);

type ISlider = {
  data: string[];
  // data: {
  //   _id: string | number;
  //   name: string;
  //   yearOfCreation: string | number;
  //   image: {
  //     _id: string | number;
  //     src: string | number;
  //     webp: string | number;
  //     src2x: string | number;
  //     webp2x: string | number;
  //     original: string | number;
  //   };
  // }[];
  activeImage: number;
};

const Slider = ({ data, activeImage }: ISlider) => {
  const sliderDataRef = useRef<HTMLDivElement | null>(null);
  const btnPrevRef = useRef<HTMLButtonElement>(null);
  const btnNextRef = useRef<HTMLButtonElement>(null);
  const [activeItem, setActiveItem] = useState<number>(activeImage + 1);

  const sliderData = useMemo(
    () => setSliderData(data, activeItem),
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
      <div className={cx('slider-header')}>
        <Button
          className={cx(
            'slider-header__btn',
            'slider-header__btnImg',
            'btn-icon'
          )}
        >
          <ImgIcon />
        </Button>
        <button className={cx('slider-header__btn', 'slider-header__btnClose')}>
          <CrossIcon />
        </button>
      </div>
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
          onTouchStart={(e) => handleTouchStart(e, sliderDataRef)}
          onTouchMove={(e) => handleTouchMove(e, sliderDataRef)}
          onTouchEnd={() =>
            handleTouchEnd(
              sliderDataRef,
              (e) => setActiveItem(e(activeItem)),
              data.length
            )
          }
        >
          {sliderData.map((item, index) => (
            <div
              className={cx('slider-item', {
                'slider-item_prev': index === 0,
                'slider-item_active': index === 1,
                'slider-item_next': index === 2,
              })}
              key={item.id}
              onDrag={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            >
              <img
                className={cx('slider-item__img')}
                src={item.src}
                alt={item.src}
              />
              <div className={cx('slider-description')}>
                <div className={cx('slider-description__content')}>
                  <div className={cx('slider-description__date')}>{'1886'}</div>
                  <div className={cx('slider-description__titel')}>
                    {'Portrait of Vincent van Gogh'}
                  </div>
                  <div className={cx('slider-description__action')}>
                    <Button className={cx('btn-icon')} isFalled>
                      <EditIcon />
                    </Button>
                    <Button className={cx('btn-icon')} isFalled>
                      <BagIcon />
                    </Button>
                  </div>
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
