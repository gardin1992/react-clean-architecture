// import { axiosHttpClient } from "app/infra/http";

import { ProductManagementAddView } from "product-management/presentation/views/product-management/product-management-add-view";

export function productManagementAddFactory() {
  // const httpClient = axiosHttpClient({
  //   baseURL: process.env.REACT_APP_API_URL,
  // });

  // const orderRepository = OrderRepository(httpClient);

  return <ProductManagementAddView /*orderRepository={orderRepository}*/ />;
}
