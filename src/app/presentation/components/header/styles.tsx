import { colors } from "app/presentation/styles/theme";
import styled from "styled-components";

export const SHeaderLogo = styled.figure`
  padding: 10px;
  display: inline-block;
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
  margin-bottom: 20px;
`;
