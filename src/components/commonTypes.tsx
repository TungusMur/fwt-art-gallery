type CardType = {
    id?: number;
    titel: string;
    name: string;
    img: string;
    handleClick?: () => void;
    yearBirth?: number;
    yearDead?: number;
};

export default CardType;
