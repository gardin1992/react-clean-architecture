import { useEffect } from "react";

import { useRepository } from "order-management/presentation/hooks/useRepository";
import { IRepository } from "app/infra/repositories/IRepository";
import { PageTitle } from "app/presentation/components/page-title";
import { OrderListFilter } from "order-management/presentation/components/order-list-filter";
import { CardListItemProps } from "app/presentation/components/list/card-list/card-list-item";
import { getStatusFromIndex } from "order-management/main/utils/helper";
import { randomOrder } from "order-management/main/utils/randoms";
import { OrderList } from "order-management/presentation/components/order-list";

type Props = {
  repository: IRepository;
};

// Adicionar a interface do RemoteOrder (Model para o endpoit)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapperRemoteOrder(data: any[]): CardListItemProps[] {
  const items: CardListItemProps[] = data.map((item) => ({
    deliveryTime: item.forecast ? new Date(item?.forecast) : new Date(),
    requestNumber: item?._id,
    status: getStatusFromIndex(item?.status),
    title: item?.user?.user_name,
    valueTotal: item?.total,
    avatar: "https://cdn.fakercloud.com/avatars/vinciarts_128.jpg",
  }));

  return items;
}

function OrderManagement({ repository: orderRepository }: Props) {
  const { items, setItems, getAll } = useRepository(orderRepository);

  useEffect(() => {
    getAll({}).then(({ body }) => {
      const resultItems = mapperRemoteOrder(body?.data);
      setItems(resultItems);
    });
  }, [getAll, setItems]);

  return (
    <div>
      <PageTitle title="Gestão de Pedidos" />
      <OrderListFilter />
      <OrderList
        orders={[
          ...items,
          randomOrder(),
          randomOrder(),
          randomOrder(),
          randomOrder(),
        ]}
      />
    </div>
  );
}

export default OrderManagement;
