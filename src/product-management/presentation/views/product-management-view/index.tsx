import { useEffect } from "react";

import { useOrderService } from "order-management/presentation/hooks/useOrderService";

import { IRepository } from "app/infra/repositories/IRepository";
import { PageTitle } from "app/presentation/components/page-title";
import { SProductListItem } from "./styles";
import { randomOrder } from "order-management/main/utils/randoms";

type OrderManagementProps = {
  orderRepository: IRepository;
};

export function ProductManagement({ orderRepository }: OrderManagementProps) {
  const { orders, getAllOrders } = useOrderService(orderRepository);

  useEffect(() => {
    getAllOrders({});

    console.log(orders);
  }, [getAllOrders, orders]);

  return (
    <div>
      <PageTitle title="Gestão de Produto" subtitle="Lista dos Produtos" />
      <SProductListItem
        className="OrderListItemTest"
        items={[
          randomOrder(),
          randomOrder(),
          randomOrder(),
          { ...randomOrder(), status: "Em Preparo" },
        ]}
      />
    </div>
  );
}
