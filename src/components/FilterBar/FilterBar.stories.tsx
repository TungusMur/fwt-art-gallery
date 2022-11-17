import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterBar from './FilterBar';

export default {
  titel: 'FilterBar',
  component: FilterBar,
} as ComponentMeta<typeof FilterBar>;

const Template: ComponentStory<typeof FilterBar> = () => <FilterBar />;

export const Primary = Template.bind({});
Primary.args = {};
