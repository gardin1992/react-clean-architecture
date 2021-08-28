import styled from "styled-components";
import { SListFilterButton } from "./OrderListFilterButton/styles";

export const SListFilterGridButton = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  &:nth-child(2) {
    margin-top: 10px;
  }

  ${SListFilterButton} {
    flex: 0 0 32%;
  }
`;
