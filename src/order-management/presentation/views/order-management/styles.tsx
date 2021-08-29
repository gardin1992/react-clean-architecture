import styled from "styled-components";

import { CardList } from "app/presentation/components/list/card-list";
import { colors } from "app/presentation/styles/theme";
import {
  SListItemTextSecondary,
  SListItemText,
} from "app/presentation/components/list/card-list/card-list-item/styles";

export const SOrderListItem = styled(CardList)`
  li {
    &:hover {
      ${SListItemTextSecondary},
      ${SListItemText} {
        color: ${colors.white};
      }
    }

    &.cardListItem--Pendente:hover {
      background-color: ${colors.danger};
    }

    &.cardListItem--EmPreparo:hover {
      background-color: ${colors.warning};
    }

    &.cardListItem--Pronto:hover {
      background-color: ${colors.info};
    }

    &.cardListItem--ACaminho:hover {
      background-color: ${colors.secondary};
    }

    &.cardListItem--Entregue:hover {
      background-color: ${colors.success};
    }
    &.cardListItem--Recusado:hover {
      background-color: ${colors.primary};
    }
  }
`;
