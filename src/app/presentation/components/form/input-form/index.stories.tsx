import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FormInput } from ".";
import { Button } from "../../button";

export default {
  title: "Components/Form/Input",
  component: FormInput,
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
} as ComponentMeta<typeof FormInput>;

const Template: ComponentStory<typeof FormInput> = (args) => (
  <FormInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "",
};

export const Text = Template.bind({});
Text.args = {
  label: "Input text",
  placeholder: "Digite um texto.",
};

export const TextError = Template.bind({});
TextError.args = {
  label: "Input Error",
  hasError: true,
  required: true,
};

export const Email = Template.bind({});
Email.args = {
  label: "Input Email",
  type: "email",
  placeholder: "username@example.com",
};

export const Search = Template.bind({});
Search.args = {
  label: "Input Search",
  type: "search",
};

export const Url = Template.bind({});
Url.args = {
  label: "Input url",
  placeholder: "https://example.com",
  type: "url",
};
