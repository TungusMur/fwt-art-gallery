import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomePage from '../components/HomePage';

export default {
  titel: 'homePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

export const Primary = Template.bind({});
Primary.args = {};
