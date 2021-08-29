import { axiosHttpClient } from "app/infra/http";
import { RouteType } from "app/main/routes/router";
import { orderManagementFactory } from "order-management/factories/order-management-factory";

const httpClient = axiosHttpClient({
  baseURL: process.env.REACT_APP_API_URL,
});

export const orderManagementRoutes: RouteType[] = [
  {
    path: "/order-management",
    component: () => orderManagementFactory(httpClient),
    exact: true,
  },
];
