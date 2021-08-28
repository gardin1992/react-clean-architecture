import styled from "styled-components";

export const SFormGroup = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
`;

export const SInputGroup = styled.div`
  border-bottom: 1px solid #666;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 3px;
  width: 100%;
`;

export const SInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  color: #666;
  width: 100%;
`;

export const SInputLabel = styled.label`
  font-size: 12px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  display: inline-block;
  padding-top: 10px;
`;

export const SInputErrorMessage = styled.div`
  font-size: 10px;
  color: #dc3545;
  padding: 10px;
  opacity: 0;

  &.show {
    opacity: 1;
  }
`;
