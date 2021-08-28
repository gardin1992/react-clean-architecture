import { useEffect } from "react";

import { OrderListFilter } from "order-management/presentation/views/OrderManagement/OrderListFilter";
import { useOrderService } from "order-management/presentation/hooks/useOrderService";
import { OrderList } from "./OrderList";
import { IRepository } from "app/infra/repositories/IRepository";

type OrderManagementProps = {
  orderRepository: IRepository;
};

function OrderManagement({ orderRepository }: OrderManagementProps) {
  const { orders, getAllOrders } = useOrderService(orderRepository);

  useEffect(() => {
    getAllOrders({});

    console.log(orders);
  }, [getAllOrders, orders]);
  return (
    <div>
      <OrderListFilter />
      <OrderList orders={orders} />
    </div>
  );
}

export default OrderManagement;
