import { ComponentStory, ComponentMeta } from '@storybook/react';
import Search from './Search';

export default {
  titel: 'search',
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Placeholder',
  isError: false,
  textError: 'This is an error message!',
  theme: 'light',
  isClose: false,
  handleClose: () => {},
};
