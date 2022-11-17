import { useState } from 'react';
import classNames from 'classnames/bind';
import Button from '../../ui-components/Button';
import FilterBarItem from '../FilterBarItem';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IFilterBar = { theme?: 'light' | 'dark' };

const GENRES_DATA = [
  { title: 'Romantism', isActive: false },
  { title: 'Art', isActive: false },
  { title: 'Nature', isActive: false },
  { title: 'Bataille', isActive: false },
  { title: 'Realistic', isActive: false },
];

const SORT_DATA = [
  { title: 'Recently added', isActive: false },
  { title: 'A-Z', isActive: false },
  { title: 'Z-A', isActive: false },
];

const getItemCount = (data: { title: string; isActive: boolean }[]) => {
  const count = data.reduce((sum, { isActive }) => sum + (isActive ? 1 : 0), 0);

  return count ? `(${count})` : '';
};

const FilterBar = ({ theme = 'light' }: IFilterBar) => {
  const [activeGenres, setActiveGenres] = useState(false);
  const [activeSort, setActiveSort] = useState(false);
  const [genresData, setGenresData] = useState(GENRES_DATA);
  const [sortData, setSortData] = useState(SORT_DATA);

  return (
    <div className={cx('filterBar')}>
      <div
        className={cx('filterBar__content')}
        onClick={() => {
          setActiveSort(false);
          setActiveGenres(false);
        }}
      >
        <div className={cx('filterBar-wrapper')}>
          <div className={cx('filterBar-wrapper__content')}>
            <FilterBarItem
              title={`Genres${getItemCount(genresData)}`}
              isActive={activeGenres}
              setIsActive={() => {
                setActiveSort(false);
                setActiveGenres((prev) => !prev);
              }}
              data={genresData}
              setData={(newData) => setGenresData(newData)}
              theme={theme}
            />
            <FilterBarItem
              title={`Sort by${getItemCount(sortData)}`}
              isActive={activeSort}
              setIsActive={() => {
                setActiveGenres(false);
                setActiveSort((prev) => !prev);
              }}
              data={sortData}
              setData={(newData) => setSortData(newData)}
              theme={theme}
            />
          </div>
          <div className={cx('filterBar-footer')}>
            <Button
              className={cx('btn-text', 'filterBar-btnShow')}
              theme={theme}
              isFalled
            >
              <div className={cx('filterBar-btnShow__title')}>
                Show the results
              </div>
            </Button>
            <Button
              className={cx('btn-text', 'filterBar-btnClear')}
              theme={theme}
              isFalled
            >
              <div
                className={cx('filterBar-btnClear__title')}
                onClick={() => {
                  setGenresData(GENRES_DATA);
                  setSortData(SORT_DATA);
                }}
              >
                Clear
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
