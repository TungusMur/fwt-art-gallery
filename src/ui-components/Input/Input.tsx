import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as Error } from '../../assets/img/errorIcon.svg';
import { ReactComponent as EyeIcon } from '../../assets/img/eyeIcon.svg';
import { ReactComponent as EyeNoIcon } from '../../assets/img/eyeNoIcon.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IInput = {
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleFocus: () => void;
  inputType?: 'text' | 'password' | 'number' | 'textarea';
  value: string;
  title: string;
  placeholder: string;
  textError: string;
  theme?: 'light' | 'dark';
  args?: HTMLInputElement | HTMLTextAreaElement;
};

const Input = ({
  handleChange,
  handleFocus,
  inputType = 'text',
  value,
  title,
  placeholder,
  textError,
  theme = 'light',
  ...args
}: IInput) => {
  const [type, setType] = useState(inputType);

  return (
    <div className={cx('input')}>
      <div className={cx('input__title', `input__title_theme_${theme}`)}>
        {title}
      </div>
      {(type === 'text' || type === 'password' || type === 'number') && (
        <>
          <input
            type={type}
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
            onChange={(e) => {
              handleChange(e);
              if (
                !e.target.value &&
                inputType === 'password' &&
                type === 'text'
              ) {
                setType('password');
              }
            }}
            onFocus={() => handleFocus()}
            value={value}
            {...args}
          />
          {/* <div id="error" aria-live="polite">
            <p>This message is announced.</p>
          </div> */}
        </>
      )}
      {inputType === 'textarea' && (
        <textarea
          className={cx(
            'input__textarea',
            `input__textarea_theme_${theme}`,
            'paragraph_light',
            'paragraph_light_base',
            {
              textarea__textarea_isError: textError,
            }
          )}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          onFocus={() => handleFocus()}
          value={value}
          {...args}
        />
      )}
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
      {inputType === 'password' && value && (
        <button
          className={cx('input-btnEye')}
          onClick={() => {
            setType((type) => (type === 'password' ? 'text' : 'password'));
          }}
        >
          {type === 'password' ? (
            <EyeIcon className={'input-btnEye__content'} />
          ) : (
            <EyeNoIcon className={'input-btnEye__content'} />
          )}
        </button>
      )}
    </div>
  );
};

export default React.memo(Input);
