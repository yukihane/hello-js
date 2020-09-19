import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { MyButton, Props } from "./index";

export default {
  title: "MyButton",
  component: MyButton,
} as Meta;

const Template: Story<Props> = (args) => <MyButton {...args} />;

export const Default = Template.bind({});
Default.args = { label: "aaa" };
