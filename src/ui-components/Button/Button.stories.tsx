import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReactComponent as EditIcon } from '../../assets/img/editIcon.svg';
import Button from './Button';

export default {
  titel: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <EditIcon />,
  className: 'btn-icon',
  isFalled: true,
};
