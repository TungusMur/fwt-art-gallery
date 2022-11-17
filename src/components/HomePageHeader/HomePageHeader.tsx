import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '../../ui-components/Button/Button';
import Search from '../../ui-components/Search';
import Portal from '../../ui-components/Portal';
import WindowEditProfile from '../WindowEditProfile/WindowEditProfile';
import { ReactComponent as PlusIcon } from '../../assets/img/plusIcon.svg';
import { ReactComponent as FilterIcon } from '../../assets/img/filterIcon.svg';
import styles from './styles.scss';
import FilterBar from '../FilterBar';

const cx = classNames.bind(styles);

type IHomePageHeader = { theme?: 'light' | 'dark' };

const HomePageHeader = ({ theme = 'light' }: IHomePageHeader) => {
  const [searchValue, setSearchValue] = useState('');
  const [windowIsActive, setWindowIsActive] = useState(false);

  return (
    <>
      <div className={cx('homePageHeader')}>
        <div className={cx('homePageHeader-left')}>
          <Button
            className={cx(
              'btn-text',
              'homePageHeader-addArtistBtn',
              `homePageHeader-addArtistBtn_theme_${theme}`
            )}
            isFalled
            theme={theme}
          >
            <div
              className={cx('homePageHeader-addArtistBtn__content')}
              onClick={() => setWindowIsActive(true)}
            >
              <PlusIcon className={cx('homePageHeader-addArtistBtn__icon')} />
              <div className={cx('homePageHeader-addArtistBtn__text')}>
                add artist
              </div>
            </div>
          </Button>
        </div>
        <div className={cx('homePageHeader-right')}>
          <div className={cx('homePageHeader-right__search')}>
            <Search
              value={searchValue}
              handleChange={(e) => {
                setSearchValue(e.target.value);
              }}
              placeholder="Search"
              textError=""
              theme={theme}
              handleClose={() => {
                console.log('close');
              }}
              handleBlur={() => {}}
            />
          </div>
          <Button
            className={cx(
              'btn-icon',
              'homePageHeader-filterBtn',
              `homePageHeader-filterBtn_theme_${theme}`
            )}
            isFalled
            theme={theme}
          >
            <div className={cx('homePageHeader-filterBtn__content')}>
              <FilterIcon className={cx('homePageHeader-filterBtn__icon')} />
            </div>
          </Button>
        </div>
        {windowIsActive && (
          <Portal>
            <WindowEditProfile
              theme={theme}
              handleClose={() => setWindowIsActive(false)}
            />
          </Portal>
        )}
      </div>
      <FilterBar />
    </>
  );
};

export default HomePageHeader;
