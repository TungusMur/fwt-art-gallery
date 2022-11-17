/* eslint-disable no-nested-ternary */
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IImage = {
  className: string;
  src: string;
};

const Image = ({ className, src }: IImage) => {
  return (
    <img
      className={cx(`${className}__image`)}
      alt="img"
      src={src}
      onLoad={(e) => {}}
    />
  );
};

export default React.memo(Image);
