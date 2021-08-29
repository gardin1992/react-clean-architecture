import { Button } from "app/presentation/components/button";

import styled from "styled-components";

export const SProductManagementButton = styled(Button)`
  margin: 0 auto;
  display: block;
  padding: 8px 24px;
  transition: background-color 0.3s, color 0.1;
`;

SProductManagementButton.defaultProps = {
  variant: "success",
};
