import { useEffect } from "react";

import { OrderListFilter } from "order-management/presentation/views/OrderManagement/OrderListFilter";
import { useOrderService } from "order-management/presentation/hooks/useOrderService";
import { CardList } from "app/presentation/components/list/card-list";
import styled from "styled-components";
import { colors } from "app/presentation/styles/theme";
import {
  SListItemDecimal,
  SListItemTextSecondary,
  SListItemTitle,
  SListItemText,
} from "app/presentation/components/list/card-list/card-list-item/styles";
import { IRepository } from "app/infra/repositories/IRepository";

type OrderManagementProps = {
  orderRepository: IRepository;
};

const OrderListItemTest = styled(CardList)`
  background-color: red;

  li {
    &.orderListItem--Pendente {
      ${SListItemTitle},
      ${SListItemDecimal} {
        color: ${colors.black};
        font-size: 16px;
      }

      ${SListItemTextSecondary},
      ${SListItemText} {
        color: ${colors.black};
      }

      &:hover {
        background-color: ${colors.pending};

        ${SListItemTextSecondary},
        ${SListItemText} {
          color: ${colors.white};
        }
      }

      transition: background-color 0.3s;
    }

    &.inPreparation {
      background-color: #fff;
      color: #000;
    }

    &.ready {
      background-color: #fff;
      color: #000;
    }

    &.onWay {
      background-color: #fff;
      color: #000;
    }
  }
`;

export function ProductManagement({ orderRepository }: OrderManagementProps) {
  const { orders, getAllOrders } = useOrderService(orderRepository);

  useEffect(() => {
    getAllOrders({});

    console.log(orders);
  }, [getAllOrders, orders]);
  return (
    <div>
      <OrderListFilter />
      <OrderListItemTest
        className="OrderListItemTest"
        items={[
          {
            requestNumber: "string",
            status: "Pendente",
            title: "string",
            deliveryTime: new Date(),
            valueTotal: 0,
          },
        ]}
      />
    </div>
  );
}
