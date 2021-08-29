import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SProductManagementButton } from ".";

export default {
  title: "Views/ProductManagement/Button",
  component: SProductManagementButton,
  args: {},
} as ComponentMeta<typeof SProductManagementButton>;

const Template: ComponentStory<typeof SProductManagementButton> = (args) => (
  <SProductManagementButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "",
};

export const Save = Template.bind({});
Save.args = {
  children: "Salvar",
};
