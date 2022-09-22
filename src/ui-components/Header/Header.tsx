import { useState } from 'react';
import classNames from 'classnames/bind';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as DarkTheme } from '../../assets/img/darkTheme.svg';
import Button from '../Button';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const [activeBurger, setActiveBurger] = useState(false);

  return (
    <div className={cx('header')}>
      <div className={cx('header-form')}>
        <a href="" className={cx('header__link')}>
          <Logo className={cx('header__logo')} />
        </a>
        <button
          className={cx('header-burger', {
            'header-burger_active': activeBurger,
          })}
          onClick={() => {
            setActiveBurger((state) => !state);
          }}
        >
          <div className={cx('header-burger__line')}></div>
        </button>
        <div
          className={cx('header-action', {
            'header-action_active': activeBurger,
          })}
        >
          <div className={cx('header-action__content')}>
            <div className={cx('header-theme')}>
              <Button
                className={cx('btn-theme', 'header-theme__btn-theme')}
                isFalled
              >
                <DarkTheme />
              </Button>
              <Button
                className={cx('btn-text', 'header-theme__btn-text')}
                isFalled
              >
                Dark mode
              </Button>
            </div>
            <div className={cx('header-entrance')}>
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
