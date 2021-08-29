import { RouteType } from "app/main/routes/router";
import { AxiosInstance } from "axios";
import {
  productManagementAddFactory,
  productManagementFactory,
} from "product-management/factories";

export function makeProductManagementRoutes(
  httpClient: AxiosInstance
): RouteType[] {
  return [
    {
      path: "/product-management",
      component: () => productManagementFactory(httpClient),
      exact: true,
    },
    {
      path: "/product-management/add",
      component: () => productManagementAddFactory(),
      exact: true,
    },
  ];
}
