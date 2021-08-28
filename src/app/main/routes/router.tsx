import { BrowserRouter, Route, Switch } from "react-router-dom";
import { orderManagementFactory, productManagementFactory } from "../factories";

type RouteType = {
  path: string;
  exact?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component: any;
};

const routes: RouteType[] = [
  {
    path: "/order-management",
    component: () => orderManagementFactory(),
  },
  {
    path: "/product-management",
    component: () => productManagementFactory(),
  },
];

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
