import { ComponentStory, ComponentMeta } from "@storybook/react";
import { randomOrder } from "order-management/main/utils/randoms";
import { OrderList } from ".";

export default {
  title: "Views/OrderManagement/OrderList",
  component: OrderList,
  args: {},
} as ComponentMeta<typeof OrderList>;

const Template: ComponentStory<typeof OrderList> = (args) => (
  <OrderList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  orders: [],
};

export const Simple = Template.bind({});
Simple.args = {
  orders: [randomOrder(), randomOrder(), randomOrder()],
};
