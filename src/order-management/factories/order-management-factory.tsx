import { axiosHttpClient } from "app/infra/http";
import { OrderRepository } from "order-management/main/repositories/OrderRepository";
import OrderManagement from "order-management/presentation/views/order-management";

export function orderManagementFactory() {
  const httpClient = axiosHttpClient({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const orderRepository = OrderRepository(httpClient);

  return <OrderManagement orderRepository={orderRepository} />;
}
