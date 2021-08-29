import cx from "classnames";
import React from "react";
import {
  SFormGroup,
  SInput,
  SInputErrorMessage,
  SInputGroup,
  SInputLabel,
} from "./style";

export type FormInputProps = {
  label: string;
  placeholder?: string;
  hasError?: boolean;
  value?: string;
  handleOnChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "search" | "url";
  required?: boolean;
};

export function FormInput({
  label,
  placeholder,
  hasError,
  value,
  handleOnChange,
  type,
  required,
}: FormInputProps) {
  return (
    <SFormGroup className="">
      <SInputLabel>{label}</SInputLabel>

      <SInputGroup>
        <SInput
          type={type ?? "text"}
          name={label}
          value={value}
          placeholder={placeholder}
          onChange={handleOnChange}
          required={required}
        />
      </SInputGroup>

      <SInputErrorMessage className={cx({ show: hasError })}>
        Mensagem de erro.
      </SInputErrorMessage>
    </SFormGroup>
  );
}
