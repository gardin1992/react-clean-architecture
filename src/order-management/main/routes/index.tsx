import { RouteType } from "app/main/routes/router";
import { AxiosInstance } from "axios";
import { orderManagementFactory } from "order-management/factories/order-management-factory";

export function makeOrderManagementRoutes(
  httpClient: AxiosInstance
): RouteType[] {
  return [
    {
      path: "/order-management",
      component: () => orderManagementFactory(httpClient),
      exact: true,
    },
  ];
}
