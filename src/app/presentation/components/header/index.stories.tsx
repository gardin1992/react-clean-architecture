import { ComponentStory, ComponentMeta } from "@storybook/react";
import faker from "faker/locale/pt_BR";
import { MemoryRouter } from "react-router";
import { Header } from ".";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "",
  logo: "",
};

export const Logo = Template.bind({});
Logo.args = {
  title: "Logo",
  logo: faker.image.avatar(),
};
