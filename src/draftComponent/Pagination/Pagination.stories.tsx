import { ComponentMeta, ComponentStory } from '@storybook/react';
import Pagination from './Pagination';

export default {
  titel: 'pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Tepmalate: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Primary = Tepmalate.bind({});
Primary.args = {
  countStage: 9,
};
