import React from 'react';
import classNames from 'classnames';
import { ReactComponent as CrossIcon } from '../../assets/img/crossIcon.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type ILabel = {
  title: string;
  theme?: 'dark' | 'light';
  isClose?: boolean;
  handleClose?: () => void;
};

const Label = ({
  title,
  theme = 'light',
  isClose = false,
  handleClose,
}: ILabel) => (
  <div className={cx('label', `label_theme_${theme}`)}>
    <div className={cx('label__title', 'paragraph__small_medium')}>{title}</div>
    {isClose && (
      <button className={cx('label__btn')} onClick={handleClose}>
        <CrossIcon className={cx('label__cross-icon')} />
      </button>
    )}
  </div>
);

export default React.memo(Label);
