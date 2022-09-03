type CardType = {
    titel: string;
    name: string;
    img: string;
    onClick?: () => void;
    className?: string;
    // yearsLife?: string;
    yearBirth?: number;
    yearDead?: number;
};

export default CardType;
