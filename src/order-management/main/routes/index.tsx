import { RouteType } from "app/main/routes/router";
import { orderManagementFactory } from "order-management/factories/order-management-factory";

export const orderManagementRoutes: RouteType[] = [
  {
    path: "/order-management",
    component: () => orderManagementFactory(),
    exact: true,
  },
];
