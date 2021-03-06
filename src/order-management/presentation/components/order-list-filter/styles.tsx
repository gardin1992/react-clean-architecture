import styled from "styled-components";
import { SListFilterButton } from "../order-list-filter-button/styles";

export const SOrderListFilter = styled.div`
  background-color: #eaeaea;
  padding-top: 20px;
  padding-bottom: 20px;

  @media (min-width: 376px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

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
