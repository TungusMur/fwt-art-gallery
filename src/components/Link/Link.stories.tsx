import { ComponentStory, ComponentMeta } from '@storybook/react';
import Link from './Link';

export default {
    titel: 'Link',
    component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = { content: 'Normal link', url: '/' };
