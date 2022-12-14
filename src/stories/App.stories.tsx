import { ComponentMeta, ComponentStory } from '@storybook/react';
import App from '../components/App/App';

export default {
  titel: 'app',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = () => <App />;

export const Primary = Template.bind({});
Primary.args = {};
