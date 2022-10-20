import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);
type ISliderItem = {
  typeSliderItem: string;
  src: string;
  // ref?: React.Ref<HTMLDivElement> | null;
};

const SliderItem = forwardRef<HTMLDivElement, ISliderItem>(
  ({ typeSliderItem, src }, ref) => {
    return (
      <div
        className={cx('slider-item', `slider-item_${typeSliderItem}`)}
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
        ref={ref}
      >
        <img className={cx('slider-item__img')} src={src} alt={src} />
        <div className={cx('slider-item__description')}>
          <div className={cx('slider-item__date')}>{'1886'}</div>
          <div className={cx('slider-item__titel')}>
            {'Portrait of Vincent van Gogh'}
          </div>
        </div>
      </div>
    );
  }
);

SliderItem.displayName = 'SliderItem';

export default SliderItem;
