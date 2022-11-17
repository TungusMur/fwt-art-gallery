import { ComponentMeta, ComponentStory } from '@storybook/react';
import Textarea from './Textarea';

export default {
  titel: 'textarea',
  component: Textarea,
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
  title: 'Description',
  placeholder: 'Wrong text',
  isError: false,
  textError: 'This is an error message!',
  theme: 'light',
};
