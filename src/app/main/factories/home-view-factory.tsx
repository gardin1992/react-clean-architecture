import Home from "app/presentation/views/home-view";

export type HomeViewFactoryProps = {
  children: JSX.Element | string;
};

// { children }: HomeViewFactoryProps

export function homeViewFactory() {
  return <Home />;
}
