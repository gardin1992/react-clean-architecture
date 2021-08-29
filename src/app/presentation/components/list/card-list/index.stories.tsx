import { ComponentStory, ComponentMeta } from "@storybook/react";
import { randomOrder } from "order-management/main/utils/randoms";

import { CardList } from ".";

export default {
  title: "Components/CardList",
  component: CardList,
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => (
  <CardList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [],
};

export const Simple = Template.bind({});
Simple.args = {
  items: [randomOrder(), randomOrder()],
  className: "simple",
};
