import { colors } from "app/presentation/styles/theme";
import styled, { css } from "styled-components";

export const CSSSuccess = css`
  &.success {
    background-color: ${colors.white};
    border-color: ${colors.success};
    color: ${colors.success};

    &:hover {
      background-color: ${colors.success};
      color: ${colors.white};
    }
  }
`;

export const CSSDanger = css`
  &.danger {
    background-color: ${colors.white};
    border-color: ${colors.danger};
    color: ${colors.danger};

    &:hover {
      background-color: ${colors.danger};
      color: ${colors.white};
    }
  }
`;

export const CSSWarning = css`
  &.warning {
    background-color: ${colors.white};
    border-color: ${colors.warning};
    color: ${colors.warning};

    &:hover {
      background-color: ${colors.warning};
      color: ${colors.white};
    }
  }
`;

export const CSSInfo = css`
  &.info {
    background-color: ${colors.white};
    border-color: ${colors.info};
    color: ${colors.info};

    &:hover {
      background-color: ${colors.info};
      color: ${colors.white};
    }
  }
`;

export const CSSPrimary = css`
  &.primary {
    background-color: ${colors.white};
    border-color: ${colors.primary};
    color: ${colors.primary};

    &:hover {
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  }
`;

export const CSSSecondary = css`
  &.secondary {
    background-color: ${colors.white};
    border-color: ${colors.secondary};
    color: ${colors.secondary};

    &:hover {
      background-color: ${colors.secondary};
      color: ${colors.white};
    }
  }
`;

export const CSSLight = css`
  &.light {
    background-color: ${colors.white};
    border-color: ${colors.black};
    color: ${colors.black};

    &:hover {
      background-color: ${colors.black};
      color: ${colors.white};
    }
  }
`;

export const CSSDark = css`
  &.dark {
    background-color: ${colors.black};
    border-color: ${colors.black};
    color: ${colors.white};

    &:hover {
      background-color: ${colors.white};
      color: ${colors.black};
    }
  }
`;

export const CSSLink = css`
  &.link {
    background-color: ${colors.white};
    border-color: ${colors.white};
    color: ${colors.info};
  }
`;
export const SButton = styled.button`
  border: 1px solid #000;
  padding: 8px 14px;
  /* color: ${colors.black};*/
  /* background-color: ${colors.white}; */
  cursor: pointer;

  ${CSSSuccess};
  ${CSSDanger};
  ${CSSWarning};
  ${CSSInfo};
  ${CSSPrimary};
  ${CSSLight};
  ${CSSSecondary};
  ${CSSDark};
  ${CSSLink};

  @media (max-width: 360px) {
    padding: 8px 5px;
  }
`;
