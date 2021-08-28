import { RouteType } from "app/main/routes/router";
import {
  productManagementAddFactory,
  productManagementFactory,
} from "product-management/factories";

export const productManagementRoutes: RouteType[] = [
  {
    path: "/product-management",
    component: () => productManagementFactory(),
    exact: true,
  },
  {
    path: "/product-management/add",
    component: () => productManagementAddFactory(),
    exact: true,
  },
];
