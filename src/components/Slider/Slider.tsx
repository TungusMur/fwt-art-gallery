import React, { useState, useMemo, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as ArrowIcon } from '../../assets/img/arrowIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/img/editIcon.svg';
import { ReactComponent as BagIcon } from '../../assets/img/bagIcon.svg';
import { ReactComponent as ImgIcon } from '../../assets/img/imgIcon.svg';
import { ReactComponent as CrossIcon } from '../../assets/img/crossIcon.svg';
import Button from '../../ui-components/Button';
import {
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
} from './handleTouch';
import setSliderData from './setSliderData';
import styles from './styles.scss';

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
  theme?: 'light' | 'dark';
  activeImage: number;
};

const Slider = ({ data, theme = 'light', activeImage }: ISlider) => {
  const sliderDataRef = useRef<HTMLDivElement | null>(null);
  const btnPrevRef = useRef<HTMLButtonElement | null>(null);
  const btnNextRef = useRef<HTMLButtonElement | null>(null);
  const [coverState, setCoverState] = useState<boolean>(false);

  const [activeItemData, setActiveItemData] = useState<{
    activeItem: number;
    action: boolean;
  }>({ activeItem: activeImage, action: true });
  const { activeItem, action } = activeItemData;

  const sliderData = useMemo(
    () => setSliderData(data, activeItem, action),
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
    <div className={cx('slider', `slider_theme_${theme}`)}>
      <div className={cx('slider-header')}>
        <Button
          className={cx(
            'slider-header__btn',
            'slider-btnImg',
            'btn-icon',
            'btn-icon_over'
          )}
          theme={theme}
          isFalled
        >
          <div
            className={cx('slider-btnImg__content')}
            onClick={() => setCoverState((coverState) => !coverState)}
          >
            <ImgIcon />
          </div>
        </Button>
        <button className={cx('slider-header__btn', 'slider-header__btnClose')}>
          <CrossIcon />
        </button>
      </div>
      {coverState && (
        <img
          className={cx('slider-mainImg')}
          src={data[activeItem]}
          alt="img"
        />
      )}
      {!coverState && (
        <div className={cx('slider-wrapper')}>
          <button
            ref={btnPrevRef}
            className={cx('slider-wrapper__btn', 'slider-wrapper__btnPrev')}
            onClick={() => {
              if (btnNextRef.current && btnPrevRef.current) {
                btnNextRef.current.disabled = true;
                btnPrevRef.current.disabled = true;
              }
              setActiveItemData({
                activeItem: activeItem === 0 ? data.length - 1 : activeItem - 1,
                action: false,
              });
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
                (cb) => setActiveItemData(cb(activeItemData)),
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
                <div
                  className={cx(
                    'slider-description',
                    `slider-description_theme_${theme}`
                  )}
                >
                  <div className={cx('slider-description__content')}>
                    <div className={cx('slider-description__date')}>
                      {'1886'}
                    </div>
                    <div className={cx('slider-description__titel')}>
                      {'Portrait of Vincent van Gogh'}
                    </div>
                  </div>
                  <div className={cx('slider-description__action')}>
                    <Button className={cx('btn-icon')} theme={theme} isFalled>
                      <EditIcon />
                    </Button>
                    <Button className={cx('btn-icon')} theme={theme} isFalled>
                      <BagIcon />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            ref={btnNextRef}
            className={cx('slider-wrapper__btn', 'slider-wrapper__btnNext')}
            onClick={() => {
              if (btnNextRef.current && btnPrevRef.current) {
                btnNextRef.current.disabled = true;
                btnPrevRef.current.disabled = true;
              }
              setActiveItemData({
                activeItem: activeItem === data.length - 1 ? 0 : activeItem + 1,
                action: true,
              });
            }}
          >
            <ArrowIcon className={cx('slider-wrapper__icon')} />
          </button>
        </div>
      )}
      {!coverState && (
        <div className={cx('slider-counter')}>{`${activeItem + 1}/${
          data.length
        }`}</div>
      )}
    </div>
  );
};

export default React.memo(Slider);
