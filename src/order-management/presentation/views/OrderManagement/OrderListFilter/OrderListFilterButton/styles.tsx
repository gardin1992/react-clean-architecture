import { Button } from "app/presentation/components/Button/Button";
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
    color: ${colors.pending};
    border-color: ${colors.pending};

    &:hover {
      background-color: ${colors.pending};
    }
  }

  &.inPreparation {
    color: ${colors.inPreparation};
    border-color: ${colors.inPreparation};

    &:hover {
      background-color: ${colors.inPreparation};
    }
  }

  &.ready {
    color: ${colors.ready};
    border-color: ${colors.ready};

    &:hover {
      background-color: ${colors.ready};
    }
  }

  &.onWay {
    color: ${colors.onWay};
    border-color: ${colors.onWay};

    &:hover {
      background-color: ${colors.onWay};
    }
  }
  &.delivered {
    color: ${colors.delivered};
    border-color: ${colors.delivered};

    &:hover {
      background-color: ${colors.delivered};
    }
  }

  &.refused {
    color: ${colors.refused};
    border-color: ${colors.refused};

    &:hover {
      background-color: ${colors.refused};
    }
  }
`;
