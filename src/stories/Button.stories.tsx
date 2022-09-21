import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from '../ui-components/Button/Button';

export default {
  titel: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button text',
  className: 'btn-text',
  isFalled: true,
};
