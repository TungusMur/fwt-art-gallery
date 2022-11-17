import { useState, useContext, useEffect } from 'react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/storeHooks';
import ThemeContext from '../../utils/context/context';
import Search from '../../ui-components/Search';
import { ReactComponent as Logo } from '../../assets/img/logo.svg';
import { ReactComponent as DarkTheme } from '../../assets/img/darkTheme.svg';
import { ReactComponent as LightTheme } from '../../assets/img/lightTheme.svg';
import { ReactComponent as SearchIcon } from '../../assets/img/searchIcon.svg';
import Button from '../../ui-components/Button';
import EntranceAction from '../EntranceAction';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const Header = () => {
  const { accessToken } = useAppSelector((state) => state.authorizationReduce);
  const [activeBurger, setActiveBurger] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (activeSearch) {
      (document.querySelector('.search__input') as HTMLInputElement).focus();
    }
  }, [activeSearch]);

  return (
    <div className={cx('header', `header_theme_${theme}`)}>
      <div className={cx('header-wrapper')}>
        <NavLink to="" className={cx('header__link')}>
          <Logo className={cx('header__logo', `header__logo_theme_${theme}`)} />
        </NavLink>
        {accessToken && (
          <>
            <button
              className={cx(
                'header-btnSearch',
                `header-btnSearch_theme_${theme}`
              )}
              onClick={() => {
                setActiveSearch(true);
              }}
            >
              <SearchIcon className={cx('header-btnSearch__icon')} />
            </button>
            <div
              className={cx('header-search', `header-search_theme_${theme}`, {
                'header-search_isActive': activeSearch,
              })}
            >
              <Search
                value=""
                placeholder="Search"
                textError=""
                theme={theme}
                handleClose={() => {}}
                handleChange={() => {}}
                handleBlur={() => setActiveSearch(false)}
              />
            </div>
          </>
        )}
        <button
          className={cx('header-burger', `header-burger_theme_${theme}`, {
            'header-burger_active': activeBurger,
          })}
          onClick={() => {
            setActiveBurger((state) => !state);
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
                <div
                  className={cx('header-btnText__content')}
                  onClick={setTheme}
                >
                  {theme === 'light' ? 'Dark' : 'Light'} mode
                </div>
              </Button>
            </div>
            <EntranceAction
              theme={theme}
              handleClick={() => setActiveBurger(false)}
            />
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
