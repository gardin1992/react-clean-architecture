import {
  IRepository,
  RepositoryQueryProps,
} from "app/infra/repositories/IRepository";
import { OrderListItemProps } from "order-management/presentation/components/order-list-item";
import { useCallback } from "react";

const QUERY_SKIP = 0;
const QUERY_LIMIT = 10;

export function useOrderService(orderService: IRepository) {
  const orders: OrderListItemProps[] = [];

  const getAllOrders = useCallback(
    async (query: RepositoryQueryProps) => {
      const response = await orderService.getAll({
        skip: QUERY_SKIP,
        limit: QUERY_LIMIT,
        ...query,
      });
      return { body: response.body };
    },
    [orderService]
  );

  return {
    orders,
    getAllOrders,
  };
}
