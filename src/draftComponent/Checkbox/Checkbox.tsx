import React from 'react';
import classNames from 'classnames';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type ICheckbox = {
  theme?: 'light' | 'dark';
  isSelected?: boolean;
  handleChange: () => void;
};

const Checkbox = ({
  theme = 'light',
  isSelected = false,
  handleChange,
}: ICheckbox) => (
  <input
    type="checkbox"
    id="checkbox"
    checked={isSelected}
    className={cx('checkbox', `checkbox_theme_${theme}`)}
    onChange={handleChange}
  />
);

export default React.memo(Checkbox);
