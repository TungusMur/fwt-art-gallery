import { ComponentMeta, ComponentStory } from '@storybook/react';
import AuthorPage from './AuthorPage';

export default {
  titel: 'authorPage',
  component: AuthorPage,
} as ComponentMeta<typeof AuthorPage>;

const Template: ComponentStory<typeof AuthorPage> = () => <AuthorPage />;

export const Primary = Template.bind({});
Primary.args = {};
