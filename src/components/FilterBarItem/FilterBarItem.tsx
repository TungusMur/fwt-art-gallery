import classNames from 'classnames/bind';
import Menu from '../../ui-components/Menu';
import { ReactComponent as PlusIcon } from '../../assets/img/plusIcon.svg';
import { ReactComponent as MinusIcon } from '../../assets/img/minusIcon.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);
type IFilterBarItem = {
  title: string;
  isActive: boolean;
  setIsActive: () => void;
  data: { title: string; isActive: boolean }[];
  setData: (newData: { title: string; isActive: boolean }[]) => void;
  theme?: 'light' | 'dark';
};

const FilterBarItem = ({
  title,
  isActive,
  setIsActive,
  data,
  setData,
  theme,
}: IFilterBarItem) => {
  return (
    <div
      className={cx('filterBarItem', `filterBarItem_theme_${theme}`)}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className={cx('filterBarItem__header')}>
        <Menu
          className={cx('filterBarItem__menu')}
          title={title}
          handleClick={() => {
            setIsActive();
          }}
        />
        {isActive ? (
          <MinusIcon
            className={cx(
              'filterBarItem__icon',
              `filterBarItem__icon_theme_${theme}`
            )}
          />
        ) : (
          <PlusIcon
            className={cx(
              'filterBarItem__icon',
              `filterBarItem__icon_theme_${theme}`
            )}
          />
        )}
      </div>
      {isActive && (
        <div className={cx('filterBarItem-list')}>
          {data.map(({ title, isActive }, index) => (
            <div
              className={cx('filterBarItem-list__item', {
                'filterBarItem-list__item_isActive': isActive,
              })}
              key={index}
              onClick={() => {
                setData(
                  data.map(({ title, isActive }, indexData) => ({
                    title,
                    isActive: index === indexData ? !isActive : isActive,
                  }))
                );
              }}
            >
              {title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBarItem;
