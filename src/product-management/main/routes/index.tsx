import { axiosHttpClient } from "app/infra/http";
import { RouteType } from "app/main/routes/router";
import {
  productManagementAddFactory,
  productManagementFactory,
} from "product-management/factories";

const httpClient = axiosHttpClient({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "X-Api-Key": "111",
  },
});

export const productManagementRoutes: RouteType[] = [
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
