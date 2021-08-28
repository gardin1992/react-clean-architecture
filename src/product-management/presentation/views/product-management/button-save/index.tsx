import { Button } from "app/presentation/components/Button/Button";
import { colors } from "app/presentation/styles/theme";

import styled from "styled-components";

export const SProductManagementTitle = styled.div`
  .title {
    font-size: 16px;
    margin: 10px;

    small {
      font-size: 12px;
      color: #666;
    }
  }
`;

export const SProductManagementButtonSave = styled(Button)`
  background-color: ${colors.delivered};
  color: ${colors.white};
  border-color: ${colors.delivered};
  margin: 0 auto;
  display: block;
  padding: 8px 24px;
  transition: background-color 0.3s, color 0.1;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.delivered};
  }
`;
