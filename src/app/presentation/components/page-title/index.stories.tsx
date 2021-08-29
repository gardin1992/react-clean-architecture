import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PageTitle } from ".";

export default {
  title: "Components/PageTitle",
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <PageTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "",
};

export const Primary = Template.bind({});
Primary.args = {
  title: "Primary",
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  title: "Primary",
  subtitle: "Subtitle",
};
