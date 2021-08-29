import { OrderListFilterButton } from "order-management/presentation/components/order-list-filter-button";
import { SListFilterGridButton, SOrderListFilter } from "./styles";

export function OrderListFilter() {
  return (
    <SOrderListFilter>
      <SListFilterGridButton className="">
        <OrderListFilterButton variant={"pending"}>
          Pendente
        </OrderListFilterButton>
        <OrderListFilterButton variant={"inPreparation"}>
          Em Preparo
        </OrderListFilterButton>
        <OrderListFilterButton variant={"ready"}>Pronto</OrderListFilterButton>
      </SListFilterGridButton>

      <SListFilterGridButton className="">
        <OrderListFilterButton variant={"onWay"}>
          A Caminho
        </OrderListFilterButton>
        <OrderListFilterButton variant={"delivered"}>
          Entregue
        </OrderListFilterButton>
        <OrderListFilterButton variant={"refused"}>
          Recusado
        </OrderListFilterButton>
      </SListFilterGridButton>
    </SOrderListFilter>
  );
}
