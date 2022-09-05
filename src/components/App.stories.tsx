import { ComponentMeta, ComponentStory } from '@storybook/react';
import App from './App';

export default {
    titel: 'app',
    component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const Primary = Template.bind({});
Primary.args = {};
