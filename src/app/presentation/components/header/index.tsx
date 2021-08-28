import { Link } from "react-router-dom";
import { SHeader, SHeaderLogo, SHeaderTitle } from "./styles";

export type HeaderProp = {
  title?: string;
  logo: string;
};

export function Header({ logo, title }: HeaderProp) {
  return (
    <Link to={"/"}>
      <SHeader>
        <SHeaderLogo>
          <img src={logo} alt="logo" title="logo" />
        </SHeaderLogo>
        <SHeaderTitle>{title}</SHeaderTitle>
      </SHeader>
    </Link>
  );
}
