import {
  SListFilterGridButton,
  SOrderListFilter,
} from "order-management/presentation/views/OrderManagement/OrderListFilter/styles";
import { OrderListFilterButton } from "./OrderListFilterButton";

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
