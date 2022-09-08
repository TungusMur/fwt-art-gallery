import { useEffect } from 'react';
import classNames from 'classnames/bind';
import Card from '../Card';
import type from '../commonTypes';
import styles from './styles.scss';

const cx = classNames.bind(styles);

type ICardsData = {
  cardsData: type[];
  theme?: 'light' | 'dark';
};

const CardList = ({ cardsData, theme = 'light' }: ICardsData) => {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={cx('cardList')}>
      {cardsData.map(
        ({ id, name, handleClick, title, img, yearBirth, yearDead }) => (
          <div className={cx('cardList-item')} key={id}>
            <Card
              name={name}
              handleClick={handleClick}
              title={title}
              img={img}
              yearBirth={yearBirth}
              yearDead={yearDead}
            />
          </div>
        )
      )}
    </div>
  );
};

export default CardList;
