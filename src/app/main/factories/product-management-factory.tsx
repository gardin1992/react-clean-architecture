// import { axiosHttpClient } from "app/infra/http";

import { ProductManagement } from "product-management/presentation/views/product-management";

export function productManagementFactory() {
  // const httpClient = axiosHttpClient({
  //   baseURL: process.env.REACT_APP_API_URL,
  // });

  // const orderRepository = OrderRepository(httpClient);

  return <ProductManagement /*orderRepository={orderRepository}*/ />;
}
