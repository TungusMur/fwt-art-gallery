import { ComponentMeta, ComponentStory } from '@storybook/react';
import Loader from './Loader';

export default {} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
