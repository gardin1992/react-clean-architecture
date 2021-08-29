import { Repository } from "app/infra/repositories/repository";
import { AxiosInstance } from "axios";

import { ProductManagement } from "product-management/presentation/views/product-management-view";

export function productManagementFactory(httpClient: AxiosInstance) {
  const repository = new Repository(httpClient, "products");

  return <ProductManagement repository={repository} />;
}
