import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterItem from './FilterItem';

export default {
  titel: 'filterItem',
  component: FilterItem,
} as ComponentMeta<typeof FilterItem>;

const Template: ComponentStory<typeof FilterItem> = (...args) => <FilterItem />;

export const Primary = Template.bind({});
Primary.args = {};
