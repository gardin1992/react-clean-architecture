import { useEffect } from "react";

import { useOrderService } from "order-management/presentation/hooks/useOrderService";
import { IRepository } from "app/infra/repositories/IRepository";
import { PageTitle } from "app/presentation/components/page-title";
import { OrderListFilter } from "order-management/presentation/components/order-list-filter";
import { OrderList } from "order-management/presentation/components/order-list";

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
      <PageTitle title="Gestão de Pedidos" />
      <OrderListFilter />
      <OrderList orders={orders} />
    </div>
  );
}

export default OrderManagement;
