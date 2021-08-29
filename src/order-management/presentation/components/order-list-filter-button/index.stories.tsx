import { ComponentStory, ComponentMeta } from "@storybook/react";
import { OrderListFilterButton } from ".";

export default {
  title: "Views/OrderManagement/OrderListFilter/Button",
  component: OrderListFilterButton,
  args: {},
} as ComponentMeta<typeof OrderListFilterButton>;

const Template: ComponentStory<typeof OrderListFilterButton> = (args) => (
  <OrderListFilterButton {...args} />
);

export const Pending = Template.bind({});
Pending.args = {
  children: "Pendente",
  variant: "pending",
};

export const InPreparation = Template.bind({});
InPreparation.args = {
  children: "Em Preparo",
  variant: "inPreparation",
};

export const Ready = Template.bind({});
Ready.args = {
  children: "Pronto",
  variant: "ready",
};

export const OnWay = Template.bind({});
OnWay.args = {
  children: "a caminho",
  variant: "onWay",
};

export const Delivered = Template.bind({});
Delivered.args = {
  children: "entregue",
  variant: "delivered",
};

export const Refused = Template.bind({});
Refused.args = {
  children: "recusado",
  variant: "refused",
};
