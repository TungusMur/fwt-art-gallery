import { ComponentMeta, ComponentStory } from '@storybook/react';
import WindowAuth from './WindowAuth';

export default { titel: 'windowAuth', component: WindowAuth } as ComponentMeta<
  typeof WindowAuth
>;

const Template: ComponentStory<typeof WindowAuth> = (args) => (
  <WindowAuth {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
