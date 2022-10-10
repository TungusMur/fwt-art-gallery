import { ComponentMeta, ComponentStory } from '@storybook/react';
import Toast from './Toast';

export default {
  titel: 'toast',
  component: Toast,
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Add your error message here.',
};
