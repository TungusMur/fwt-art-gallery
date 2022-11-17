import React from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as Error } from '../../assets/img/errorIcon.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type ITextarea = {
  title: string;
  placeholder: string;
  isError?: boolean;
  textError: string;
  theme?: 'light' | 'dark';
  args?: HTMLTextAreaElement;
};

const Textarea = ({
  title,
  placeholder,
  isError = false,
  textError,
  theme = 'light',
  ...args
}: ITextarea) => (
  <div className={cx('textarea', 'input')}>
    <div className={cx('textarea__title', `textarea__title_theme_${theme}`)}>
      {title}
    </div>
    <textarea
      className={cx(
        'textarea__textarea',
        `textarea__textarea_theme_${theme}`,
        'paragraph_light',
        'paragraph_light_base',
        {
          textarea__textarea_isError: isError,
        }
      )}
      placeholder={placeholder}
    />
    {isError && (
      <div className={cx('textarea-error')}>
        <Error className={cx('textarea-error__icon')} />
        <div
          className={cx(
            'textarea-error__info',
            'paragraph_light',
            'paragraph_light_base'
          )}
        >
          {textError}
        </div>
      </div>
    )}
  </div>
);

export default React.memo(Textarea);
