import { ComponentMeta, ComponentStory } from '@storybook/react';
import DesktopImg from '../../assets/img/card/Desktop.png';
import CardList from './CardList';

export default {
  titel: 'CardList',
  component: CardList,
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => (
  <CardList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  cardsData: [
    {
      id: 0,
      name: '',
      title: 'Jean-Honore Fragonard',
      img: DesktopImg,
      handleClick: () => {
        console.log('click');
      },
      yearBirth: 1732,
      yearDead: 1806,
    },
    {
      id: 1,
      name: '',
      title: 'Jean-Honore Fragonard',
      img: DesktopImg,
      handleClick: () => {
        console.log('click');
      },
      yearBirth: 1732,
      yearDead: 1806,
    },
    {
      id: 2,
      name: '',
      title: 'Jean-Honore Fragonard',
      img: DesktopImg,
      handleClick: () => {
        console.log('click');
      },
      yearBirth: 1732,
      yearDead: 1806,
    },
    {
      id: 3,
      name: '',
      title: 'Jean-Honore Fragonard',
      img: DesktopImg,
      handleClick: () => {
        console.log('click');
      },
      yearBirth: 1732,
      yearDead: 1806,
    },
    {
      id: 4,
      name: '',
      title: 'Jean-Honore Fragonard',
      img: DesktopImg,
      handleClick: () => {
        console.log('click');
      },
      yearBirth: 1732,
      yearDead: 1806,
    },
    {
      id: 5,
      name: '',
      title: 'Jean-Honore Fragonard',
      img: DesktopImg,
      handleClick: () => {
        console.log('click');
      },
      yearBirth: 1732,
      yearDead: 1806,
    },
    {
      id: 6,
      name: '',
      title: 'Jean-Honore Fragonard',
      img: DesktopImg,
      handleClick: () => {
        console.log('click');
      },
      yearBirth: 1732,
      yearDead: 1806,
    },
    {
      id: 7,
      name: '',
      title: 'Jean-Honore Fragonard',
      img: DesktopImg,
      handleClick: () => {
        console.log('click');
      },
      yearBirth: 1732,
      yearDead: 1806,
    },
    {
      id: 8,
      name: '',
      title: 'Jean-Honore Fragonard',
      img: DesktopImg,
      handleClick: () => {
        console.log('click');
      },
      yearBirth: 1732,
      yearDead: 1806,
    },
  ],
};
