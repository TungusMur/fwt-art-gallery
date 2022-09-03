import { useEffect } from 'react';
import CardType from '../commonTypes';
import styles from './styles.module.scss';

type ICard = CardType & {
    theme?: 'light' | 'dark';
};

const Card = ({
    titel,
    img,
    onClick,
    yearBirth,
    yearDead,
    theme = 'light',
}: ICard) => {
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className={styles.card} onClick={onClick}>
            <img src={img} className={styles['card-img']} />
            <div className={styles['card-content']}>
                <div className={styles['card-description']}>
                    <div className={styles['card-titel']}>
                        <h4>{titel}</h4>
                    </div>
                    <div className="paragraph-medium-small">
                        <div className={styles['card-yearsLife']}>
                            {yearBirth} - {yearDead}
                        </div>
                    </div>
                </div>
                <div className={styles['card-curtain']}>
                    <div className={styles['card-arrow']}></div>
                </div>
            </div>
        </div>
    );
};

export default Card;
