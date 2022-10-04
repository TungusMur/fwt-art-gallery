export type ICommonCard = {
  id?: number | string;
  title: string;
  name: string;
  img: string;
  handleClick?: () => void;
  yearsLife?: string;
};
