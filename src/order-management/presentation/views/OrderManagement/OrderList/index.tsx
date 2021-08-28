import { OrderListItemProps, OrderListItem } from "./OrderListItem";

export type OrderListProps = {
  orders: OrderListItemProps[];
};

export function OrderList({ orders }: OrderListProps) {
  return (
    <ul className="order-list">
      {orders.map((order) => (
        <OrderListItem {...order} />
      ))}
    </ul>
  );
}
