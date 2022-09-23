import classNames from 'classnames/bind';
import { ReactComponent as Error } from '../../assets/img/errorIcon.svg';
import { ReactComponent as SearchIcon } from '../../assets/img/searchIcon.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type ISearch = {
  placeholder: string;
  isError?: boolean;
  textError: string;
  isClose?: boolean;
  handleClose: () => void;
  theme?: 'light' | 'dark';
  args?: HTMLInputElement;
};

const Search = ({
  placeholder,
  isError = false,
  textError,
  theme = 'light',
  isClose = false,
  handleClose,
  ...args
}: ISearch) => (
  <div className={cx('search')}>
    <SearchIcon className={cx('search__icon', `search__icon_theme_${theme}`)} />
    <input
      className={cx(
        'search__input',
        `search__input_theme_${theme}`,
        'paragraph_light',
        'paragraph_light_base',
        {
          search__search_isError: isError,
        }
      )}
      placeholder={placeholder}
    />
    {isClose && (
      <button
        className={cx('search__btn-close', `search__btn-close_theme_${theme}`)}
        onClick={handleClose}
      />
    )}
    {isError && (
      <div className={cx('search-error')}>
        <Error className={cx('search-error__icon')} />
        <div
          className={cx(
            'search-error__info',
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

export default Search;
