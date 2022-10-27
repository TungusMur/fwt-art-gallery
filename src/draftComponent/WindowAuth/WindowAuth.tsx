import classNames from 'classnames/bind';
import Input from '../Input';
import Button from '../../ui-components/Button';
import Image from '../../assets/img/imageAuth.png';
import useInput from '../hooks/useInput';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IWindowAuth = { theme?: 'light' | 'dark' };

const WindowAuth = ({ theme = 'light' }: IWindowAuth) => {
  const inputEmail = useInput('email');
  const inputPassword = useInput('password');

  return (
    <div className={cx('windowAuth', `windowAuth_theme_${theme}`)}>
      <div className={cx('windowAuth__content')}>
        <div className={cx('windowAuth-image')}>
          <img className={cx('windowAuth-image__img')} src={Image} alt="art" />
        </div>
        <div
          className={cx('windowAuth-form', `windowAuth-form_theme_${theme}`)}
        >
          <button
            className={cx(
              'windowAuth-close',
              `windowAuth-close_theme_${theme}`
            )}
          />
          <div className={cx('windowAuth-form__content')}>
            <div
              className={cx(
                'windowAuth-text',
                `windowAuth-text_theme_${theme}`
              )}
            >
              <h3 className={cx('windowAuth-text__title')}>Welcome back</h3>
              <div className={cx('windowAuth-text__info')}>
                {` If you don't have an account yet, please`}
                <Button
                  className={cx('btn-text', 'windowAuth-signUp')}
                  isFalled
                  theme={theme}
                >
                  <div className={cx('windowAuth-signUp__content')}>
                    sign up
                  </div>
                </Button>
              </div>
            </div>
            <div className={cx('windowAuth-action')}>
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
            <Button className={cx('windowAuth-logIn')} theme={theme}>
              <div className={cx('windowAuth-logIn__content')}>log in</div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowAuth;
