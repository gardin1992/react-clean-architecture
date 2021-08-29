import { ComponentStory, ComponentMeta } from "@storybook/react";
import { randomOrder } from "order-management/main/utils/randoms";
import { OrderListItem } from ".";

export default {
  title: "Views/OrderManagement/OrderList/Item",
  component: OrderListItem,
  args: {},
} as ComponentMeta<typeof OrderListItem>;

const Template: ComponentStory<typeof OrderListItem> = (args) => (
  <OrderListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...randomOrder(),
};

export const Simple = Template.bind({});
Simple.args = {
  ...randomOrder(),
};
