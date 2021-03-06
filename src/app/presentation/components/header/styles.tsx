import styled from "styled-components";
import { colors } from "app/presentation/styles/theme";

export const SHeaderLogo = styled.figure`
  padding: 10px;
  display: inline-block;
  img {
    width: 40px;
    height: 40;
    border-radius: 50%;
  }
`;

export const SHeaderTitle = styled.h1`
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
`;

export const SHeader = styled.header`
  flex-direction: row;
  align-items: center;
  display: flex;
  border-bottom: 1px solid ${colors.black};
`;
