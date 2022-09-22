import { ComponentMeta, ComponentStory } from '@storybook/react';
import Header from '../ui-components/Header';

export default {
  titel: 'header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Primary = Template.bind({});
Primary.args = {};
