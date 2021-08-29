import { axiosHttpClient } from "app/infra/http";
import { OrderRepository } from "order-management/main/repositories/OrderRepository";

import { ProductManagement } from "product-management/presentation/views/product-management-view";

export function productManagementFactory() {
  const httpClient = axiosHttpClient({
    baseURL: process.env.REACT_APP_API_URL,
  });

  const orderRepository = OrderRepository(httpClient);

  return <ProductManagement orderRepository={orderRepository} />;
}
