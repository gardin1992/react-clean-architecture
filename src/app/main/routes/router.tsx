import { orderManagementRoutes } from "order-management/main/routes";
import { productManagementRoutes } from "product-management/main/routes";
import { Route, Switch } from "react-router-dom";
import { homeViewFactory } from "../factories/home-view-factory";

export type RouteType = {
  path: string;
  exact?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
};

const routes: RouteType[] = [
  {
    path: "/",
    component: () => homeViewFactory(),
    exact: true,
  },
  ...orderManagementRoutes,
  ...productManagementRoutes,
];

function Router() {
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
