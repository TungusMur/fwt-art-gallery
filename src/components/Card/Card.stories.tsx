import { ComponentStory, ComponentMeta } from '@storybook/react';
import DesktopImg from '../../assets/img/card/Desktop.png';
import Card from './Card';

export default {
    title: 'Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    titel: 'Jean-Honore Fragonard',
    img: DesktopImg,
    onClick: () => {
        console.log('click');
    },
    className: 'card',
    yearsLife: `${1732} - ${1806}`,
};
