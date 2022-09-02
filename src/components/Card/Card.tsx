import { useEffect } from 'react';
import CardType from '../commonTypes';
import './styles.scss';

type ICard = CardType & {
    theme?: 'light' | 'dark';
};

const Card = ({
    titel,
    img,
    onClick,
    className,
    yearsLife,
    theme = 'light',
}: ICard) => {
    useEffect(() => {
        document.querySelector('#root')?.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className={className} onClick={onClick}>
            <img src={img} className={`${className}-img`} />
            <div className={`${className}-content`}>
                <div className={`${className}-description`}>
                    <div className={`${className}-titel`}>
                        <h4>{titel}</h4>
                    </div>
                    <div className={`${className}-yearsLife`}>
                        <div className="paragraph-medium-small">
                            {yearsLife}
                        </div>
                    </div>
                </div>
                <div className={`${className}-curtain`}>
                    <div className={`${className}-arrow`}></div>
                </div>
            </div>
        </div>
    );
};

export default Card;
