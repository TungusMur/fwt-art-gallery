import { ComponentMeta, ComponentStory } from '@storybook/react';
import WindowRegist from './WindowRegist';

export default {
  titel: 'windowRegist',
  component: WindowRegist,
} as ComponentMeta<typeof WindowRegist>;

const Template: ComponentStory<typeof WindowRegist> = (args) => (
  <WindowRegist {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
