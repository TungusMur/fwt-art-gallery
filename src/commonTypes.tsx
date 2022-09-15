export type ICommonCard = {
  id?: number;
  title: string;
  name: string;
  img: string;
  handleClick?: () => void;
  yearBirth?: number;
  yearDead?: number;
};
