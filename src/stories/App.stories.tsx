import { ComponentMeta, ComponentStory } from '@storybook/react';
import App from '../components/App';

export default {
  titel: 'app',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Field name',
  placeholder: 'Placeholder',
  isError: false,
  textError: 'This is an error message!',
  theme: 'light',
};
