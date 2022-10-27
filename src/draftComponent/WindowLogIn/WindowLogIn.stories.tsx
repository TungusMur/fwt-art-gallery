import { ComponentMeta, ComponentStory } from '@storybook/react';
import WindowLogIn from './WindowLogIn';

export default {
  titel: 'WindowLogIn',
  component: WindowLogIn,
} as ComponentMeta<typeof WindowLogIn>;

const Template: ComponentStory<typeof WindowLogIn> = (args) => (
  <WindowLogIn {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  typeWindow: 'auth',
};
