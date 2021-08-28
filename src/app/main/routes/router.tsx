import { Route, Switch } from "react-router-dom";
import { orderManagementFactory, productManagementFactory } from "../factories";
import { homeViewFactory } from "../factories/home-view-factory";

type RouteType = {
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
  {
    path: "/order-management",
    component: () => orderManagementFactory(),
    exact: true,
  },
  {
    path: "/product-management",
    component: () => productManagementFactory(),
    exact: true,
  },
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
