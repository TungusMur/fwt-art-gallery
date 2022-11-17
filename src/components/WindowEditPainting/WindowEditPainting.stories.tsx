import { ComponentMeta, ComponentStory } from '@storybook/react';
import WindowEditPainting from './WindowEditPainting';

export default {
  titel: 'windowEditPainting',
  component: WindowEditPainting,
} as ComponentMeta<typeof WindowEditPainting>;

const Template: ComponentStory<typeof WindowEditPainting> = (args) => (
  <WindowEditPainting {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
