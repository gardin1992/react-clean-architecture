import cx from "classnames";
import React from "react";
import styled from "styled-components";

import {
  SFormGroup,
  SInput,
  SInputErrorMessage,
  SInputGroup,
  SInputLabel,
} from "../input-form/style";

export type FomInputCheckboxProps = {
  label: string;
  placeholder?: string;
  hasError?: boolean;
  checked?: boolean;
  required?: boolean;
  handleOnChange?: (e: React.FormEvent<HTMLInputElement>) => void;
};

export const SInputCheckboxGroup = styled(SInputGroup)`
  font-size: 16px !important;
  color: #666;
  position: relative;
`;

export const SInputCheckbox = styled(SInput)`
  width: initial;
  width: 16px;
  height: 16px;

  margin: 0;
  margin-right: 10px;
`;

export function FomInputCheckbox({
  label,
  placeholder,
  hasError,
  handleOnChange,
  checked,
  required,
}: FomInputCheckboxProps) {
  return (
    <SFormGroup className="">
      <SInputLabel>{label}</SInputLabel>

      <SInputCheckboxGroup>
        <SInputCheckbox
          type="checkbox"
          name={label}
          checked={checked}
          placeholder={placeholder}
          onChange={handleOnChange}
          required={required}
        />
        <span>Sim</span>
      </SInputCheckboxGroup>

      <SInputErrorMessage className={cx({ show: hasError })}>
        Mensagem de erro.
      </SInputErrorMessage>
    </SFormGroup>
  );
}
