import classNames from 'classnames/bind';
import Input from '../Input';
import Button from '../../ui-components/Button';
import Image from '../../assets/img/imageRegist.png';
import useInput from '../hooks/useInput';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IWindowRegist = { theme?: 'light' | 'dark' };

const WindowRegist = ({ theme = 'light' }: IWindowRegist) => {
  const inputEmail = useInput('email');
  const inputPassword = useInput('password');

  return (
    <div className={cx('windowRegist', `windowRegist_theme_${theme}`)}>
      <div className={cx('windowRegist__content')}>
        <div className={cx('windowRegist-image')}>
          <img
            className={cx('windowRegist-image__img')}
            src={Image}
            alt="art"
          />
        </div>
        <div
          className={cx(
            'windowRegist-form',
            `windowRegist-form_theme_${theme}`
          )}
        >
          <button
            className={cx(
              'windowRegist-close',
              `windowRegist-close_theme_${theme}`
            )}
          />
          <div className={cx('windowRegist-form__content')}>
            <div
              className={cx(
                'windowRegist-text',
                `windowRegist-text_theme_${theme}`
              )}
            >
              <h3 className={cx('windowRegist-text__title')}>
                Create your profile
              </h3>
              <div className={cx('windowRegist-text__info')}>
                {`If you already have an account, please `}
                <Button
                  className={cx('btn-text', 'windowRegist-logIn')}
                  isFalled
                  theme={theme}
                >
                  <div className={cx('windowRegist-logIn__content')}>
                    log in
                  </div>
                </Button>
              </div>
            </div>
            <div className={cx('windowRegist-action')}>
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
                handleChange={(e) => inputPassword.handleChange(e)}
                handleFocus={() => inputPassword.handleFocus()}
                value={inputPassword.value}
                title="Password"
                placeholder=""
                textError={inputPassword.errorMessage}
                theme={theme}
              />
            </div>
            <Button className={cx('windowRegist-signUp')} theme={theme}>
              <div className={cx('windowRegist-signUp__content')}>sign up</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowRegist;
