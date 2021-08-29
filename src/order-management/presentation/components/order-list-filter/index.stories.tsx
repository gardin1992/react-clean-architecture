import { ComponentStory, ComponentMeta } from "@storybook/react";
import { OrderListFilter } from ".";

export default {
  title: "Views/OrderManagement/OrderListFilter",
  component: OrderListFilter,
  args: {},
} as ComponentMeta<typeof OrderListFilter>;

const Template: ComponentStory<typeof OrderListFilter> = (args) => (
  <OrderListFilter />
);

export const Filter = Template.bind({});
Filter.args = {};
