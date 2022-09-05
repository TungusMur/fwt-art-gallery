import { useEffect } from 'react';
import CardType from '../commonTypes';
import styles from './styles.module.scss';

type ICard = CardType & {
    theme?: 'light' | 'dark';
};

const Card = ({ name, titel, img, ...props }: ICard) => {
    useEffect(() => {
        document.documentElement.setAttribute(
            'data-theme',
            props.theme || 'light'
        );
    }, [props.theme]);

    return (
        <div className={styles.card} onClick={props.handleClick}>
            <img alt={titel} src={img} className={styles.cardImg} />
            <div className={styles.cardContent}>
                <div className={styles.cardDescription}>
                    <div className={styles.cardTitel}>
                        <h4>{titel}</h4>
                    </div>
                    <div className={'paragraph-medium small'}>
                        <div className={styles.cardYearsLife}>
                            {props.yearBirth} - {props.yearDead}
                        </div>
                    </div>
                </div>
                <div className={styles.cardCurtain}>
                    <div className={styles.cardArrow}></div>
                </div>
            </div>
        </div>
    );
};

export default Card;
