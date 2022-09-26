import { ComponentMeta, ComponentStory } from '@storybook/react';
import Label from './Label';

export default {
  titel: 'label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Romanticism',
  handleClose: () => {
    console.log('asd');
  },
};
