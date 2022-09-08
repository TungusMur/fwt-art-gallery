type CardType = {
  id?: number;
  title: string;
  name: string;
  img: string;
  handleClick?: () => void;
  yearBirth?: number;
  yearDead?: number;
};

export default CardType;
