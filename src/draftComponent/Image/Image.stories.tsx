import { ComponentMeta, ComponentStory } from '@storybook/react';
import DesktopImg from '../../assets/img/card/Desktop.png';
import Image from './Image';

export const ImageData = ({ data }: { data: string[] }) => (
  <>
    {data.map((item, index) => (
      <Image key={index} className="img" src={item} />
    ))}
  </>
);

export default {
  titel: 'image',
  component: ImageData,
} as ComponentMeta<typeof ImageData>;

const Template: ComponentStory<typeof ImageData> = (args) => (
  <ImageData {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  data: [
    DesktopImg,
    DesktopImg,
    DesktopImg,
    DesktopImg,
    DesktopImg,
    DesktopImg,
    DesktopImg,
    DesktopImg,
  ],
};
