import { ComponentStory, ComponentMeta } from '@storybook/react';
import DesktopImg from '../assets/img/card/Desktop.png';
import Card from '../ui-components/Card/Card';

export default {
  titel: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: '',
  title: 'Jean-Honore Fragonard',
  img: DesktopImg,
  handleClick: () => {
    console.log('click');
  },
  yearsLife: `${1732} - ${1806}`,
};
