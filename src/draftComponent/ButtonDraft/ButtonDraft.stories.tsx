import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ReactComponent as EditIcon } from '../../assets/img/editIcon.svg';
import ButtonDraft from './ButtonDraft';

export default {
  titel: 'ButtonDraft',
  component: ButtonDraft,
} as ComponentMeta<typeof ButtonDraft>;

const Template: ComponentStory<typeof ButtonDraft> = (args) => (
  <ButtonDraft {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: <EditIcon />,
  className: 'btn-icon',
  isFalled: true,
};
