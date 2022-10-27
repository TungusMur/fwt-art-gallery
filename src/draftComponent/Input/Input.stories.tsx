import { ComponentMeta, ComponentStory } from '@storybook/react';
import useInput from '../hooks/useInput';
import Input from './Input';

const InputForm = () => {
  const { value, handleChange, handleFocus, errorMessage } = useInput('email');

  return (
    <Input
      handleChange={(e) => handleChange(e)}
      handleFocus={() => handleFocus()}
      value={value}
      title="password"
      placeholder=""
      textError={errorMessage}
      theme="light"
    />
  );
};

export default {
  titel: 'input',
  component: Input,
} as ComponentMeta<typeof Input>;

// const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;
const Template: ComponentStory<typeof Input> = () => <InputForm />;

export const Primary = Template.bind({});
// Primary.args = {
//   title: '',
//   placeholder: '',
//   isError: false,
//   textError: '',
//   theme: 'light',
// };
