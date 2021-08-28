import { ComponentStory, ComponentMeta } from "@storybook/react";
import faker from "faker/locale/pt_BR";
import { useState } from "react";

function InputDecimal() {
  const [input, setInput] = useState("");
  const [start, setStart] = useState(0);

  return (
    <div>
      <input type="text" style={{ fontSize: "22px", padding: "4px" }} />
      <pre style={{ color: "#999", height: "30px" }}>{input}</pre>
    </div>
  );
}

export default {
  title: "Components/OrderManagement/List",
  component: InputDecimal,
} as ComponentMeta<typeof InputDecimal>;

const Template: ComponentStory<typeof InputDecimal> = (args) => (
  <InputDecimal />
);

export const Default = Template.bind({});
Default.args = {};
