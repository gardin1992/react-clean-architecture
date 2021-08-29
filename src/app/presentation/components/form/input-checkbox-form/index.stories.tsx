import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FomInputCheckbox } from ".";
import { Button } from "../../button";

export default {
  title: "Components/Form/InputCheckbox",
  component: FomInputCheckbox,
  args: {
    handleOnChange: (e) => {},
    placeholder: "",
    hasError: false,
  },
  decorators: [
    (Story) => (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Story />
        <Button type="submit">Testar</Button>
      </form>
    ),
  ],
} as ComponentMeta<typeof FomInputCheckbox>;

const Template: ComponentStory<typeof FomInputCheckbox> = (args) => (
  <FomInputCheckbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "",
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Checked",
  checked: true,
};

export const Error = Template.bind({});
Error.args = {
  label: "Checked",
  checked: false,
  required: true,
  hasError: true,
};
