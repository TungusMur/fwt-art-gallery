import { ComponentStory, ComponentMeta } from '@storybook/react';
import WindowDelete from './WindowDelete';

export default {
  titel: 'WindowDelete',
  component: WindowDelete,
} as ComponentMeta<typeof WindowDelete>;

const Template: ComponentStory<typeof WindowDelete> = (args) => (
  <WindowDelete {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
