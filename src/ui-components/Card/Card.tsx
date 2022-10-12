import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { ICommonCard } from '../../commonTypes';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type ICard = ICommonCard & {
  theme?: 'light' | 'dark';
};

const Card = ({
  name,
  title,
  img,
  theme = 'light',
  yearsLife,
  ...args
}: ICard) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={cx('card')} onClick={args.handleClick}>
      <div
        className={cx('card-img')}
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className={cx('card-content')}>
        <div className={cx('card-description')}>
          <h4 className={cx('card-title')}>{title}</h4>
          <div className={cx('paragraph__small_medium')}>
            <div className={cx('card-yearsLife')}>{yearsLife}</div>
          </div>
        </div>
        <div className={cx('card-curtain')}>
          <div className={cx('card-arrow')}></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
