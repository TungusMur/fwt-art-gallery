import { useState, useEffect, useMemo } from 'react';
import classNames from 'classnames/bind';
import getStageData from './stagesData';
import { ReactComponent as ActionIcon } from '../../assets/img/prevIcon.svg';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type IPagination = {
  countStage: number;
  theme?: 'light' | 'dark';
};

const Pagination = ({ countStage, theme = 'light' }: IPagination) => {
  const [stage, setStage] = useState(0);
  const dataStage = useMemo(
    () => getStageData(countStage, stage, (e) => setStage(e)),
    [stage]
  );

  return (
    <div className={cx('pagination', `pagination_theme_${theme}`)}>
      <button
        className={cx(
          'pagination__btn',
          'pagination__btn-prev',
          'pagination__btn-action'
        )}
        onClick={() => {
          setStage((state) => (state !== 0 ? stage - 1 : stage));
        }}
      >
        <ActionIcon
          className={cx('pagination__icon', `pagination__icon_theme_${theme}`)}
        />
      </button>
      <div className={cx('pagination-form')}>
        {dataStage.map(({ title, id, handleClickItem }) => (
          <button
            key={id}
            className={cx(
              'pagination__btn',
              'pagination-form__btn-stage',
              `pagination-form__btn-stage_theme_${theme}`,
              { 'pagination-form__btn-stage_active': id === stage }
            )}
            onClick={handleClickItem}
          >
            {title}
          </button>
        ))}
      </div>
      <button
        className={cx(
          'pagination__btn',
          'pagination__btn-next',
          'pagination__btn-action'
        )}
        onClick={() => {
          setStage((state) => (state !== countStage - 1 ? state + 1 : state));
        }}
      >
        <ActionIcon
          className={cx('pagination__icon', `pagination__icon_theme_${theme}`)}
        />
      </button>
    </div>
  );
};

export default Pagination;
