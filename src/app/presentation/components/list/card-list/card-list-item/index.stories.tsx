import { ComponentStory, ComponentMeta } from "@storybook/react";
import { randomOrder } from "order-management/main/utils/randoms";

import { CardListItem } from ".";

export default {
  title: "Components/CardList/Item",
  component: CardListItem,
} as ComponentMeta<typeof CardListItem>;

const Template: ComponentStory<typeof CardListItem> = (args) => (
  <CardListItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  avatar: "",
  deliveryTime: new Date(),
  requestNumber: "",
  status: "",
  valueTotal: 0,
  title: "",
};

export const Simple = Template.bind({});
Simple.args = {
  ...randomOrder(),
};
