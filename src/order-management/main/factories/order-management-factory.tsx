import { axiosHttpClient } from "app/infra/http";
import OrderManagement from "order-management/presentation/views/OrderManagement";
import { OrderRepository } from "../repositories/OrderRepository";

export function orderManagementFactory() {
  const httpClient = axiosHttpClient({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const orderRepository = OrderRepository(httpClient);

  return <OrderManagement orderRepository={orderRepository} />;
}
