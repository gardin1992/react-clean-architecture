import styled from "styled-components";

import { CardList } from "app/presentation/components/list/card-list";
import {
  SListItemTextSecondary,
  SListItemText,
} from "app/presentation/components/list/card-list/card-list-item/styles";
import { colors } from "app/presentation/styles/theme";

export const SOrderList = styled(CardList)`
  li {
    &:hover {
      ${SListItemTextSecondary},
      ${SListItemText} {
        color: ${colors.white};
      }
    }

    &.cardListItem--Pendente {
      box-shadow: 0px 4px 4px ${colors.danger};
      &:hover {
        background-color: ${colors.danger};
      }
    }

    &.cardListItem--EmPreparo {
      box-shadow: 0px 4px 4px ${colors.warning};
      &:hover {
        background-color: ${colors.warning};
      }
    }

    &.cardListItem--Pronto {
      box-shadow: 0px 4px 4px ${colors.info};
      &:hover {
        background-color: ${colors.info};
      }
    }

    &.cardListItem--ACaminho {
      box-shadow: 0px 4px 4px ${colors.secondary};
      &:hover {
        background-color: ${colors.secondary};
      }
    }

    &.cardListItem--Entregue {
      box-shadow: 0px 4px 4px ${colors.success};
      &:hover {
        background-color: ${colors.success};
      }
    }

    &.cardListItem--Recusado {
      box-shadow: 0px 4px 4px ${colors.primary};
      &:hover {
        background-color: ${colors.primary};
      }
    }
  }
`;
