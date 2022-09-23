import { ComponentMeta, ComponentStory } from '@storybook/react';
import Footer from '../ui-components/Footer';

export default {
  titel: '',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Primary = Template.bind({});
Primary.args = {};
