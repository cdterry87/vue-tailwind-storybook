require('../styles/main.css');

import MyButton from '../components/Button.vue';

export default {
  title: 'Example/Button',
  component: MyButton,
  argTypes: {
    label: { control: 'text' },
    secondary: { control: 'boolean' },
    tertiary: { control: 'boolean' },
    rounded: { control: 'boolean' },
  },
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  secondary: true
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Tertiary Button',
  tertiary: true
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Tertiary Button',
  rounded: true
};