import { BrowserRouter } from "react-router-dom";

import ImgLogo from "assets/logo.png";

import { axiosHttpClient } from "app/infra/http";
import { Header } from "app/presentation/components/header";
import GlobalStyle from "app/presentation/styles/global";
import Router from "./routes/router";

function Main() {
  const title = process.env.REACT_APP_NAME;
  const httpClient = axiosHttpClient({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      "X-Api-Key": "111",
    },
  });

  return (
    <div className="Main">
      <BrowserRouter>
        <Header title={title} logo={ImgLogo} />
        <Router httpClient={httpClient} />
      </BrowserRouter>

      <GlobalStyle />
    </div>
  );
}

export default Main;
