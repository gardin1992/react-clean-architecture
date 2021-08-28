import ImgLogo from "assets/logo.png";
import { Header } from "app/presentation/components/header";
import GlobalStyle from "app/presentation/styles/global";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";

function Main() {
  const title = process.env.REACT_APP_NAME;

  return (
    <div className="Main">
      <BrowserRouter>
        <Header title={title} logo={ImgLogo} />
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </div>
  );
}

export default Main;
