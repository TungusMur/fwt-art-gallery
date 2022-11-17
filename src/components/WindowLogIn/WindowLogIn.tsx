import { useState } from 'react';
import classNames from 'classnames/bind';
import Input from '../../ui-components/Input';
import Button from '../../ui-components/Button';
import ImageAuth from '../../assets/img/imageAuth.png';
import ImageRegist from '../../assets/img/imageRegist.png';
import Image from '../../ui-components/Image';
import useInput from '../../hooks/useInput';
import { ReactComponent as CrossWindowIcon } from '../../assets/img/crossWindowIcon.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IWindowCommon = {
  typeWindow: 'auth' | 'regist';
  theme?: 'light' | 'dark';
  handleClose: () => void;
};

const DATA = {
  auth: {
    titel: 'Welcome back',
    info: "If you don't have an account yet, please",
    swapBtn: 'sign up',
    mainBtn: 'log in',
    image: ImageAuth,
  },
  regist: {
    titel: 'Create your profile',
    info: 'If you already have an account, please',
    swapBtn: 'log in',
    mainBtn: 'sign up',
    image: ImageRegist,
  },
};

const WindowLogIn = ({
  theme = 'light',
  typeWindow,
  handleClose,
}: IWindowCommon) => {
  const [typeWindowState, setTypeWindowState] = useState(typeWindow);
  const inputEmail = useInput('email');
  const inputPassword = useInput('password');
  return (
    //   <Portal>
    <div className={cx('windowLogIn', `windowLogIn_theme_${theme}`)}>
      <div className={cx('windowLogIn__content')}>
        <div
          className={cx(
            'windowLogIn-image',
            `windowLogIn-image_theme_${theme}`
          )}
        >
          <Image
            className={cx('windowLogIn-image')}
            src={DATA[typeWindowState].image}
          />
        </div>
        <div
          className={cx(
            'windowLogIn-wrapper',
            `windowLogIn-wrapper_theme_${theme}`
          )}
        >
          <button
            className={cx(
              'windowLogIn-btnClose',
              `windowLogIn-btnClose_theme_${theme}`
            )}
            onClick={handleClose}
          >
            <CrossWindowIcon className={cx('windowLogIn-btnClose__icon')} />
          </button>
          <div className={cx('windowLogIn-wrapper__content')}>
            <div
              className={cx(
                'windowLogIn-text',
                `windowLogIn-text_theme_${theme}`
              )}
            >
              <h3 className={cx('windowLogIn-text__title')}>
                {DATA[typeWindowState].titel}
              </h3>
              <div className={cx('windowLogIn-text__info')}>
                {DATA[typeWindowState].info}
                <Button
                  className={cx('btn-text', 'windowLogIn-btnSwap')}
                  isFalled
                  theme={theme}
                >
                  <div
                    className={cx('windowLogIn-swapBtn__content')}
                    onClick={() =>
                      setTypeWindowState((typeWindow) =>
                        typeWindow === 'regist' ? 'auth' : 'regist'
                      )
                    }
                  >
                    {DATA[typeWindowState].swapBtn}
                  </div>
                </Button>
              </div>
            </div>
            <div className={cx('windowLogIn-action')}>
              <Input
                handleChange={(e) => inputEmail.handleChange(e)}
                handleFocus={() => inputEmail.handleFocus()}
                value={inputEmail.value}
                title="Email"
                placeholder=""
                textError={inputEmail.errorMessage}
                theme={theme}
              />
              <Input
                inputType="password"
                handleChange={(e) => inputPassword.handleChange(e)}
                handleFocus={() => inputPassword.handleFocus()}
                value={inputPassword.value}
                title="Password"
                placeholder=""
                textError={inputPassword.errorMessage}
                theme={theme}
              />
            </div>
            <Button className={cx('windowLogIn-submit')} theme={theme}>
              <div className={cx('windowLogIn-submit__content')}>
                {DATA[typeWindowState].mainBtn}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
    //   </Portal>
  );
};

export default WindowLogIn;
