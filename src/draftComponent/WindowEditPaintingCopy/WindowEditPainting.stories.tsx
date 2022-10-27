import { ComponentMeta, ComponentStory } from '@storybook/react';
import WindowEditPaintingCopy from './WindowEditPainting';

export default {
  titel: 'WindowEditPaintingCopyCopy',
  component: WindowEditPaintingCopy,
} as ComponentMeta<typeof WindowEditPaintingCopy>;

const Template: ComponentStory<typeof WindowEditPaintingCopy> = (args) => (
  <WindowEditPaintingCopy {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
