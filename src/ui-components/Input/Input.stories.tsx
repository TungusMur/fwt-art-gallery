import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './Input';

export default {
  titel: 'input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: '',
  placeholder: '',
  textError: '',
  theme: 'light',
};
