import { ComponentMeta, ComponentStory } from '@storybook/react';
import Multiselect from './Multiselect';

export default {
  titel: 'multiselect',
  component: Multiselect,
} as ComponentMeta<typeof Multiselect>;

const Template: ComponentStory<typeof Multiselect> = (args) => (
  <Multiselect {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
