import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    onClick: (e) => {},
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  variant: "secondary",
};

export const Success = Template.bind({});
Success.args = {
  children: "Success",
  variant: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  children: "Danger",
  variant: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  children: "Warning",
  variant: "warning",
};

export const Info = Template.bind({});
Info.args = {
  children: "Info",
  variant: "info",
};

export const Light = Template.bind({});
Light.args = {
  children: "Light",
  variant: "light",
};

export const Dark = Template.bind({});
Dark.args = {
  children: "Dark",
  variant: "dark",
};

export const Link = Template.bind({});
Link.args = {
  children: "Link",
  variant: "link",
};
