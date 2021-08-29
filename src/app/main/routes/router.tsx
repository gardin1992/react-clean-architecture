import { AxiosInstance } from "axios";
import { Route, Switch } from "react-router-dom";

import { makeOrderManagementRoutes } from "order-management/main/routes";
import { makeProductManagementRoutes } from "product-management/main/routes";
import { homeViewFactory } from "../factories/home-view-factory";

export type RouteType = {
  path: string;
  exact?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
};

type Props = {
  httpClient: AxiosInstance;
};

function Router({ httpClient }: Props) {
  const routes: RouteType[] = [
    {
      path: "/",
      component: () => homeViewFactory(),
      exact: true,
    },
    ...makeOrderManagementRoutes(httpClient),
    ...makeProductManagementRoutes(httpClient),
  ];

  return (
    <Switch>
      {routes.map((route) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
        />
      ))}
    </Switch>
  );
}

export default Router;
