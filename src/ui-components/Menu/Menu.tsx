import { useEffect, useState, ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IMenu = {
  className?: string;
  title: string;
  handleClick: () => void;
};

const Menu = ({ className, title, handleClick }: IMenu) => {
  return (
    <h3 className={cx('menu', className)} onClick={handleClick}>
      {title}
    </h3>
  );
};

export default Menu;
