import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IFilterItem = {
  title: string;
  isSelected: boolean;
  theme?: 'light' | 'dark';
};

const FilterItem = ({ title, isSelected, theme = 'light' }: IFilterItem) => (
  <div
    className={cx(
      'filterItem',
      `filterItem_theme_${theme}`,
      'paragraph_light',
      'paragraph_light_small',
      {
        filterItem_isSelected: isSelected,
      }
    )}
  >
    {title}
  </div>
);

export default React.memo(FilterItem);
