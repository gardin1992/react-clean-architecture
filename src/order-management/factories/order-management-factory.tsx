import { Repository } from "app/infra/repositories/repository";
import { AxiosInstance } from "axios";
import OrderManagement from "order-management/presentation/views/order-management";

export function orderManagementFactory(httpClient: AxiosInstance) {
  const repository = new Repository(httpClient, "orders");

  return <OrderManagement repository={repository} />;
}
