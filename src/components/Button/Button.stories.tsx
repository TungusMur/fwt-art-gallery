import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
    titel: 'Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: <p>Button text</p>,
    className: 'btnText',
    isFalled: true,
};
