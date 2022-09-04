import { ComponentStory, ComponentMeta } from '@storybook/react';
import DesktopImg from '../../assets/img/card/Desktop.png';
import Card from './Card';

export default {
    titel: 'Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    name: '',
    titel: 'Jean-Honore Fragonard',
    img: DesktopImg,
    handleClick: () => {
        console.log('click');
    },
    yearBirth: 1732,
    yearDead: 1806,
};
