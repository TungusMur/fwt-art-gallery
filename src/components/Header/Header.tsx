import { useState, useContext } from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as DarkTheme } from '../../assets/img/darkTheme.svg';
import { ReactComponent as LightTheme } from '../../assets/img/lightTheme.svg';
import Button from '../../ui-components/Button';
import ThemeContext from '../../utils/context/context';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={cx('header', `header_theme_${theme}`)}>
      <div className={cx('header-wrapper')}>
        <a href="" className={cx('header-wrapper__link')}>
          <Logo
            className={cx(
              'header-wrapper__logo',
              `header-wrapper__logo_theme_${theme}`
            )}
          />
        </a>
        <button
          className={cx('header-burger', `header-burger_theme_${theme}`, {
            'header-burger_active': activeBurger,
          })}
          onClick={() => {
            setActiveBurger((prev) => !prev);
          }}
        >
          <div className={cx('header-burger__line')}></div>
        </button>
        <div
          className={cx('header-action', `header-action_theme_${theme}`, {
            'header-action_active': activeBurger,
          })}
        >
          <div className={cx('header-action__content')}>
            <div className={cx('header-theme')}>
              <Button
                className={cx('btn-theme', 'header-btnTheme')}
                theme={theme}
                isFalled
              >
                <div
                  className={cx('header-btnTheme__content')}
                  onClick={setTheme}
                >
                  {theme === 'light' ? <DarkTheme /> : <LightTheme />}
                </div>
              </Button>
              <Button
                className={cx('btn-text', 'header-btnText')}
                isFalled
                theme={theme}
              >
                <div className={cx('header-btnText__titel')} onClick={setTheme}>
                  Dark mode
                </div>
              </Button>
            </div>
            <div
              className={cx(
                'header-entrance',
                `header-entrance_theme_${theme}`
              )}
            >
              <h3 className={cx('header-entrance__logIn')}>LOG IN</h3>
              <h3 className={cx('header-entrance__signUp')}>SIGN UP</h3>
            </div>{' '}
          </div>
        </div>
      </div>
      <div
        className={cx('header-background', {
          'header-background_active': activeBurger,
        })}
      />
    </div>
  );
};

export default Header;
