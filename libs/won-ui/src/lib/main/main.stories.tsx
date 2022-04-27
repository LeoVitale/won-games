import { Story, Meta } from '@storybook/react';
import Main, { MainProps } from './Main';

export default {
  component: Main,
  title: 'Main'
} as Meta;

const Template: Story<MainProps> = (args) => <Main {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: 'React Avançado',
  description: 'TypeScript, ReactJS, NextJS e Styled Components'
};
