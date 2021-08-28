import { colors } from "app/presentation/styles/theme";
import styled from "styled-components";

export const SListItemTitle = styled.h3`
  font-size: 16px;
  color: ${colors.black};
`;

export const SListITemRequestNumber = styled.span``;
export const SListITemStatus = styled.span``;
export const SListITemValueTotal = styled.span``;

export const SListItemGrid = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: space-between;
  height: 100%;
`;

export const SListItemRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SListItem = styled.li`
  align-items: flex-start;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex-direction: row;
  display: flex;
  height: 80px;
  justify-content: flex-start;
  margin-bottom: 10px;
  min-width: 360px;
  overflow: hidden;
  padding: 10px;

  &.orderListItem--Pendente {
    ${SListItemTitle},
    ${SListITemValueTotal} {
      color: ${colors.black};
      font-size: 16px;
    }

    ${SListITemStatus},
    ${SListITemRequestNumber} {
      color: ${colors.black};
    }

    &:hover {
      background-color: ${colors.pending};

      ${SListITemStatus},
      ${SListITemRequestNumber} {
        color: ${colors.white};
      }
    }

    transition: background-color 0.3s;
  }

  &.inPreparation {
    background-color: #fff;
    color: #000;
  }

  &.ready {
    background-color: #fff;
    color: #000;
  }

  &.onWay {
    background-color: #fff;
    color: #000;
  }
`;

export const SListItemImage = styled.figure`
  margin: 0 10px;

  img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }
`;
