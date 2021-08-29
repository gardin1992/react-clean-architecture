import { Button } from "app/presentation/components/button";
import { colors } from "app/presentation/styles/theme";
import styled from "styled-components";

export const SListFilterButton = styled(Button)`
  flex: 0 0 32%;
  background-color: ${colors.white};
  font-size: 16px;

  &:hover {
    color: ${colors.white} !important;
  }

  &.pending {
    color: ${colors.danger};
    border-color: ${colors.danger};

    &:hover {
      background-color: ${colors.danger};
    }
  }

  &.inPreparation {
    color: ${colors.warning};
    border-color: ${colors.warning};

    &:hover {
      background-color: ${colors.warning};
    }
  }

  &.ready {
    color: ${colors.info};
    border-color: ${colors.info};

    &:hover {
      background-color: ${colors.info};
    }
  }

  &.onWay {
    color: ${colors.secondary};
    border-color: ${colors.secondary};

    &:hover {
      background-color: ${colors.secondary};
    }
  }
  &.delivered {
    color: ${colors.success};
    border-color: ${colors.success};

    &:hover {
      background-color: ${colors.success};
    }
  }

  &.refused {
    color: ${colors.primary};
    border-color: ${colors.primary};

    &:hover {
      background-color: ${colors.primary};
    }
  }
`;
