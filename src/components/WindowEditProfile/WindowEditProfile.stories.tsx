import { ComponentMeta, ComponentStory } from '@storybook/react';
import WindowEditProfile from './WindowEditProfile';

export default { titel: '', compoennt: WindowEditProfile } as ComponentMeta<
  typeof WindowEditProfile
>;

const Template: ComponentStory<typeof WindowEditProfile> = () => (
  <WindowEditProfile />
);

export const Primary = Template.bind({});
Primary.args = {};
