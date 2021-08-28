import { Header } from "app/presentation/components/header";
import GlobalStyle from "app/presentation/styles/global";
import Router from "./routes/router";
import ImgLogo from "assets/logo.png";

function Main() {
  const title = process.env.REACT_APP_NAME;

  return (
    <>
      <Header title={title} logo={ImgLogo} />
      <Router />
      <GlobalStyle />
    </>
  );
}

export default Main;
