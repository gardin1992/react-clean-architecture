import { randomOrder } from "order-management/main/utils/randoms";
import {
  OrderListItem,
  OrderListItemProps,
} from "order-management/presentation/components/order-list-item";
import { SOrderList } from "./styles";

export type OrderListProps = {
  orders: OrderListItemProps[];
};

export function OrderList({ orders }: OrderListProps) {
  return (
    <SOrderList
      items={[
        ...orders,
        randomOrder(),
        randomOrder(),
        randomOrder(),
        randomOrder(),
      ]}
    />
  );
}
