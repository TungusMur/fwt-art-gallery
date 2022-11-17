import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterItem from './FilterItem';

export default {
  titel: 'filterItem',
  component: FilterItem,
} as ComponentMeta<typeof FilterItem>;

const Template: ComponentStory<typeof FilterItem> = (args) => (
  <FilterItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: 'Filter item',
  isSelected: false,
};
