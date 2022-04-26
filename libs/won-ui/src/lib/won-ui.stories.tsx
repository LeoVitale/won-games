import { Story, Meta } from '@storybook/react';
import { WonUi, WonUiProps } from './won-ui';

export default {
  component: WonUi,
  title: 'WonUi'
} as Meta;

const Template: Story<WonUiProps> = (args) => <WonUi {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
