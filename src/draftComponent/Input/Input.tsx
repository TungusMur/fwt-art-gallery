import React from 'react';
import classNames from 'classnames';
import { ReactComponent as Error } from '../../assets/img/errorIcon.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IInput = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
  value: string;
  title: string;
  placeholder: string;
  textError: string;
  theme?: 'light' | 'dark';
  args?: HTMLInputElement;
};

const Input = ({
  handleChange,
  handleFocus,
  value,
  title,
  placeholder,
  textError,
  theme = 'light',
  ...args
}: IInput) => (
  <div className={cx('input')}>
    <div className={cx('input__title', `input__title_theme_${theme}`)}>
      {title}
    </div>
    <input
      className={cx(
        'input__input',
        `input__input_theme_${theme}`,
        'paragraph_light',
        'paragraph_light_base',
        {
          input__input_isError: textError,
        }
      )}
      placeholder={placeholder}
      {...args}
      onChange={(e) => handleChange(e)}
      onFocus={() => handleFocus()}
      value={value}
    />
    {textError && (
      <div className={cx('input-error')}>
        <Error className={cx('input-error__icon')} />
        <div
          className={cx(
            'input-error__info',
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

export default React.memo(Input);
