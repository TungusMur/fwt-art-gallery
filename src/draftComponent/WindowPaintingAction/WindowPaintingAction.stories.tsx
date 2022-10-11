import { ComponentMeta, ComponentStory } from '@storybook/react';
import WindowPaintingAction from './WindowPaintingAction';

export default {
  titel: 'windowPaintingAction',
  component: WindowPaintingAction,
} as ComponentMeta<typeof WindowPaintingAction>;

const Template: ComponentStory<typeof WindowPaintingAction> = (args) => (
  <WindowPaintingAction {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
