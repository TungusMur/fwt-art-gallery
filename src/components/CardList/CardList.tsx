import { useEffect } from 'react';
import CardType from '../commonTypes';
import Card from '../Card';
import styles from './styles.module.scss';

type ICardsData = {
    cardsData: CardType[];
    theme?: 'light' | 'dark';
};

const CardList = ({ cardsData, ...props }: ICardsData) => {
    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            props.theme || 'light'
        );
    }, [props.theme]);

    return (
        <div className={styles.cardList}>
            {cardsData.map((item: CardType) => (
                <div className={styles.cardListItem} key={item.id}>
                    <Card
                        name={item.name}
                        handleClick={item.handleClick}
                        titel={item.titel}
                        img={item.img}
                        yearBirth={item.yearBirth}
                        yearDead={item.yearDead}
                    />
                </div>
            ))}
        </div>
    );
};

export default CardList;
